const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
   

  let user = message.mentions.members.first()
  let amount = args.slice(1).join(" ")
  let money = db.fetch(`money_${user.id}`)
  if (money === null) money = 0

  const rody = message.author.id === ("451619591320371213")
  if (!rody)
    return message.channel.send('⚠️ Este comando é restrito.').then(msg => msg.delete({ timeout: 5000 }))

  if (!user)
    return message.channel.send('Você não me disse o user.').then(msg => msg.delete({ timeout: 6000 }))

  db.delete(`money_${user.id}`)
  message.channel.send(`Os MPoints de ${user} foi resetado com sucesso`)
}