const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
        const adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso da permissão "Manusear Canais" para utilizar esta função.')
        return message.inlineReply(adm)
    }

    if (!message.member.hasPermission('MANAGE_CHANNELS')) {
        const perms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Manusear Canais, Manusear Mensagens')
        return message.inlineReply(perms)
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const noperms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Manusear Canais, Manusear Mensagens')
        return message.inlineReply(noperms)
    }

    if (args[0] === 'off') {
        var canal = db.get(`msgleave_${message.guild.id}`)
        if (canal === null) {
            const semcanal = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle(message.guild.name + ' não tem nenhuma mensagem definida.')

            return message.inlineReply(semcanal)
        } else if (canal) {
            db.delete(`msgleave_${message.guild.id}`)
            const comcanal = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle('A mensagem de saída foi delatada com sucesso.')
            return message.inlineReply(comcanal)
        }
    }

    var canal = db.get(`leavechannel_${message.guild.id}`)
    if (canal === null) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const nocanal = new Discord.MessageEmbed()
            .setColor('#FF0000') // Red Color
            .setTitle('O Leave System está desativado.')
            .setDescription('`' + prefix + 'setleave`')
        return message.inlineReply(nocanal)
    }

    const mensagem = args.slice(0).join(" ")
    if (!mensagem) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const noargs = new Discord.MessageEmbed()
            .setColor('#FF0000') // red
            .setTitle('Siga o formato abaixo')
            .setDescription('`' + prefix + 'setleavemsg Mensagem de saída`')
        return message.inlineReply(noargs)
    }

    if (mensagem) {
        db.set(`msgleave_${message.guild.id}`, mensagem)

        const sucess = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('A mensagem foi armazenada com sucesso.')
            .setDescription('Mensagem: `' + mensagem + '`')

        return message.inlineReply(sucess)
    }
}