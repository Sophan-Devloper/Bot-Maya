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

        if (!args[0]) {
            return message.channel.send("Me fala o prefix que você quer, tenta assim:\n`-setprefix SeuNovoPrefix`, ex: `-setprefix !`").then(m => m.delete({ timeout: 7000 }))
        }

        if (args[1]) {
            return message.channel.send("O prefix não pode ter espaços, o Discord não permite isso.").then(m => m.delete({ timeout: 5000 }))
        }

        if (args[0].length > 2) {
            return message.channel.send("O prefix não pode ser maior que 2 caracteres, fica muito grande.").then(m => m.delete({ timeout: 5000 }))
        }

        if (args.join("") === default_prefix) {
            db.delete(`prefix_${message.guild.id}`)
            return await message.channel.send(message.author.username + ", resetou o meu prefixo! ✅")
        }

        db.set(`prefix_${message.guild.id}`, args[0])
        await message.channel.send(`Prefix alterado para: ${args[0]}`)

    }
}