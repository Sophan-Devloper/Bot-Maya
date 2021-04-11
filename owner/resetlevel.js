const db = require('quick.db')

exports.run = async (client, message, args) => {
    
    const rody = message.author.id === ("451619591320371213")
    if (!rody)
        return message.channel.send('⚠️ Este comando é um comando restrito.')

    let user = message.mentions.members.first()
    if (!user)
        return message.channel.send('`-resetlevel @user`')

    db.delete(`level_${user.id}`)
    db.delete(`xp_${user.id}`)
    return message.channel.send('Prontinho, chefe.')
}