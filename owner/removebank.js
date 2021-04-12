const db = require('quick.db')

exports.run = async (client, message, args) => {

    let user = message.mentions.members.first()
    let amount = args[1]

    const rody = message.author.id === ("451619591320371213")
    if (!rody) {
        message.delete()
        return message.channel.send('⚠️ Este comando é restrito.').then(msg => msg.delete({ timeout: 5000 }))
    }
    if (!user)
        return message.channel.send('Você não me disse pra quem é pra remover o dinheiro, marque alguém por favor.').then(msg => msg.delete({ timeout: 6000 }))

    if (!amount)
        return message.channel.send('Qual a quantidade?').then(msg => msg.delete({ timeout: 6000 }))

    if (isNaN(amount))
        return message.channel.send('Eu acho que o valor que você me informou não é um número.').then(msg => msg.delete({ timeout: 5000 }))

    db.subtract(`bank_${user.id}`, amount)
    message.channel.send(`Foi removido ${amount}<:StarPoint:766794021128765469>MPoints do banco de ${user} com sucesso`)
}