const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

  var list = [
    'https://imgur.com/SA5DXP6.gif',
    'https://imgur.com/szr4sfd.gif',
    'https://imgur.com/nmHzWIX.gif',
    'https://imgur.com/145Sc4Z.gif'
  ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = message.mentions.users.first() || client.users.cache.get(args[0])

if (!user) 
    return message.reply('você não me disse pra quem você quer mostrar o dedo, `-dedo @pessoa`').then(msg => msg.delete({timeout: 5000}))

 const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} está mostrando o dedo para ${user}`)
        .setImage(rand)
        .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())
  
  await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}