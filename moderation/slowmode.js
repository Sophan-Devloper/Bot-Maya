const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  name: "slowmode",
  category: "utility",
  description: "Set the slowmode for the channel!",

  run: async (bot, message, args) => {
    message.delete()

    let permss = message.member.hasPermission("MANAGE_CHANNELS")
    if (!permss) {
      const noperm = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Permissão Necessária: Manusear Canais')
      return message.channel.send(noperm).then(msg => msg.delete({ timeout: 7000 })).catch(err => { return })
    }

    if (!args[0]) {
      let prefix = db.get(`prefix_${message.guild.id}`)
      if (prefix === null) prefix = "-"

      const noargs = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Siga o formato correto')
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
      return message.channel.send(noargs).then(msg => msg.delete({ timeout: 15000 })).catch(err => { return })
    }

    if (args[0] === 'off') {
      message.channel.setRateLimitPerUser(0)

      const noslow = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle(message.author.username + ' desativou o slowmode nesse canal')
      return message.channel.send(noslow)
    }

    if (isNaN(args[0])) {
      const number = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('`' + args[0] + '` não é um número.')
      return message.channel.send(number).then(msg => msg.delete({ timeout: 6000 })).catch(err => { return })
    }

    if (args[0] < 1) {
      const number = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('O tempo mínimo é 1 segundo')
      return message.channel.send(number).then(msg => msg.delete({ timeout: 6000 })).catch(err => { return })
    }

    message.channel.setRateLimitPerUser(args[0])
    const slowmode = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle(`${message.author.username} colocou o canal em Slowmode.`)
      .setDescription('Tempo definido: `' + args[0] + ' segundos.`')
    message.channel.send(slowmode)
  }
}