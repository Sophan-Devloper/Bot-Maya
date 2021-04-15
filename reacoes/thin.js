const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.inlineReply(adm)
  }

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

  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author.username} está pensando...`)
    .setImage(rand)
  return message.inlineReply(embed)
}