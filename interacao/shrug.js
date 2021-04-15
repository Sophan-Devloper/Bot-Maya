const Discord = require('discord.js')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.inlineReply(adm)
  }

  var list = [
    'https://imgur.com/oXZYxLZ.gif',
    'https://imgur.com/xA8UWfA.gif',
    'https://imgur.com/VJ5XZ9q.gif',
    'https://imgur.com/RSkRWbW.gif',
    'https://imgur.com/xbj2xPP.gif',
    'https://imgur.com/XmqqRgn.gif',
    'https://imgur.com/tfrN6d8.gif',
    'https://imgur.com/pGJ2Mkw.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]

  const embed = new Discord.MessageEmbed()
    .setColor('#000000')
    .setDescription(`Fazer o que, né?`)
    .setImage(rand)
  return message.inlineReply(embed)
}