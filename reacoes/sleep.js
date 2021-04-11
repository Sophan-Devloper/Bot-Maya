const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

  var list = [
    'https://imgur.com/SoJBcCw.gif',
    'https://imgur.com/DauWpF7.gif',
    'https://imgur.com/9crVq2u.gif',
    'https://imgur.com/9crVq2u.gif',
    'https://imgur.com/RC6pnby.gif',
    'https://imgur.com/DmTrFZ7.gif',
    'https://imgur.com/wrSx1MX.gif',
    'https://imgur.com/HlsCuYa.gif',
    'https://imgur.com/F5m5j3q.gif',
    'https://imgur.com/iaCxziw.gif',
    'https://imgur.com/FNHo9Ar.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]
  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author.username} está com sono.`)
    .setImage(rand)
  return message.channel.send(embed)
}