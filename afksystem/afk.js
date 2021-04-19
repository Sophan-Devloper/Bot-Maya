const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }
    const content = args.join(" ")
    const content1 = args.slice(1).join(" ")

    if (!args[0]) {
        const helpafk = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('📢 Afk Global System')
            .setDescription('Utilize este comando para avisar que você está offline.' + '`' + prefix + 'afk help`')
            .addField('🌎 Comando de Ativação Global', '`' + prefix + 'afk all/global Sua mensagem`')
            .addField('📴 Comando de Ativação Servidor', '`' + prefix + 'afk Sua mensagem`')
            .setFooter(`Deseja ativar o AFK sem mensagem?`)

        await message.inlineReply(helpafk).then(msg => {
            msg.react('✅')
            msg.react('❌')
            msg.delete({ timeout: 30000 }).catch(err => { return })

            msg.awaitReactions((reaction, user) => {
                if (message.author.id !== user.id) return

                if (reaction.emoji.name === '✅') { // Sim
                    msg.delete()
                    db.set(`afk_${message.author.id}+${message.guild.id}`, 'Nenhuma razão especificada.')
                    const embed = new Discord.MessageEmbed()
                        .setColor("GREEN")
                        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
                        .addField('AFK System - Mensagem', 'Nenhuma razão especificada.')
                        .setFooter('O modo afk será desativado quando você enviar uma mensagem')
                    return message.inlineReply(`Você ativou o modo AFK no Servidor`, embed)
                }
                if (reaction.emoji.name === '❌') { // Não
                    msg.delete()
                    message.inlineReply("Comando cancelado.")
                }
            })
        })
    }

    if (['help', 'ajuda'].includes(args[0])) {

        const embed = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('📢 Maya - AFK Global System')
            .setDescription('Com o AFK System, eu avisarei as pessoas que te marcarem que você está offline.\nVocê pode deixar uma mensagem pra elas também.')
            .addFields(
                {
                    name: '📴 Servidor',
                    value: '`' + prefix + 'afk Almoçando`\nAvisarei a todos que você está almoçando.'
                },
                {
                    name: '🌎 Global',
                    value: '`' + prefix + 'afk all` ou ' + '`' + prefix + 'afk global`\n' + 'Avisarei em todos os servidores que você está offline.\n \nExemplo: ' + '`' + prefix + 'afk global Estou almoçando, já volto.`'
                }
            )
            .setFooter('O AFK System será desativado quando você enviar uma mensagem.')
        return message.inlineReply(`Este é um comando novo, se houve algúm bug, use **${prefix}support**`, embed)
    }

    if (['all', 'global', 'todos'].includes(args[0])) {

        if (!content1) {

            db.set(`afk_${message.author.id}+${message.author.id}`, 'Nenhuma razão especificada.')
            const embed = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor('Razão especificada', message.author.displayAvatarURL({ dynamic: true }))
                .setDescription('`Nenhuma razão especificada.`')
                .setFooter('O modo AFK Global será desativado quando você enviar uma mensagem em qualquer servidor.')
            return message.inlineReply(`Você ativou o modo AFK Global`, embed)
        }

        if (content1) {
            db.set(`afk_${message.author.id}+${message.author.id}`, content1)
            const embed = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor('Razão especificada', message.author.displayAvatarURL({ dynamic: true }))
                .setDescription('`' + `${content1}` + '`')
                .setFooter('O modo AFK Global será desativado quando você enviar uma mensagem em qualquer servidor.')
            return message.inlineReply(`Você ativou o modo AFK Global`, embed)
        }
    }

    if (content) {
        db.set(`afk_${message.author.id}+${message.guild.id}`, content)
        const embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setAuthor('Razão especificada', message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${content}`)
            .setFooter('O modo afk será desativado quando você enviar uma mensagem')
        return message.inlineReply(`Você ativou o modo AFK no Servidor`, embed)
    }
}