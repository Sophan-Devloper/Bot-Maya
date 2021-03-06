const canvacord = require('canvacord/src/Canvacord')
const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.inlineReply(adm)
  }

  let prefix = db.get(`prefix_${message.guild.id}`)
  if (prefix === null) prefix = "-"

  if (!args[0]) {
    return message.inlineReply('`' + prefix + 'affect @user`')
  }
  const member = message.mentions.users.first() || message.author

  if (member.id === message.author.id) {
    return message.inlineReply('Você não pode usar este comando com você mesmo.')
  }
  const memberAvatar = member.displayAvatarURL({ dynamic: false, format: 'png' })

  const image = await canvacord.affect(memberAvatar)
  const affect = new Discord.MessageAttachment(image, 'affect.png')
  return message.inlineReply(affect)
}