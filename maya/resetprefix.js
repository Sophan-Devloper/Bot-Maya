const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    let perms = message.member.hasPermission("ADMINISTRATOR")
    if (!perms) {
        const noperms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão necessária: Administrador')
        return message.channel.send(noperms)
    }

    if (prefix === "-") {
        const iqual = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('O meu prefixo definido já é o padrão.')
        return message.channel.send(iqual)
    }

    const resprefix = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Você deseja resetar meu prefix para `-`?')

    await message.channel.send(resprefix).then(msg => {
        msg.react('✅') // Check
        msg.react('❌') // X

        msg.awaitReactions((reaction, user) => {
            if (message.author.id !== user.id) return

            if (reaction.emoji.name === '✅') { // Sim
                msg.delete()
                db.delete(`prefix_${message.guild.id}`)

                const resetprefix = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle("✅ " + message.author.username + ' resetou meu prefixo para `-`')
                message.channel.send(resetprefix)
            }
            if (reaction.emoji.name === '❌') { // Não
                msg.delete()
                const cancelado = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('Comando cancelado')
                msg.channel.send(cancelado)
            }
        })
    })
}