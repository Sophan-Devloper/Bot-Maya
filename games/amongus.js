const Discord = require('discord.js')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.inlineReply(adm)
  }

  var game = 'Among Us'
  var link1 = 'https://store.steampowered.com/app/945360/Among_Us/'
  var link2 = 'https://play.google.com/store/apps/details?id=com.innersloth.spacemafia&hl=en'
  var st = 'Steam'
  var ps = 'Play Store'
  var win = 'Microsoft Windows'
  var ios = 'iOS'
  var an = 'Android'

  const GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${st}`, `${link1}`)
    .addField(`${ps}`, `${link2}`)
    .addField('Among Us Gratis (pc)', 'https://discord.gg/CSAKXC6')
    .setFooter(`Plataformas: ${win}, ${an}, ${ios}`)
  return message.inlineReply(GameEmbed)
}