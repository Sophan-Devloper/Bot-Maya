const db = require('quick.db')
const { default_prefix } = require("../../config.json")

module.exports = {
    name: "prefix",
    category: "moderation",
    usage: "setprefix newprefix",
    description: "Mudar o prefix do server",
    run: async (client, message, args) => {

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("Você não pode mudar meu prefix, mas pode pedir pra algúm administrador fazer isso.").then(m => m.delete({ timeout: 5000 }))
        }

        await message.channel.send("Você deseja resetar meu prefix para `-`?").then(msg => {
            msg.react('✅') // Check
            msg.react('❌') // X

            msg.awaitReactions((reaction, user) => {
                if (message.author.id !== user.id) return

                if (reaction.emoji.name === '✅') { // home
                    msg.delete()
                    db.delete(`prefix_${message.guild.id}`)
                    message.channel.send(message.author.username + ", resetou o meu prefixo! ✅")
                }
                if (reaction.emoji.name === '❌') { // MPEmbed
                    msg.delete()
                    msg.channel.send("Comando cancelado.").then(msg => msg.delete({ timeout: 4000 }))
                }
            })
        })
    }
}