const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) {
        const permss = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: ADMINISTRADOR')
        return message.inlineReply(permss)
    }

    if (!args[0]) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const format = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'setprefix NovoPrefixo`\n \nExemplo: `' + prefix + 'setprefix !`')
        return message.inlineReply(format)
    }

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"
    if (args[0] === prefix) {
        const atual = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Este já é meu prefixo atual.')
        return message.inlineReply(atual)
    }

    if (args[1]) {
        const space = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('O prefixo não pode ter espaços.')
        return message.inlineReply(space)
    }

    if (args[0].length > 2) {
        const caracter = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('O prefixo não pode ter mais de 2 caracteres.')
        return message.inlineReply(caracter)
    }

    const newprefix = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Deseja alterar meu prefixo para: `' + args[0] + '` ?')
    await message.inlineReply(newprefix).then(msg => {
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
                return message.inlineReply(alterado)
            }
            if (reaction.emoji.name === '❌') { // Não
                msg.delete()
                msg.inlineReply("Comando cancelado.")
            }
        })
    }) // aqui
}