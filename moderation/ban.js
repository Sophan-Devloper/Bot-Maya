const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
  message.delete()

  let perms = message.member.hasPermission("BAN_MEMBERS")
  if (!perms) {
    const noperm = new Discord.MessageEmbed()
      .setColor('#FF0000') // Red 
      .setTitle('Permissão Necessária: Banir Membros')
    return message.channel.send(noperm).then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
  }

  let logchannel = db.get(`logchannel_${message.guild.id}`)
  if (logchannel === null) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const nolog = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Não há Canal Log registrado.')
      .setDescription('`' + prefix + 'setlogchannel #CanalLog`')
    return message.channel.send(nolog).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
  }

  if (!client.channels.cache.get(logchannel)) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const nolog1 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Parece que o canal log foi excluido.')
      .setDescription('`' + prefix + 'setlogchannel #CanalLog`')
    return message.channel.send(nolog1).then(msg => msg.delete({ timeout: 120000 })).catch(err => { return })
  }

  var user = message.mentions.members.first()
  if (!user) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const nouser = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Siga o formato')
      .setDescription('`' + prefix + 'ban @user Razão`')
    return message.channel.send(nouser).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
  }

  if (db.get(`whitelist_${user.id}`)) {// Rodrigo Couto
    const banrody = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle(user.user.username + ' está na whitelist.')
    return message.channel.send(banrody).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
  }

  if (user.id === message.author.id) {
    const autoban = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle('Banir você mesmo não é uma opção.')
    return message.channel.send(autoban).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
  }

  if (user.id === message.guild.owner.id) {
    const banowner = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle('Banir o dono do servidor não é uma opção.')
    return message.channel.send(banowner).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
  }

  if (user.hasPermission('BAN_MEMBERS')) {
    const banperm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle(`${user.user.username} tem permissões importantes neste servidor, não posso banir.`)
    return message.channel.send(banperm).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
  }

  var reason = args.slice(1).join(" ")
  if (!reason) reason = message.author.username + ' não especificou nenhuma razão.'

  const banEmbed = new Discord.MessageEmbed()
    .setTitle(`Sistema de Banimento - ${message.guild.name}`)
    .setColor('#FF0000')
    .addFields(
      {
        name: 'Usuário Banido',
        value: user.user,
        inline: true
      },
      {
        name: 'Nome da Conta',
        value: user.user.tag,
        inline: true
      },
      {
        name: 'ID do usuário',
        value: user.id
      },
      {
        name: 'Moderador',
        value: message.author.username
      },
      {
        name: 'Motivo',
        value: reason
      },
    )
    .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setFooter('Data')

  const startban = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`Você realmente deseja banir ${user.user} do servidor?`)

  await message.channel.send(startban).then(msg => {
    msg.react('✅') // Check
    msg.react('❌') // X

    msg.awaitReactions((reaction, user) => {
      if (message.author.id !== user.id) return

      if (reaction.emoji.name === '✅') { // Sim
        msg.delete()

        const banned = new Discord.MessageEmbed()
          .setColor('GREEN')
          .setTitle(`Você baniu ${user.username} com sucesso.`)
          .setDescription(`Relatório enviado ao ${client.channels.cache.get(logchannel)}`)

        message.mentions.members.first().ban().catch(err => { message.channel.send(`ERROR: ${err}`) })
        message.channel.send(banned)
        return client.channels.cache.get(logchannel).send(banEmbed)
      }
      if (reaction.emoji.name === '❌') { // Não
        msg.delete()
        const cancel = new Discord.MessageEmbed()
          .setColor('GREY')
          .setTitle('Comando cancelado.')

        message.channel.send(cancel).then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
      }
    })
  })
}