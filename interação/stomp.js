const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()
  var list = [
    'https://imgur.com/McsRAGI.gif',
    'https://imgur.com/NhcfGAT.gif',
    'https://imgur.com/f6C1Mk7.gif',
    'https://imgur.com/nOVO5KC.gif',
    'https://imgur.com/E0zrKGs.gif',
    'https://imgur.com/lFTlLWk.gif',
    'https://imgur.com/7SNkffw.gif'
  ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = message.mentions.users.first() || client.users.cache.get(args[0])

if (!user)
return message.reply('você esqueceu de marca a pessoa que você quer pisar -> `-stomp @pessoa`').then(msg => msg.delete({timeout: 5000}))

const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} pisou em ${user} com força!`)
        .setImage(rand)
  await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}