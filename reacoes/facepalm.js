const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

  var list = [
    'https://imgur.com/9zEHFOj.gif',
    'https://imgur.com/Q24PF7s.gif',
    'https://imgur.com/EZgl4vG.gif',
    'https://imgur.com/RxvSNe9.gif',
    'https://imgur.com/pHfHAPd.gif',
    'https://imgur.com/VJzBq0F.gif',
    'https://imgur.com/4N1aXJO.gif',
    'https://imgur.com/GVUNzI8.gif',
    'https://imgur.com/sD5Mlya.gif',
    'https://imgur.com/rZkPeYR.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]

  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author.username} se decepcionou`)
    .setImage(rand)
  return message.channel.send(embed)
}