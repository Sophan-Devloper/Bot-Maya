const db = require("quick.db")
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    const rody = message.author.id === ("451619591320371213")
    if (!rody) {
        return message.channel.send('⚠️ Este comando é um comando restrito.')
    }

    var user = message.mentions.members.first()
    if (!user) {
        return message.channel.send('Sem user no comando.')
    }

    db.delete(`blacklist_${user.id}`, user.id)
    const ok = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle(`${user.user.username} foi removido da blacklist com sucesso.`)
    return message.channel.send(ok)
}