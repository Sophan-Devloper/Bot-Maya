const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    message.delete()

    const rody = message.author.id === ("451619591320371213")
    if (!rody)
        return message.channel.send('⚠️ Este comando é um comando restrito.').then(msg => msg.delete({ timeout: 5000 }))

    let user = message.mentions.members.first()
    if (!user)
        return message.channel.send('`-addlevel @user Quantidade`').then(msg => msg.delete({ timeout: 5000 }))

    let amount = args.slice(1).join(" ")
    if (!amount)
        return message.channel.send('`-addlevel @user Quantidade`').then(msg => msg.delete({ timeout: 5000 }))
    if (isNaN(amount))
        return message.channel.send('Eu acho que o valor que você me informou não é um número.').then(msg => msg.delete({ timeout: 5000 }))


    let level = db.fetch(`level_${user.id}`)
    if (level === null) { level = 0 }
    if (isNaN(amount))
        return message.channel.send('Eu acho que o valor que você me informou não é um número.').then(msg => msg.delete({ timeout: 5000 }))

    db.set(`level_${user.id}`, amount)
    message.channel.send('Prontinho, chefe.').then(msg => msg.delete({ timeout: 5000 }))
}