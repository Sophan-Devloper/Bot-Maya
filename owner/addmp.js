const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
   

    const rody = message.author.id === ("451619591320371213")
    if (!rody)
        return message.channel.send('⚠️ Este comando é um comando restrito.').then(msg => msg.delete({ timeout: 5000 }))

    let user = message.mentions.members.first()
    if (!user)
        return message.channel.send('`-addmp @user Quantidade`').then(msg => msg.delete({ timeout: 5000 }))

    let amount = args.slice(1).join(" ")
    if (!amount)
        return message.channel.send('`-addmp @user Quantidade`').then(msg => msg.delete({ timeout: 5000 }))
    if (isNaN(amount))
        return message.channel.send('Eu acho que o valor que você me informou não é um número.').then(msg => msg.delete({ timeout: 5000 }))

    let money = db.fetch(`money_${user.id}`)
    if (money === null) { money = 0 }

    db.add(`money_${user.id}`, amount)
    message.channel.send('Feito').then(msg => msg.delete({timeout: 4000}))
}