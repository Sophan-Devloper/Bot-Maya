const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

  var list = [
    'https://imgur.com/qERXcxZ.gif',
    'https://imgur.com/z8FmWuo.gif',
    'https://imgur.com/uzT4CTC.gif',
    'https://imgur.com/C4Lcets.gif',
    'https://imgur.com/UlMJxJP.gif',
    'https://imgur.com/osm4itQ.gif'
  ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = message.mentions.users.first() || client.users.cache.get(args[0])

if (!user)
return message.reply('você não me disse para quem você quer implorar, `-onegai @pessoa`').then(msg => msg.delete({timeout: 4000}))

const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} Esta Implorando para ${user}`)
        .setImage(rand)
  await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}