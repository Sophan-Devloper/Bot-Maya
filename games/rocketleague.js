const Discord = require('discord.js')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

  var game = 'Rocket League - Epic Games'
  var link1 = 'https://www.epicgames.com/store/pt-BR/product/rocket-league/home'

  const GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`Epic Games`, `${link1}`)
    .setFooter(`Plataformas: PlayStation 4, Nintendo Switch, Xbox One, macOS, Microsoft Windows, Linux, Mac OS Classic`)
  return message.channel.send(GameEmbed)
}