const Discord = require('discord.js')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.inlineReply(adm)
  }

  var game = 'Brawl Stars'
  var link1 = 'https://play.google.com/store/apps/details?id=com.supercell.brawlstars&hl=pt_BR'
  var link2 = 'https://apps.apple.com/br/app/brawl-stars/id1229016807'
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
  return message.inlineReply(GameEmbed)
}