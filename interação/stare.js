const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

  var list = [
    'https://imgur.com/l5xFcJ2.gif',
    'https://imgur.com/YoFsXOx.gif',
    'https://imgur.com/HNxV16F.gif',
    'https://imgur.com/6S5hxRr.gif',
    'https://imgur.com/MwOIxKg.gif',
    'https://imgur.com/1DV1Aix.gif',
    'https://imgur.com/HaPqlac.gif'
  ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = message.mentions.users.first() || client.users.cache.get(args[0])

if (!user)
return message.reply('você esqueceu de marca a pessoa que você quer ficar de olho -> `-stare @pessoa`').then(msg => msg.delete({timeout: 5000}))

const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} estou de olho em você ${user}`)
        .setImage(rand)
  await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}