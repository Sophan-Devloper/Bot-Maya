const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  message.delete()

  var game = 'Valorant'
  var link1 = 'https://playvalorant.com/pt-br/'
  var site = 'Site Oficial'
  var win = 'Microsoft Windows'

  const GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${site}`, `${link1}`)
    .setFooter(`Plataformas: ${win}`)
  return message.channel.send(GameEmbed).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
}