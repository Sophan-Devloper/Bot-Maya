const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  var list = [
    'https://imgur.com/I18iVJC.gif',
    'https://imgur.com/CwUSjuy.gif',
    'https://imgur.com/xsyIxxf.gif',
    'https://imgur.com/7Yffi3x.gif',
    'https://imgur.com/pls8egF.gif',
    'https://imgur.com/UjIb9DT.gif',
    'https://imgur.com/PcU00J4.gif',
    'https://imgur.com/Dm6n95I.gif',
    'https://imgur.com/KZtIoTd.gif',
    'https://imgur.com/BAaoe5w.gif',
    'https://imgur.com/bOK3DE5.gif',
    'https://imgur.com/J5GpZn0.gif',
    'https://imgur.com/vpFFvnP.gif',
    'https://imgur.com/tmHIJOM.gif',
    'https://imgur.com/XrRALez.gif',
    'https://imgur.com/Frhp0AN.gif',
    'https://imgur.com/9yIWXKH.gif',
    'https://imgur.com/oy1x3vY.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]

  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author.username} está chorando`)
    .setImage(rand)
  return message.channel.send(embed)
}