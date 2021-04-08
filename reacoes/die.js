const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  var list = [
    'https://imgur.com/qw96vPH.gif',
    'https://imgur.com/crBAhdS.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]

  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author.username} morreu!`)
    .setImage(rand)
  return message.channel.send(embed)
}