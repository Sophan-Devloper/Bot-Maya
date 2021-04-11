const Discord = require('discord.js')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

  var game = 'Grand Theft Auto V - Rockstar Games'
  var link1 = 'https://www.rockstargames.com/'
  var link2 = 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/'
  var st = 'Steam'
  var site = 'Site Oficial'

  const GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${site}`, `${link1}`)
    .addField(`${st}`, `${link2}`)
    .setFooter(`Plataformas: PlayStation 5, PlayStation 4, Xbox Series X, PlayStation 3, Xbox 360, Xbox One, Microsoft Windows`)
  return message.channel.send(GameEmbed)
}