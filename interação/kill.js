const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/m8ZtlNO.gif',
  'https://imgur.com/umCms9c.gif',
  'https://imgur.com/3uMLnPC.gif',
  'https://imgur.com/Pobe6Lo.gif',
  'https://imgur.com/q1AQ4vD.gif',
  'https://imgur.com/kVSTKPb.gif',
  'https://imgur.com/duiXoPW.gif',
  'https://imgur.com/HshuBMF.gif',
  'https://imgur.com/b7cFfKJ.gif',
  'https://imgur.com/NWEGNSx.gif',
  'https://imgur.com/V90HGXk.gif',
  'https://imgur.com/4nyxMrc.gif',
  'https://imgur.com/fFliWDG.gif',
  'https://imgur.com/CdoJ8Ac.gif',
  'https://imgur.com/8tPxaFx.gif',
  'https://imgur.com/FjtrdCW.gif',
  'https://imgur.com/kWIeWwk.gif'
    ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = message.mentions.users.first() || client.users.cache.get(args[0])

if (!user)
return message.reply('você não me disse quem você vai matar.').then(msg => msg.delete({timeout: 5000}))

const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} matou ${user} com sucesso!`)
        .setImage(rand)
  await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}