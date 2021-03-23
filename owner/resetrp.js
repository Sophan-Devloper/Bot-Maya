const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
  message.delete()

  let user = message.mentions.members.first() || message.author
  let amount = args.slice(1).join(" ")
  let money = db.fetch(`money_${message.guild.id}_${user.id}`)
  if (money === null) { money = 0 }

  const rody = message.author.id === ("451619591320371213")
  if (!rody)
    return message.channel.send('⚠️ Este comando é restrito.').then(msg => msg.delete({ timeout: 5000 }))

  if (!user)
    return message.channel.send('Você não me disse pra quem é pra dar reset no RPoints, marque alguém por favor.').then(msg => msg.delete({ timeout: 6000 }))

  if (!amount)
    return message.channel.send('Hey, você não me disse a quantidade').then(msg => msg.delete({ timeout: 6000 }))

  if (isNaN(amount))
    return message.channel.send('Eu acho que o valor que você me informou não é um número.').then(msg => msg.delete({ timeout: 5000 }))

  db.delete(`money_${message.guild.id}_${user.id}`, amount)
  message.channel.send(`Os RPoints de ${user} foi resetado com sucesso`)
  user.dm(`Todos os seus RPoints em ${user.guild.name} foram resetados.`)
}