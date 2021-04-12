const db = require('quick.db')

exports.run = async (client, message, args) => {

    const rody = message.author.id === ("451619591320371213")
    if (!rody) {
        message.delete()
        return message.channel.send('⚠️ Este comando é um comando restrito.').then(msg => msg.delete({ timeout: 5000 }))
    }

    user = message.mentions.members.first()
    if (!user) {
        return message.channel.send('Quem é o @user? `addpeixes @user`')
    }

    db.add(`peixes_${user.id}`, args[1])
    return message.channel.send('Peixes adicionados.')
}