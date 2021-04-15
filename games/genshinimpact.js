const Discord = require('discord.js')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.inlineReply(adm)
  }
  
  var game = 'Genshin Impact RPG'
  var link1 = 'https://genshin.mihoyo.com/en'
  var link2 = 'https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact&hl=en_US&gl=US'
  var ps = 'Play Store'
  var pt = 'PlayStation'
  var w = 'Microsoft Windows'
  var ios = 'iOS'
  var an = 'Android'

  const TFMEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField('Site Oficial', `${link1}`)
    .addField(`${ps}`, `${link2}`)
    .setImage('https://imgur.com/380aoSo.gif')
    .setFooter(`Plataformas: ${w}, ${pt} 4, Nintendo Switch, ${an}, ${ios}`)
  return message.inlineReply(TFMEmbed)
}