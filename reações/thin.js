const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

  var list = [
    'https://imgur.com/CWhbgUi.gif',
    'https://imgur.com/NcPs1vb.gif',
    'https://imgur.com/4PdAqQb.gif',
    'https://imgur.com/a0m7XtQ.gif',
    'https://imgur.com/txn2gYq.gif',
    'https://imgur.com/b1QJPMT.gif',
    'https://imgur.com/AYTiN3X.gif',
    'https://imgur.com/lj2yGDC.gif',
    'https://imgur.com/GEMICFG.gif',
    'https://imgur.com/h42MSIR.gif',
    'https://imgur.com/191ip4V.gif',
    'https://imgur.com/t4oqtRB.gif'
    ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = client.users.cache.get(args[0])

const embed = new Discord.MessageEmbed()
    .setColor('#000000')
    .setDescription(`${message.author.username} está pensando...`)
    .setImage(rand)
  await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}