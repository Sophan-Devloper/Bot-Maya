const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/3QM8YxZ.gif',
  'https://imgur.com/qNyHmLB.gif',
  'https://imgur.com/FFrPSGw.gif',
  'https://imgur.com/RG0Pt1t.gif',
  'https://imgur.com/f5qMc9B.gif',
  'https://imgur.com/kQJKYVC.gif',
  'https://imgur.com/AjzQFgA.gif',
  'https://imgur.com/dbMwiBU.gif',
  'https://imgur.com/QlmZnsu.gif',
  'https://imgur.com/5AKQMbC.gif',
  'https://imgur.com/QuLO5oW.gif'
        ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = client.users.cache.get(args[0])

const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription(`${message.author.username} está feliiiiz :partying_face:`)
        .setImage(rand)
    await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}