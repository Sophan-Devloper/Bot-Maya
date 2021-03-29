const Discord = require('discord.js')
const db = require('quick.db')

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
            return message.channel.send("Me fala o prefix que você quer, tenta assim:\n \nExemplo: `-setprefix !`").then(m => m.delete({ timeout: 7000 }))
        }

        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"
        if (args[0] === prefix) {
            const atual = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Este já é meu prefixo atual.')
            return message.channel.send(atual).then(msg => msg.delete({ timeout: 4000 }))
        }

        if (args[1]) {
            const space = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('O prefixo não pode ter espaços.')
            return message.channel.send(space).then(m => m.delete({ timeout: 4000 }))
        }

        if (args[0].length > 2) {
            const caracter = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('O prefixo não pode ter mais de 2 caracteres.')
            return message.channel.send(caracter).then(m => m.delete({ timeout: 4000 }))
        }

        const newprefix = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setDescription('Deseja alterar meu prefixo para: `' + args[0] + '`?')
        await message.channel.send(newprefix).then(msg => {
            msg.react('✅') // Check
            msg.react('❌') // X

            msg.awaitReactions((reaction, user) => {
                if (message.author.id !== user.id) return

                if (reaction.emoji.name === '✅') { // home
                    msg.delete()
                    db.set(`prefix_${message.guild.id}`, args[0])
                    const alterado = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setTitle('Prefixo alterado com sucesso!')
                    message.channel.send(alterado).then(msg => msg.delete({ timeout: 4000 }))
                }
                if (reaction.emoji.name === '❌') { // MPEmbed
                    msg.delete()
                    msg.channel.send("Comando cancelado.").then(msg => msg.delete({ timeout: 4000 }))
                }
            })
        }) // aqui
    }
}