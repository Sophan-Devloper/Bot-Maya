const Discord = require('discord.js')

exports.run = async (client, message, args) => {
   

  var game = 'Summoners War: Sky Arena'
  var link1 = 'https://play.google.com/store/apps/details?id=com.com2us.smon.normal.freefull.google.kr.android.common&hl=pt_BR'
  var ps = 'Play Store'
  var an = 'Android'

  const GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${ps}`, `${link1}`)
    .setFooter(`Plataformas: ${an}`)
  return message.channel.send(GameEmbed).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
}