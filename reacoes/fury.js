const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  var list = [
    'https://imgur.com/mYdWlN7.gif',
    'https://imgur.com/cwMPCad.gif',
    'https://imgur.com/U87JuNA.gif',
    'https://imgur.com/NJ6VGf7.gif',
    'https://imgur.com/mFS7UAy.gif',
    'https://imgur.com/CDY7wsT.gif',
    'https://imgur.com/70EPhLu.gif',
    'https://imgur.com/nrHXQoE.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]

  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author.username} está **FURIOSO**!`)
    .setImage(rand)
  return message.channel.send(embed)
}