const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

  var list = [
    'https://imgur.com/gGRb7mi.gif',
    'https://imgur.com/b03s5vA.gif',
    'https://imgur.com/6rIIk0f.gif',
    'https://imgur.com/PMa4osv.gif',
    'https://imgur.com/JvMnmgd.gif',
    'https://imgur.com/thTxf8S.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]

  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author.username} está triste`)
    .setImage(rand)
  return message.channel.send(embed)
}