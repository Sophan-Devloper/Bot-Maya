const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/zo4Tkvo.gif',
  'https://imgur.com/tzceUKQ.gif',
  'https://imgur.com/pG8q63o.gif',
  'https://imgur.com/YWMSyc6.gif',
  'https://imgur.com/fvDmIUg.gif',
  'https://imgur.com/hLqp0Bi.gif',
  'https://imgur.com/N2i2CP5.gif',
  'https://imgur.com/8s4uSWY.gif',
  'https://imgur.com/b3PnHrI.gif',
  'https://imgur.com/aCPrqSh.gif',
  'https://imgur.com/mK3jMnb.gif',
  'https://imgur.com/KKq3cal.gif',
  'https://imgur.com/ZSxProk.gif'
     ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = client.users.cache.get(args[0])

const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author.username} TA PISTOLAA!!`)
        .setImage(rand)
  await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}