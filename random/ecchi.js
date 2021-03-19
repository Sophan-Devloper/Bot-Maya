const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/YhJgGX0.gif',
  'https://imgur.com/Xv6ERdq.gif',
  'https://imgur.com/pRhhfTm.gif',
  'https://imgur.com/kU6qTMl.gif',
  'https://imgur.com/ABZO6k7.gif',
  'https://imgur.com/CEUvmDM.gif',
  'https://imgur.com/iyRk2am.gif',
  'https://imgur.com/MyzrKtN.gif'
     ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = client.users.cache.get(args[0])

const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`:flushed:`)
        .setImage(rand)
        .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())
   await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}