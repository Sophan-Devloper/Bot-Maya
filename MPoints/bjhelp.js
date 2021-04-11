
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

  var linkgit = 'https://github.com/rodycouto/MayaCommands/blob/main/Exemplos/comojogarbj.md'

  const help = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle('♠️ ♥️ 21 Pontos - Blackjack ♣️ ♦️')
    .setDescription(`Olhe tudo sobe o Blackjack [cliquando aqui](${linkgit})`)
  return message.channel.send(help)

}