const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/9zEHFOj.gif',
  'https://imgur.com/Q24PF7s.gif',
  'https://imgur.com/EZgl4vG.gif',
  'https://imgur.com/RxvSNe9.gif',
  'https://imgur.com/pHfHAPd.gif',
  'https://imgur.com/VJzBq0F.gif',
  'https://imgur.com/4N1aXJO.gif',
  'https://imgur.com/GVUNzI8.gif',
  'https://imgur.com/sD5Mlya.gif',
  'https://imgur.com/rZkPeYR.png'
     ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = client.users.cache.get(args[0])

const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} se decepcionou`)
        .setImage(rand)
        .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())
  await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}