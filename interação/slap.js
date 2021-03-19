const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/fm49srQ.gif',
  'https://imgur.com/4MQkDKm.gif',
  'https://imgur.com/o2SJYUS.gif',
  'https://imgur.com/oOCq3Bt.gif',
  'https://imgur.com/Agwwaj6.gif',
  'https://imgur.com/tb2uVVV.gif',
  'https://imgur.com/YA7g7h7.gif',
  'https://imgur.com/xMttEjS.gif',
  'https://imgur.com/mIg8erJ.gif',
  'https://imgur.com/oRsaSyU.gif',
  'https://imgur.com/kSLODXO.gif',
  'https://imgur.com/CwbYjBX.gif',
  'https://imgur.com/orjYBoH.gif',
  'https://imgur.com/kUNr4vk.gif',
  'https://imgur.com/T00nSoV.gif',
  'https://imgur.com/NSeL8jO.gif',
  'https://imgur.com/NaLhZ8m.gif',
  'https://imgur.com/8p95SIi.gif',
  'https://imgur.com/8af2u1Q.gif',
  'https://imgur.com/wYgsQNc.gif',
  'https://imgur.com/HT6pXv0.gif',
  'https://imgur.com/EueJXaU.gif',
  'https://imgur.com/N6ilHRG.gif',
  'https://imgur.com/N6ilHRG.gif'
    ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = message.mentions.users.first() || client.users.cache.get(args[0])

if (!user)
return message.reply('você esqueceu de marcar em quem você que dar um tapa. `-slap @user`').then(msg => msg.delete({timeout: 5000}))

const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} deu um tapa em ${user}`)
        .setImage(rand)
        .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())
  await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}