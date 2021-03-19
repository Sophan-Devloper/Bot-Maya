const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/qPzrtI3.gif',
  'https://imgur.com/DA1TD46.gif'
     ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = client.users.cache.get(args[0])

let avatar = message.author.displayAvatarURL({format: 'png'})

const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setImage(rand)
        .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())
   await message.channel.send(embed).then(msg => msg.delete({timeout: 5000}))
}