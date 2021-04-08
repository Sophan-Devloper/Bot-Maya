const Discord = require('discord.js')

exports.run = async (client, message, args) => {
   

  var game = 'Rocket League - Epic Games'
  var link1 = 'https://www.epicgames.com/store/pt-BR/product/rocket-league/home'

  const GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`Epic Games`, `${link1}`)
    .setFooter(`Plataformas: PlayStation 4, Nintendo Switch, Xbox One, macOS, Microsoft Windows, Linux, Mac OS Classic`)
  return message.channel.send(GameEmbed).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
}