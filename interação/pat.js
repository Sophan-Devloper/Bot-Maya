const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/2lacG7l.gif',
  'https://imgur.com/UWbKpx8.gif',
  'https://imgur.com/4ssddEQ.gif',
  'https://imgur.com/2k0MFIr.gif',
  'https://imgur.com/nPr3s5D.gif',
  'https://imgur.com/LUypjw3.gif',
  'https://imgur.com/F3cjr3n.gif',
  'https://imgur.com/NNOz81F.gif',
  'https://imgur.com/cqIJIh4.gif',
  'https://imgur.com/5OQMI1m.gif',
  'https://imgur.com/48c0jVX.gif',
  'https://imgur.com/Iq9eZ5o.gif'
    ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = message.mentions.users.first() || client.users.cache.get(args[0])

if (!user)
return message.reply('você não me disse em quem você quer dar carinho, `-pat @pessoa`').then(msg => msg.delete({timeout: 5000}))

const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} está dando carinho para ${user}`)
        .setImage(rand)
  await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}