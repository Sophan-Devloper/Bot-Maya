const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/LFZfUsJ.gif',
  'https://imgur.com/Yvhlp1r.gif',
  'https://imgur.com/TQ6FcAG.gif',
  'https://imgur.com/terWE4l.gif',
  'https://imgur.com/Bta6nGN.gif',
  'https://imgur.com/jIEUPVf.gif',
  'https://imgur.com/s2VwYxD.gif',
  'https://imgur.com/rc3lYTa.gif',
  'https://imgur.com/L9qnxnv.gif'
     ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = message.mentions.users.first() || client.users.cache.get(args[0])

if (!user)
return message.reply('quem você quer cutucar? `-poke @user`').then(msg => msg.delete({timeout: 5000}))

const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} cutucou ${user}`)
        .setImage(rand)
        .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())
   await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}