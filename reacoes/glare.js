const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

  var list = [
    'https://imgur.com/zo4Tkvo.gif',
    'https://imgur.com/tzceUKQ.gif',
    'https://imgur.com/pG8q63o.gif',
    'https://imgur.com/YWMSyc6.gif',
    'https://imgur.com/fvDmIUg.gif',
    'https://imgur.com/hLqp0Bi.gif',
    'https://imgur.com/N2i2CP5.gif',
    'https://imgur.com/8s4uSWY.gif',
    'https://imgur.com/b3PnHrI.gif',
    'https://imgur.com/aCPrqSh.gif',
    'https://imgur.com/mK3jMnb.gif',
    'https://imgur.com/KKq3cal.gif',
    'https://imgur.com/ZSxProk.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]
  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author.username} TA PISTOLAA!!`)
    .setImage(rand)
  return message.channel.send(embed)
}