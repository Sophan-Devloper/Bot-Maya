const db = require("quick.db")
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    const rody = message.author.id === ("451619591320371213")
    if (!rody) {
        return message.channel.send('⚠️ Este comando é um comando restrito.')
    }

    var user = message.mentions.members.first()
    if (!user) {
        return message.channel.send(`-whitelist user`)
    }

    if (db.get(`whitelist_${user.id}`)) {
        const ok = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle(`${user.user.username} já está na whitelist`)
        return message.channel.send(ok)
    }

    db.add(`whitelist_${user.id}`, user.id)
    const ok = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle(`${user.user.username} foi adicionado a whitelist com sucesso.`)
    return message.channel.send(ok)
}