const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  var game = '**Clash Royale**'
  var link1 = 'https://play.google.com/store/apps/details?id=com.supercell.clashroyale&hl=pt_BR'
  var link2 = 'https://apps.apple.com/br/app/clash-royale/id1053012308'
  var plat = 'Plataformas: Android, iOS'
  var ps = 'Play Store'
  var as = 'Apple Store'

  const HelpEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${ps}`, `${link1}`)
    .addField(`${as}`, `${link2}`)
    .setFooter(`${plat}`)
  return message.channel.send(HelpEmbed)
}