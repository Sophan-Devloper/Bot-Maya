const canvacord = require('canvacord/src/Canvacord')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

  const member = message.mentions.users.first() || message.author;
  const memberAvatar = member.displayAvatarURL({ dynamic: false, format: 'png' })

  const image = await canvacord.affect(memberAvatar)
  const affect = new Discord.MessageAttachment(image, 'affect.png')
  return message.channel.send(`${message.author}`, affect)
}