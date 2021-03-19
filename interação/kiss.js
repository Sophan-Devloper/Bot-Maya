const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/II1bakc.gif',
  'https://imgur.com/MzAjNdv.gif',
  'https://imgur.com/eKcWCgS.gif',
  'https://imgur.com/uobBW9K.gif',
  'https://imgur.com/VrETTlv.gif',
  'https://imgur.com/FozOXkB.gif',
  'https://imgur.com/7GhTplD.gif',
  'https://imgur.com/B6UKulT.gif',
  'https://imgur.com/6i5zWCx.gif',
  'https://imgur.com/Uow8no2.gif',
  'https://imgur.com/uuabzNk.gif',
  'https://imgur.com/EwQPLZI.gif',
  'https://imgur.com/I159BUo.gif',
  'https://imgur.com/8YZFU1Z.gif',
  'https://imgur.com/agdhkfE.gif',
  'https://imgur.com/hJGrpyU.gif',
  'https://imgur.com/uPtDEh6.gif',
  'https://imgur.com/pDScNqs.gif',
  'https://imgur.com/gWIm5bK.gif',
  'https://imgur.com/1IuyOxK.gif',
  'https://imgur.com/gsong8x.gif',
  'https://imgur.com/4Pw0uxb.gif'
  ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = message.mentions.users.first() || client.users.cache.get(args[0])

if (!user) 
return message.reply('você não marcou quem você quer beijar.').then(msg => msg.delete({timeout: 5000}))

if(user === message.author) 
return message.reply("você não pode beijar você mesmo >.< `-kiss @user`").then(msg => msg.delete({timeout: 5000}))

const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} beijou ${user} com sucesso!`)
        .setImage(rand)
        .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())
  await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}