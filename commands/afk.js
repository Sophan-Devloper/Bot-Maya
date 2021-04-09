const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {


    if (args[0] === 'all') {
        const content1 = args.slice(1).join(" ")

        if (!content1) {

            db.set(`afk_${message.author.id}+${message.author.id}`, 'Nenhuma razão especificada.')
            const embed = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor(message.author.tag + ' ativou o modo AFK Global', message.author.displayAvatarURL({ dynamic: true }))
                .setDescription('`Nenhuma razão especificada.`')
                .setFooter('O modo AFK Global será desativado quando você mandar uma mensagem em qualquer servidor.')
            return message.channel.send(embed)
        }

        if (content1) {
            db.set(`afk_${message.author.id}+${message.author.id}`, content1)
            const embed = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor(message.author.tag + ' ativou o modo AFK Global.', message.author.displayAvatarURL({ dynamic: true }))
                .setDescription('`' + `${content1}` + '`')
                .setFooter('O modo AFK Global será desativado quando você mandar uma mensagem em qualquer servidor.')
            return message.channel.send(embed)
        }
    }

    const content = args.join(" ")
    if (!content) {

        db.set(`afk_${message.author.id}+${message.guild.id}`, 'Nenhuma razão especificada.')
        const embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setAuthor(message.author.tag + ' ativou o modo afk.', message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('`Nenhuma razão especificada.`')
            .setFooter('O modo afk será desativado quando você mandar uma mensagem')
        return message.channel.send(embed)
    }

    if (content) {
        db.set(`afk_${message.author.id}+${message.guild.id}`, content)
        const embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setAuthor(message.author.tag + ' ativou o modo afk', message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('`' + `${content}` + '`')
            .setFooter('O modo afk será desativado quando você mandar uma mensagem')
        return message.channel.send(embed)
    }
}