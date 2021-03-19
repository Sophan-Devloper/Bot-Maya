const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/CPTozLv.gif',
  'https://imgur.com/5aq8D6c.gif',
  'https://imgur.com/XP3GFfT.gif',
  'https://imgur.com/79xL32Q.gif',
  'https://imgur.com/KFs6dKC.gif',
  'https://imgur.com/5U8gQ4n.gif',
  'https://imgur.com/EpBlqOx.gif',
  'https://imgur.com/HUC8k8C.gif',
  'https://imgur.com/vS1plk0.gif',
  'https://imgur.com/FqOuFTy.gif',
  'https://imgur.com/g8BxzSC.gif',
  'https://imgur.com/c51iZqH.gif',
  'https://imgur.com/8R75YyG.gif',
  'https://imgur.com/CqSNKyj.gif'
    ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = message.mentions.users.first() || client.users.cache.get(args[0])

if (!user)
  return message.reply('opa, você esqueceu quem você quer cumprimentar, `-greet @user`').then(msg => msg.delete({timeout: 5000}))

const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} está cumprimentando ${user}`)
        .setImage(rand)
        .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL()) 
   await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}