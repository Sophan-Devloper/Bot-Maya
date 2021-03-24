const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    message.delete()

    const rody = message.author.id === ("451619591320371213")
    if (!rody)
        return message.channel.send('⚠️ Este comando é um comando restrito.').then(msg => msg.delete({ timeout: 5000 }))

    let user = message.mentions.members.first()
    if (!user)
        return message.channel.send('`-deletexp @user Quantidade`').then(msg => msg.delete({ timeout: 5000 }))

    db.delete(`xp_${user.id}`)
    db.delete(`level_${user.id}`)
    message.channel.send('Prontinho, chefe.').then(msg => msg.delete({ timeout: 5000 }))
}