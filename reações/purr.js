const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/p3NZxtv.gif',
  'https://imgur.com/7wPOxjB.gif',
  'https://imgur.com/yysvbuO.gif',
  'https://imgur.com/mLogX42.gif',
  'https://imgur.com/lGBWW5K.gif',
  'https://imgur.com/eXo9BY3.gif'
     ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = client.users.cache.get(args[0])

const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} está gostando disso.`)
        .setImage(rand)
        .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())
  await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}