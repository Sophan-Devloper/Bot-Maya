const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  var list = [
    'https://imgur.com/pkQLxS0.gif',
    'https://imgur.com/w1LV6mW.gif',
    'https://imgur.com/yHpwB80.gif',
    'https://imgur.com/nqWmdmr.gif',
    'https://imgur.com/ec7IRV9.gif',
    'https://imgur.com/CGdF80m.gif',
    'https://imgur.com/BmwRbAL.gif',
    'https://imgur.com/qr73B39.gif',
    'https://imgur.com/aVCvPPs.gif',
    'https://imgur.com/1VCiYEW.gif',
    'https://imgur.com/xnlXTuU.gif',
    'https://imgur.com/ojEzYJI.gif',
    'https://imgur.com/fhFqbcR.gif'
  ]

  var gifs = list[Math.floor(Math.random() * list.length)]

  const ShyEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author.username} está com vergonha...`)
    .setImage(gifs)
  return message.channel.send(ShyEmbed)
}