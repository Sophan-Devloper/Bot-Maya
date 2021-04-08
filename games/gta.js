const Discord = require('discord.js')

exports.run = async (client, message, args) => {
   

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
  return message.channel.send(GameEmbed).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
}