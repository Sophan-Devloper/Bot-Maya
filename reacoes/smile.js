const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.inlineReply(adm)
  }

  var list = [
    'https://imgur.com/QK8cwtR.gif',
    'https://imgur.com/oJkRMdJ.gif',
    'https://imgur.com/29dAyoP.gif',
    'https://imgur.com/WynaI9R.gif',
    'https://imgur.com/0pPidWf.gif',
    'https://imgur.com/jWfVX9M.gif',
    'https://imgur.com/3fbA1AK.gif',
    'https://imgur.com/LwlQ4TQ.gif',
    'https://imgur.com/FO56cRi.gif',
    'https://imgur.com/oeDg5RU.gif',
    'https://imgur.com/dHSDVHL.gif',
    'https://imgur.com/cx30ip7.gif',
    'https://imgur.com/IatiaHU.gif',
    'https://imgur.com/UMhVcKN.gif',
    'https://imgur.com/Q7UWMMr.gif',
    'https://imgur.com/zC5hHs1.gif',
    'https://imgur.com/dNrvVjS.gif',
    'https://imgur.com/rEceQOt.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]

  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author.username} está sorrindo`)
    .setImage(rand)
  return message.inlineReply(embed)
}