const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/SoJBcCw.gif',
  'https://imgur.com/DauWpF7.gif',
  'https://imgur.com/9crVq2u.gif',
  'https://imgur.com/9crVq2u.gif',
  'https://imgur.com/RC6pnby.gif',
  'https://imgur.com/DmTrFZ7.gif',
  'https://imgur.com/wrSx1MX.gif',
  'https://imgur.com/HlsCuYa.gif',
  'https://imgur.com/F5m5j3q.gif',
  'https://imgur.com/iaCxziw.gif',
  'https://imgur.com/FNHo9Ar.gif'
    ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = client.users.cache.get(args[0])
    
const embed = new Discord.MessageEmbed()
      .setColor('#000000')
      .setDescription(`${message.author} está com sono.`)
      .setImage(rand)
      .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())
 await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}));
}