const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    const rody = message.author.id === ("451619591320371213")
    if (!rody) {
        message.delete()
        return message.channel.send('⚠️ Este comando é um comando restrito.').then(msg => msg.delete({ timeout: 5000 }))
    }

    let user = message.mentions.members.first()
    if (!user)
        return message.channel.send('`-addxp @user Quantidade`').then(msg => msg.delete({ timeout: 5000 }))

    let amount = args.slice(1).join(" ")
    if (!amount)
        return message.channel.send('`-addxp @user Quantidade`').then(msg => msg.delete({ timeout: 5000 }))
    if (isNaN(amount))
        return message.channel.send('Eu acho que o valor que você me informou não é um número.').then(msg => msg.delete({ timeout: 5000 }))


    let xp = db.fetch(`xp_${user.id}`)
    if (xp === null) { xp = 0 }
    if (isNaN(amount))
        return message.channel.send('Eu acho que o valor que você me informou não é um número.').then(msg => msg.delete({ timeout: 5000 }))

    db.add(`xp_${user.id}`, amount)
    message.channel.send('Prontinho, chefe.')
}