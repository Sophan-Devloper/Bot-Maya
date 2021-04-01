const db = require("quick.db")
const Discord = require("discord.js")

module.exports = {
    run: async (client, message, args) => {
      message.delete()

        const rody = message.author.id === ("451619591320371213")
        if (!rody) {
            return message.channel.send('⚠️ Este comando é um comando restrito.').then(msg => msg.delete({ timeout: 5000 }))
        }

        var user = message.mentions.members.first()
        if (!user) {
            return message.channel.send(`-whitelist user`)
        }

        db.add(`whitelist_${user.id}`, user.id)
        const ok = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle(`${user.user.username} foi adicionado a whitelist com sucesso.`)
        return message.channel.send(ok)
    }
}