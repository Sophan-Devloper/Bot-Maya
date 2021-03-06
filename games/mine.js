const Discord = require('discord.js')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.inlineReply(adm)
  }

  var game = 'Minecraft'
  var link1 = 'https://www.minecraft.net/pt-pt'
  var link2 = 'https://play.google.com/store/apps/details?id=com.mojang.minecraftpe&hl=pt'
  var ps = 'Play Store'
  var pt = 'PlayStation'
  var site = 'Site Oficial'
  var win = 'Microsoft Windows'
  var nsw = 'Nintendo Switch'
  var x = 'Xbox'
  var mc = 'MacOS'
  var ios = 'iOS'
  var an = 'Android'
  var li = 'Linux'

  const GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${site}`, `${link1}`)
    .addField(`${ps}`, `${link2}`)
    .setFooter(`Plataformas: ${win}, ${mc}, ${li}, ${an}, ${ios}, ${x} 360/One, Raspberry Pi, Windows Phone, ${pt} 4/Vita, Wii U, tvOS, ${nsw}, New Nintendo 3DS`)
  return message.inlineReply(GameEmbed)
}