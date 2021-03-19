const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/ghtNfE9.gif',
  'https://imgur.com/xyCAFWc.gif',
  'https://imgur.com/6gAisvv.gif',
  'https://imgur.com/4HIukDs.gif',
  'https://imgur.com/867BE2L.gif',
  'https://imgur.com/QZgruaz.gif'
     ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = message.mentions.users.first() || client.users.cache.get(args[0])

if (!user)
return message.reply('você esqueceu quem você quer chupar, `-suck @user`').then(msg => msg.delete({timeout: 5000}))

const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} está chupando ${user}.`)
        .setImage(rand)
        .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())
   await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}