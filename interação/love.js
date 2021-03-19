const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/HVDnnyE.gif',
  'https://imgur.com/79G3VWI.gif',
  'https://imgur.com/XVzZ00R.gif',
  'https://imgur.com/XVzZ00R.gif',
  'https://imgur.com/639Y4lK.gif',
  'https://imgur.com/9eqn94K.gif',
  'https://imgur.com/Zq0w4L3.gif',
  'https://imgur.com/JHvhrni.gif',
  'https://imgur.com/cz9UNLw.gif',
  'https://imgur.com/WF8kNUz.gif'  
    ]

var lovesgifs = list[Math.floor(Math.random() * list.length)]
let user = message.mentions.users.first() || client.users.cache.get(args[0])

if(!user)
    return message.channel.send('Você não me disse pra quem é o Love, tenta assim `-love @user`').then(msg => msg.delete({timeout: 4000}))

  const Loveembed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${user}, alguém ama muito você.`)
        .setImage(lovesgifs)
  await message.channel.send(Loveembed).then(msg => msg.delete({timeout: 10000})).then(message.user.send('Alguém mandou um Love para você c.c'))
}