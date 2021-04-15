const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.inlineReply(adm)
  }

  let prefix = db.get(`prefix_${message.guild.id}`)
  if (prefix === null) { prefix = "-" }

  const embed = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle(`${message.author.username} está pedindo um pouco de dinheiro`)
    .setDescription(`${prefix}doar ${message.author} Valor`)
  return message.inlineReply(embed)
}