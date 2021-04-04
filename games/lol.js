const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  message.delete()

  var game = 'League of Legends'
  var link1 = 'https://na.leagueoflegends.com/pt-br/'
  var site = 'Site Oficial'
  var win = 'Microsoft Windows'
  var mc = 'MacOS'

  const GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${site}`, `${link1}`)
    .setFooter(`Plataformas: ${win}, ${mc}`)
  return message.channel.send(GameEmbed).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
}