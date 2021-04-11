const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
        const adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso da permissão "Manusear Canais" para utilizar esta função.')
        return message.channel.send(adm)
    }

    if (!message.member.hasPermission('MANAGE_CHANNELS')) {
        const perms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Manusear Canais, Manusear Mensagens')
        return message.channel.send(perms)
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const noperms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Manusear Canais, Manusear Mensagens')
        return message.channel.send(noperms)
    }

    if (args[0] === 'off') {
        var canal = db.get(`msgwelcome_${message.guild.id}`)
        if (canal === null) {
            const semcanal = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle(message.guild.name + ' não tem nenhuma mensagem definida.')

            return message.channel.send(semcanal)
        } else if (canal) {
            db.delete(`msgwelcome_${message.guild.id}`)
            const comcanal = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle('A mensagem de boas-vindas foi delatada com sucesso.')
            return message.channel.send(comcanal)
        }
    }

    var canal = db.get(`welcomechannel_${message.guild.id}`)
    if (canal === null) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const nocanal = new Discord.MessageEmbed()
            .setColor('#FF0000') // Red Color
            .setTitle('O Welcome System está desativado.')
            .setDescription('`' + prefix + 'setwelcome`')
        return message.channel.send(nocanal)
    }

    const mensagem = args.slice(0).join(" ")
    if (!mensagem) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const noargs = new Discord.MessageEmbed()
            .setColor('#FF0000') // red
            .setTitle('Siga o formato abaixo')
            .setDescription('`' + prefix + 'setwelcomemsg Sua mensagem de boas vindas`')
        return message.channel.send(noargs)
    }

    if (mensagem) {
        db.set(`msgwelcome_${message.guild.id}`, mensagem)

        const sucess = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('A mensagem foi armazenada com sucesso.')
            .setDescription('Mensagem: `' + mensagem + '`')

        return message.channel.send(sucess)
    }
}