const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/ixqmPUG.gif',
  'https://imgur.com/fcQKlLL.gif',
  'https://imgur.com/WtIcBUB.gif',
  'https://imgur.com/XXPT5jN.gif',
  'https://imgur.com/lBhuZIZ.gif',
  'https://imgur.com/NaD26Am.gif'
     ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = message.mentions.users.first() || client.users.cache.get(args[0])

if (!user)
return message.reply('você esqueceu de marcar alguém `-lick @user`').then(msg => msg.delete({timeout: 5000}))


const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} está lambendo ${user}`)
        .setImage(rand)
        .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL()) 
   await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}