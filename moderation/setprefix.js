const db = require('quick.db')
const { default_prefix } = require("../../config.json")

module.exports = {
    name: "prefix",
    category: "moderation",
    usage: "setprefix newprefix",
    description: "Mudar o prefix do server",
    run: async (client, message, args) => {
        message.delete()

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("Você não pode mudar meu prefix, mas pode pedir pra algúm administrador fazer isso.").then(m => m.delete({ timeout: 5000 }))
        }

        if (!args[0]) {
            return message.channel.send("Me fala o prefix que você quer, tenta assim:\n`-setprefix SeuNovoPrefix`, ex: `-setprefix !`").then(m => m.delete({ timeout: 7000 }))
        }

        if (args[1]) {
            return message.channel.send("O prefix não pode ter espaços, o Discord não permite isso.").then(m => m.delete({ timeout: 5000 }))
        }

        if (args[0].length > 2) {
            return message.channel.send("O prefix não pode ser maior que 2 caracteres, fica muito grande.").then(m => m.delete({ timeout: 5000 }))
        }

        await message.channel.send("Você irá alterar meu prefix para: " + args[0]).then(msg => {
            msg.react('✅') // Check
            msg.react('❌') // X

            msg.awaitReactions((reaction, user) => {
                if (message.author.id !== user.id) return

                if (reaction.emoji.name === '✅') { // home
                    msg.delete()
                    db.set(`prefix_${message.guild.id}`, args[0])
                    message.channel.send(`Prefix alterado para: ${args[0]}`).then(msg => msg.delete({ timeout: 4000 }))
                }
                if (reaction.emoji.name === '❌') { // MPEmbed
                    msg.delete()
                    msg.channel.send("Comando cancelado.").then(msg => msg.delete({ timeout: 4000 }))
                }
            })
        })
    }
}