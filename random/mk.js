const Discord = require('discord.js')

exports.run = async (client, message, args) => {
   

  var linkserver = 'https://discord.gg/mx8eMx6'

  const HelpEmbed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(':hearts: Mystic Kingdom :hearts:')
    .setURL('https://discord.gg/mx8eMx6')
    .setDescription(`${message.author}, vem pra minha casa :heart:\n \n[Meu servidor](${linkserver})`)
    .setImage('https://imgur.com/cjoVaGJ.gif')
  await message.channel.send(HelpEmbed).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
}