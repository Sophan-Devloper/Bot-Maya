const Discord = require('discord.js')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

  var game = 'Haboo Hotel'
  var link1 = 'https://www.habbo.com.br/'
  var link2 = 'https://play.google.com/store/apps/details?id=air.com.sulake.habboair&hl=pt-br'
  var ps = 'Play Store'
  var site = 'Site Oficial'
  var win = 'Microsoft Windows'
  var ios = 'iOS'
  var an = 'Android'
  var nv = 'Navegador'

  const GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${site}`, `${link1}`)
    .addField(`${ps}`, `${link2}`)
    .setFooter(`Plataformas: ${nv}, ${an}, ${win}, ${ios}`)
  return message.channel.send(GameEmbed)
}