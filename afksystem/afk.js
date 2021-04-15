const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    if (!args[0]) {
        const helpafk = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('📢 Afk Global System')
            .setDescription(`Utilize este comando para avisar que você está offline.`)
            .addField('📴 Comando de Ativação', '`' + prefix + 'afk all/global Sua mensagem`\n' + '`' + prefix + 'afk Sua mensagem`\n' + '`' + prefix + 'afk help`\n')
            .setFooter(`Quer mais informações? ${prefix}afk help`)
        return message.inlineReply(helpafk)
    }

    if (args[0] === 'help') {

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
            .setFooter('O AFK System será desativado quando você mandar uma mensagem.')
        return message.inlineReply(`Este é um comando novo, se houve algúm bug, use **${prefix}support**`, embed)
    }

    if (args[0] === 'all') {
        const content1 = args.slice(1).join(" ")

        if (!content1) {

            db.set(`afk_${message.author.id}+${message.author.id}`, 'Nenhuma razão especificada.')
            const embed = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor('Razão especificada', message.author.displayAvatarURL({ dynamic: true }))
                .setDescription('`Nenhuma razão especificada.`')
                .setFooter('O modo AFK Global será desativado quando você mandar uma mensagem em qualquer servidor.')
            return message.inlineReply(`Você ativou o modo AFK Global`, embed)
        }

        if (content1) {
            db.set(`afk_${message.author.id}+${message.author.id}`, content1)
            const embed = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor('Razão especificada', message.author.displayAvatarURL({ dynamic: true }))
                .setDescription('`' + `${content1}` + '`')
                .setFooter('O modo AFK Global será desativado quando você mandar uma mensagem em qualquer servidor.')
            return message.inlineReply(`Você ativou o modo AFK Global`, embed)
        }
    }

    if (args[0] === 'global') {
        const content1 = args.slice(1).join(" ")

        if (!content1) {

            db.set(`afk_${message.author.id}+${message.author.id}`, 'Nenhuma razão especificada.')
            const embed = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor('Razão especificada', message.author.displayAvatarURL({ dynamic: true }))
                .setDescription('`Nenhuma razão especificada.`')
                .setFooter('O modo AFK Global será desativado quando você mandar uma mensagem em qualquer servidor.')
            return message.inlineReply(`Você ativou o modo AFK Global`, embed)
        }

        if (content1) {
            db.set(`afk_${message.author.id}+${message.author.id}`, content1)
            const embed = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor('Razão especificada', message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`${content1}`)
                .setFooter('O modo AFK Global será desativado quando você mandar uma mensagem em qualquer servidor.')
            return message.inlineReply(`Você ativou o modo AFK Global`, embed)
        }
    }

    const content = args.join(" ")
    if (!content) {

        db.set(`afk_${message.author.id}+${message.guild.id}`, 'Nenhuma razão especificada.')
        const embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setAuthor('Razão especificada', message.author.displayAvatarURL({ dynamic: true }))
            .addField('Mensagem', 'Nenhuma razão especificada.')
            .setFooter('O modo afk será desativado quando você mandar uma mensagem')
        return message.inlineReply(`Você ativou o modo AFK no Servidor`, embed)
    }

    if (content) {
        db.set(`afk_${message.author.id}+${message.guild.id}`, content)
        const embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setAuthor('Razão especificada', message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${content}`)
            .setFooter('O modo afk será desativado quando você mandar uma mensagem')
        return message.inlineReply(`Você ativou o modo AFK no Servidor`, embed)
    }
}