const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

  var list = [
    'https://imgur.com/oXZYxLZ.gif',
    'https://imgur.com/xA8UWfA.gif',
    'https://imgur.com/VJ5XZ9q.gif',
    'https://imgur.com/RSkRWbW.gif',
    'https://imgur.com/xbj2xPP.gif',
    'https://imgur.com/XmqqRgn.gif',
    'https://imgur.com/mxL57Uo.gif',
    'https://imgur.com/tfrN6d8.gif',
    'https://imgur.com/pGJ2Mkw.gif'
  ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = message.mentions.users.first() || client.users.cache.get(args[0])

if (!user)
return message.reply('você esqueceu de marca a pessoa que você quer dar de ombros -> `-shrug @pessoa`').then(msg => msg.delete({timeout: 5000}))

const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`Fazer o que, né ${user}?`)
        .setImage(rand)
  await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}