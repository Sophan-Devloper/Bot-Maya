const Discord = require('discord.js')

exports.run = async (client, message, args) => {
   

  var list = [
    'https://imgur.com/p3NZxtv.gif',
    'https://imgur.com/7wPOxjB.gif',
    'https://imgur.com/yysvbuO.gif',
    'https://imgur.com/mLogX42.gif',
    'https://imgur.com/lGBWW5K.gif',
    'https://imgur.com/eXo9BY3.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]

  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author.username} está gostando disso.`)
    .setImage(rand)
  return message.channel.send(embed)
}