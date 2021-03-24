const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

  var list = [
    'https://imgur.com/hVscHek.gif',
    'https://imgur.com/2TSylJL.gif'
  ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = message.mentions.users.first() || client.users.cache.get(args[0])

if (!user)
return message.reply('você não me disse quem você quer roubar, `-rob @pessoa`').then(msg => msg.delete({timeout: 5000}))

const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} roubou ${user} e saiu correndo`)
        .setImage(rand)
  await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}