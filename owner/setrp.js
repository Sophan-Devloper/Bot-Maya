const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    message.delete()

        const rody = message.author.id === ("451619591320371213")
    if (!rody)
        return message.channel.send('⚠️ Este comando é restrito.').then(msg => msg.delete({ timeout: 5000 }))

    let user = message.mentions.members.first()
    if (!args[0] === user)
        return message.channel.send('Você não me disse o @user.').then(msg => msg.delete({ timeout: 6000 }))

    let amount = args.slice(1).join(" ")
    if (!args[0] === amount)
        return message.channel.send('`-setrp @user Quantidade`').then(msg => msg.delete({ timeout: 5000 }))
    if (isNaN(amount))
        return message.channel.send('Eu acho que o valor que você me informou não é um número.').then(msg => msg.delete({ timeout: 5000 }))

    db.set(`rp_${user.id}`, amount)
    message.channel.send(`Feito.`).then(msg => msg.delete({ timeout: 6000 }))
}