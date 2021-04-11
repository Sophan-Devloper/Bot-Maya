const Discord = require('discord.js')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

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
  return message.channel.send(GameEmbed)
}