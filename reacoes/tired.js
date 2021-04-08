const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  var list = [
    'https://imgur.com/Gkel36E.gif',
    'https://imgur.com/BVSgNuq.gif',
    'https://imgur.com/XohOnWv.gif',
    'https://imgur.com/d8QQgnf.gif',
    'https://imgur.com/HYpSxgw.gif',
    'https://imgur.com/k51u431.gif',
    'https://imgur.com/SHtdL4s.gif',
    'https://imgur.com/YQz7bUL.gif',
    'https://imgur.com/xjxB8bx.gif',
    'https://imgur.com/hBHsV3N.gif',
    'https://imgur.com/RhpBfgg.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]

  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author.username} está chateado :tired_face:`)
    .setImage(rand)
  return message.channel.send(embed)
}