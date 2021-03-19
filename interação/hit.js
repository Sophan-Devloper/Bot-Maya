const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/T1sDMLA.gif',
  'https://imgur.com/5niochn.gif',
  'https://imgur.com/GGfSu9s.gif',
  'https://imgur.com/LygOJ5M.gif',
  'https://imgur.com/HTlpSAQ.gif',
  'https://imgur.com/fS4E13N.gif',
  'https://imgur.com/8vPPdZr.gif',
  'https://imgur.com/lIZEcOn.gif',
    ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = message.mentions.users.first() || client.users.cache.get(args[0])

if (!user)
return message.reply('você esqueceu de marcar em quem você quer bater.').then(msg => msg.delete({timeout: 5000}))

const embed = new Discord.MessageEmbed()
        .setTitle('Briga, briga, briga')
        .setColor('#000000')
        .setDescription(`${message.author} você arrebentou ${user} com sucesso!`)
        .setImage(rand)
        .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())
  
    await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}