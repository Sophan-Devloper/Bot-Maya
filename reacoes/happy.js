const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.inlineReply(adm)
  }
   
  var list = [
    'https://imgur.com/3QM8YxZ.gif',
    'https://imgur.com/qNyHmLB.gif',
    'https://imgur.com/FFrPSGw.gif',
    'https://imgur.com/RG0Pt1t.gif',
    'https://imgur.com/f5qMc9B.gif',
    'https://imgur.com/kQJKYVC.gif',
    'https://imgur.com/AjzQFgA.gif',
    'https://imgur.com/dbMwiBU.gif',
    'https://imgur.com/QlmZnsu.gif',
    'https://imgur.com/5AKQMbC.gif',
    'https://imgur.com/QuLO5oW.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]

  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author.username} está feliiiiz :partying_face:`)
    .setImage(rand)
  return message.inlineReply(embed)
}