const db = require('quick.db')

exports.run = async (client, message, args) => {

    const rody = message.author.id === ("451619591320371213")
    if (!rody) {
        message.delete()
        return message.channel.send('⚠️ Este comando é um comando restrito.').then(msg => msg.delete({ timeout: 5000 }))
    }

    let member = message.mentions.users.first()
    if (!member) {
        return message.channel.send('Você se esqueceu do `@user`').then(msg => msg.delete({ timeout: 6000 }))
    }

    if (!args[1]) {
        return message.channel.send('Qual a quantidade?').then(msg => msg.delete({ timeout: 5000 }))
    }
    if (isNaN(args[1])) {
        return message.channel.send('Isso não é um número').then(msg => msg.delete({ timeout: 4000 }))
    }

    db.add(`rp_${member.id}`, args[1])

    message.channel.send(`Feito.`)
}