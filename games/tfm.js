const Discord = require('discord.js')

exports.run = async (client, message, args) => {
   

  var game = 'Transformice'
  var link1 = 'https://store.steampowered.com/app/335240/Transformice/'
  var link2 = 'https://www.transformice.com/'
  var st = 'Steam'
  var w = 'Microsoft Windows'
  var mc = 'MacOS'
  var nv = 'Navegador'

  const TFMEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${st}`, `${link1}`)
    .addField(`${nv}`, `${link2}`)
    .setFooter(`Plataformas: ${w}, ${mc}`)
  return message.channel.send(TFMEmbed).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
}