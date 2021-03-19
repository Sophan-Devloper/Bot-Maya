const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/gVpxrzK.gif',
  'https://imgur.com/Nemm1pQ.gif',
  'https://imgur.com/Uq9PWC2.gif',  
  'https://imgur.com/hYQJMUE.gif',
  'https://imgur.com/XosXY1z.gif',
  'https://imgur.com/6YTvzGQ.gif',
  'https://imgur.com/uzx2f68.gif'  
      ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = client.users.cache.get(args[0])

const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} mandou um Explooosion!`)
        .setImage(rand)
        .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())
  await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}