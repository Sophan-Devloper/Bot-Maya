const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/uXL0iTg.gif',
  'https://imgur.com/U8W2LSy.gif',
  'https://imgur.com/Y0rsWyI.gif',
  'https://imgur.com/QTTHhp1.gif',
  'https://imgur.com/hI6bUlY.gif',
  'https://imgur.com/e1ofXDH.gif',
  'https://imgur.com/Zhw4mwC.gif',
  'https://imgur.com/mJousjU.gif',
  'https://imgur.com/cZWWATV.gif',
  'https://imgur.com/LPftvE0.gif',
  'https://imgur.com/dwxp3zn.gif',
  'https://imgur.com/hpddahS.gif',
  'https://imgur.com/LHBOVKM.gif',
  'https://imgur.com/Fkchj2G.gif',
  'https://imgur.com/ao4wesH.gif'
]

var rand = list[Math.floor(Math.random() * list.length)]
let user = message.mentions.users.first() || client.users.cache.get(args[0])

if (!user)
return message.reply('espera um pouco, quem você quer abraçar?').then(msg => msg.delete({timeout: 5000}))

const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} abraçou ${user}`)
        .setImage(rand)
  
    await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}