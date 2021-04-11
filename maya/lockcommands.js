const db = require("quick.db")
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        const adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso da permissão "Manusear Mensagens" para utilizar esta função.')
        return message.channel.send(adm)
    }

    if (!message.member.hasPermission("ADMINISTRATOR")) {

        const noperm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Administrador')

        return message.channel.send(noperm)
    }

    var channel = message.mentions.channels.first() || message.channel

    if (db.get(`blockchannel_${channel.id}`)) {
        const ok = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription(`${channel} já está bloqueado.`)
        return message.channel.send(ok)
    }

    const confirm = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription(`Você deseja bloquear todos os meus comandos no canal ${channel}?`)

    await message.channel.send(confirm).then(msg => {
        msg.react('✅') // Check
        msg.react('❌') // X

        msg.awaitReactions((reaction, user) => {
            if (message.author.id !== user.id) return

            if (reaction.emoji.name === '✅') { // Sim
                msg.delete()

                db.add(`blockchannel_${channel.id}`, channel.id)
                const ok = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setDescription(`Meus comandos no canal ${channel} foram bloqueados.`)
                return message.channel.send(ok)
            }
            if (reaction.emoji.name === '❌') { // Não
                msg.delete()
                msg.channel.send("Comando cancelado.")
            }
        })
    })
}