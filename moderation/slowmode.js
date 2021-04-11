const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Manusear Canais" para utilizar esta função.')
    return message.channel.send(adm)
  }

  if (!message.member.hasPermission('MANAGE_CHANNELS')) {
    const perms = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Permissão Necessária: Manusear Canais')
    return message.channel.send(perms)
  }

  if (!args[0]) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const noargs = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Slowmode Informações')
      .setDescription('Com o slowmode, você dita um intervalo que os membros podem mandar mensagens.')
      .addFields(
        {
          name: 'Ative o Slowmode',
          value: '`' + prefix + 'slowmode 10`' + '*(segundos)*',
          inline: true
        },
        {
          name: 'Desative o Slowmode',
          value: '`' + prefix + 'slowmode off`',
          inline: true
        }
      )
    return message.channel.send(noargs)
  }

  if (args[0] === 'off') {
    message.channel.setRateLimitPerUser(0)

    const noslow = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle(`${message.author.username} desativou o slowmode.`)
    return message.channel.send(noslow)
  }

  if (isNaN(args[0])) {
    const number = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('`' + args[0] + '` não é um número.')
    return message.channel.send(number)
  }

  if (args[0] < 1) {
    const number = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('O tempo mínimo é 1 segundo')
    return message.channel.send(number)
  }

  message.channel.setRateLimitPerUser(args[0])
  const slowmode = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(`${message.author.username} colocou o canal em Slowmode.`)
    .setDescription('Tempo definido: `' + args[0] + ' segundos.`')
  message.channel.send(slowmode)
}