const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

  var list = [
    'https://imgur.com/ysAPqlq.gif',
    'https://imgur.com/RiGAeVi.gif',
    'https://imgur.com/u22MvjV.gif',
    'https://imgur.com/sApDtmL.gif',
    'https://imgur.com/SaWl9WZ.gif',
    'https://imgur.com/IBemNsf.gif',
    'https://imgur.com/IYERy6u.gif',
    'https://imgur.com/KrwTEcA.gif',
    'https://imgur.com/eKnsdcY.gif',
    'https://imgur.com/VRGyeYO.gif',
    'https://imgur.com/wt3RiFP.gif',
    'https://imgur.com/3ejDAKF.gif',
    'https://imgur.com/QRuxGIo.gif',
    'https://imgur.com/RaF6UGK.gif',
    'https://imgur.com/fevJuY7.gif',
    'https://imgur.com/7xsA4aN.gif',
    'https://imgur.com/ctLc73q.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]

  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author.username} está dançando`)
    .setImage(rand)
  return message.channel.send(embed)
}