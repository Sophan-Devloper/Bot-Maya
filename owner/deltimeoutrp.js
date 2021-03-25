const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    message.delete()

    let member = message.mentions.users.first()

    const rody = message.author.id === ("451619591320371213")
    if (!rody)
        return message.channel.send('⚠️ Este comando é restrito.').then(msg => msg.delete({ timeout: 5000 }))

    if (!member)
        return message.channel.send('Você não me disse pra quem é pra remover o dinheiro, marque alguém por favor.').then(msg => msg.delete({ timeout: 6000 }))

    db.delete(`rptimeout_${message.author.id}`)
    message.channel.send(`Timeout resetado.`).then(msg => msg.delete({ timeout: 6000 }))
}