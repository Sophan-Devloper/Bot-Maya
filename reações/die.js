const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/qw96vPH.gif',
  'https://imgur.com/crBAhdS.gif'
     ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = client.users.cache.get(args[0])

const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author.username} morreu!`)
        .setImage(rand)
  await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}