const Discord = require('discord.js')
const db = require("quick.db")

module.exports = {
  run: (client, message, args) => {
    message.delete()
    const user = message.mentions.members.first() || message.author

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    if (warnings === null) warnings = 0

    const warns = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle(`${user.user.username} tem ${warnings} avisos.`)

    if (warnings === 1) {
      const w1 = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle(`${user.user.username} tem 1 aviso.`)
      return message.channel.send(w1).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    message.channel.send(warns).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
  }
}