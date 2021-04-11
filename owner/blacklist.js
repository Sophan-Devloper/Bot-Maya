const db = require("quick.db")
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    const rody = message.author.id === ("451619591320371213")
    if (!rody) {
        message.delete()
        return message.channel.send('⚠️ Este comando é um comando restrito.').then(msg => msg.delete({ timeout: 5000 }))
    }

    var user = message.mentions.members.first()
    if (!user) {
        return message.channel.send('Sem user no comando.')
    }

    if (db.get(`blacklist_${user.id}`)) {
        const ok = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle(`${user.user.username} já está na  blacklist.`)
        return message.channel.send(ok).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    db.add(`blacklist_${user.id}`, user.id)
    const ok = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle(`${user.user.username} foi adicionado a blacklist com sucesso.`)
    return message.channel.send(ok)
}