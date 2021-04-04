const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  message.delete()

  var game = 'Garena Free Fire'
  var link1 = 'https://play.google.com/store/apps/details?id=com.dts.freefireth&hl=pt_BR'
  var link2 = 'https://apps.apple.com/us/app/garena-free-fire-wonderland/id1300146617'
  var ps = 'Play Store'
  var as = 'Apple Store'
  var ios = 'iOS'
  var an = 'Android'

  const GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${ps}`, `${link1}`)
    .addField(`${as}`, `${link2}`)
    .setFooter(`Plataformas: ${an}, ${ios}`)
  return message.channel.send(GameEmbed).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
}