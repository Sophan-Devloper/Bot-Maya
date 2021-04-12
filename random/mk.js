const Discord = require('discord.js')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

  var linkserver = 'https://discord.gg/YpFWgJuuUV'

  const HelpEmbed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(':hearts: Mystic Kingdom :hearts:')
    .setURL('https://discord.gg/YpFWgJuuUV')
    .setDescription(`${message.author}, vem pra minha casa :heart:\n \n[Meu servidor](${linkserver})`)
    .setImage('https://imgur.com/cjoVaGJ.gif')
  await message.channel.send(HelpEmbed)
}