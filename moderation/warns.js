const Discord = require('discord.js')
const db = require("quick.db")

exports.run = async (client, message, args) => {

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
    return message.channel.send(w1)
  }

  if (warnings === 0) {
    const w1 = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle(`${user.user.username} não tem avisos.`)
    return message.channel.send(w1)
  }

  return message.channel.send(warns)
}