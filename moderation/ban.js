const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
  message.delete()

  let perms = message.member.hasPermission("BAN_MEMBERS")
  if (!perms) {
    const noperm = new Discord.MessageEmbed()
      .setColor('#FF0000') // Red 
      .setTitle('Permissão Necessária: Banir Membros')
    return message.channel.send(noperm).then(msg => msg.delete({ timeout: 4000 })).catch(err => {return})
  }

  let logchannel = db.get(`logchannel_${message.guild.id}`)
  if (logchannel === null) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const nolog = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Não há Canal Log registrado.')
      .setDescription('`' + prefix + 'setlogchannel #CanalLog`')
    return message.channel.send(nolog).then(msg => msg.delete({ timeout: 10000 })).catch(err => {return})
  }

  if (!client.channels.cache.get(logchannel)) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const nolog1= new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Parece que o canal log foi excluido.')
      .setDescription('`' + prefix + 'setlogchannel #CanalLog`')
    return message.channel.send(nolog1).then(msg => msg.delete({ timeout: 120000 })).catch(err => {return})
  }

  var member = message.mentions.members.first()
  if (!member) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const nomember = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Siga o formato')
      .setDescription('`' + prefix + 'ban @user Razão`')
    return message.channel.send(nomember).then(msg => msg.delete({ timeout: 5000 })).catch(err => {return})
  }

  if (member.id === '451619591320371213') {// Rodrigo Couto
    const banrody = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle(member.user.username + ' está na whitelist.')
    return message.channel.send(banrody).then(msg => msg.delete({ timeout: 5000 })).catch(err => {return})
  }

  if (member.id === '516026271529173004') {// Rafael Couto
    const banrafa = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle(member.user.username + ' está na whitelist.')
    return message.channel.send(banrafa).then(msg => msg.delete({ timeout: 5000 })).catch(err => {return})
  }

  if (member.id === '821471191578574888') {// Maya
    const banmaya = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle(member.user.username + ' está na whitelist.')
    return message.channel.send(banmaya).then(msg => msg.delete({ timeout: 5000 })).catch(err => {return})
  }

  if (member.id === message.author.id) {
    const autoban = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle('Banir você mesmo não é uma opção.')
    return message.channel.send(autoban).then(msg => msg.delete({ timeout: 5000 })).catch(err => {return})
  }

  if (member.id === message.guild.owner.id) {
    const banowner = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle('Banir o dono do servidor não é uma opção.')
    return message.channel.send(banowner).then(msg => msg.delete({ timeout: 5000 })).catch(err => {return})
  }

  if (member.hasPermission('BAN_MEMBERS')) {
    const banperm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle(`${member.user.username} tem permissões importantes neste servidor, não posso banir.`)
    return message.channel.send(banperm).then(msg => msg.delete({ timeout: 5000 })).catch(err => {return})
  }

  var reason = args.slice(1).join(" ")
  if (!reason) reason = message.author.username + ' não especificou nenhuma razão.'

  const banEmbed = new Discord.MessageEmbed()
    .setTitle(`Sistema de Banimento - ${message.guild.name}`)
    .setColor('#FF0000')
    .addFields(
      {
        name: 'Usuário Banido',
        value: member.user,
        inline: true
      },
      {
        name: 'Nome da Conta',
        value: member.user.tag,
        inline: true
      },
      {
        name: 'ID do usuário',
        value: member.id
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
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setFooter('Data')

  const startban = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`Você realmente deseja banir ${member.user.username} do servidor?`)

  await message.channel.send(startban).then(msg => {
    msg.react('✅') // Check
    msg.react('❌') // X

    msg.awaitReactions((reaction, user) => {
      if (message.author.id !== user.id) return

      if (reaction.emoji.name === '✅') { // Sim
        msg.delete()
        
        const banned = new Discord.MessageEmbed()
          .setColor('GREEN')
          .setTitle(`Você baniu ${member.user.username} com sucesso.`)
          .setDescription(`Relatório enviado ao ${logchannel.name}`)

        member.ban()
        message.channel.send(banned)
        return client.channels.cache.get(logchannel).send(banEmbed)
      }
      if (reaction.emoji.name === '❌') { // Não
        msg.delete()
        const cancel = new Discord.MessageEmbed()
          .setColor('GREY')
          .setTitle('Comando cancelado.')

        message.channel.send(cancel).then(msg => msg.delete({ timeout: 4000 })).catch(err => {return})
      }
    })
  })
}