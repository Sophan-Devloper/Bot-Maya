const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
  message.delete()

  if (!message.member.hasPermission('BAN_MEMBERS')) {
    const permss = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Permissão Necessária: Banir Membros')
    return message.channel.send(permss).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
  }

  let logchannel = db.get(`logchannel_${message.guild.id}`)
  if (logchannel === null) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const nochannel = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('O logchannel não foi definido.')
      .setDescription('`' + prefix + 'setlogchannel #CanalLog`')
    return message.channel.send(nochannel).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
  }

  if (!db.get(`logchannel_${message.guild.id}`)) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const nochannel = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('O logchannel não foi definido.')
      .setDescription('`' + prefix + 'setlogchannel #CanalLog`')
    return message.channel.send(nochannel).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
  }

  let member = args[0]
  if (!member) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const nomember = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('`' + prefix + 'unban IdDoUsuário`')
      .setDescription('Não tem o ID do usuário? \n`Configurações do Servidor - Banimentos - Copie o ID do usuário`')
    return message.channel.send(nomember).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
  }

  if (args[0].length <= 17) {
    const noid = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Por favor, informe o ID de um usuário')
      .setDescription('Não tem o ID do usuário? \n`Configurações do Servidor - Banimentos - Copie o ID do usuário`')
    return message.channel.send(noid).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
  }

  const UnbanEmbed = new Discord.MessageEmbed()
    .setTitle(`Usuário Desbanido`)
    .setColor('#GREEN')
    .addFields(
      {
        name: 'ID Usuário',
        value: member,
        inline: true
      },
      {
        name: 'Moderador',
        value: message.author.username,
        inline: true
      }
    )
    .setTimestamp()

  try {
    message.guild.fetchBans().then(bans => { message.guild.members.unban(member) })
    await client.channels.cache.get(logchannel).send(UnbanEmbed)
  } catch (e) {
    var linksupport = 'https://forms.gle/vtJ5qBqFDd9rL5JU8'
    var discordserver = 'https://discord.gg/mx8eMx6'
    const errorembed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Ocorreu um erro no desbanimento')
      .setDescription(e)
      .addFields(
        {
          name: 'Caso não saiba resolver, fale conosco',
          value: `[Support Maya](${linksupport}\n[Discord Server](${discordserver})\nMeu criador: Rody#3756`
        }
      )
    return message.channel.send(errorembed)
  }
}