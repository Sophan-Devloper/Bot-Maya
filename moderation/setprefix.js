const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: "prefix",
    category: "moderation",
    usage: "setprefix newprefix",
    description: "Mudar o prefix do server",
    run: async (client, message, args) => {
        message.delete()

        if (!message.member.hasPermission('ADMINISTRATOR')) {
            const permss = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Permissão Necessária: ADMINISTRATOR')
            return message.channel.send(permss).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
        }

        if (!args[0]) {
            let prefix = db.get(`prefix_${message.guild.id}`)
            if (prefix === null) prefix = "-"

            const format = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Siga o formato correto')
                .setDescription('`' + prefix + 'setprefix NovoPrefixo`\n \nExemplo: `' + prefix + 'setprefix !`')
            return message.channel.send(format).then(m => m.delete({ timeout: 7000 })).catch(err => { return })
        }

        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"
        if (args[0] === prefix) {
            const atual = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Este já é meu prefixo atual.')
            return message.channel.send(atual).then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
        }

        if (args[1]) {
            const space = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('O prefixo não pode ter espaços.')
            return message.channel.send(space).then(m => m.delete({ timeout: 4000 })).catch(err => { return })
        }

        if (args[0].length > 2) {
            const caracter = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('O prefixo não pode ter mais de 2 caracteres.')
            return message.channel.send(caracter).then(m => m.delete({ timeout: 4000 })).catch(err => { return })
        }

        const newprefix = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Deseja alterar meu prefixo para: `' + args[0] + '` ?')
        await message.channel.send(newprefix).then(msg => {
            msg.react('✅') // Check
            msg.react('❌') // X

            msg.awaitReactions((reaction, user) => {
                if (message.author.id !== user.id) return

                if (reaction.emoji.name === '✅') { // Sim
                    msg.delete()
                    db.set(`prefix_${message.guild.id}`, args[0])
                    const alterado = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setDescription(`${message.author}` + ' alterou meu prefixo para: `' + args[0] + '`')
                    return message.channel.send(alterado)
                }
                if (reaction.emoji.name === '❌') { // Não
                    msg.delete()
                    msg.channel.send("Comando cancelado.").then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
                }
            })
        }) // aqui
    }
}