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
            .setTitle('Permissão Necessária: Manusear Canais')
        return message.channel.send(perms)
    }

    if (!args[0]) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const noargs = new Discord.MessageEmbed()
            .setColor('#FF0000') // red
            .setDescription('Selecione um canal para todo mundo poder minerar')
            .addField('Comandos', '`' + prefix + 'setminechannel #Canal`')
            .addField('Desative o Canal', '`' + prefix + 'setminechannel off`')
        return message.channel.send(noargs)
    }

    if (args[0] === 'off') {
        var canal = db.get(`minechannel_${message.guild.id}`)
        if (canal === null) {
            const semcanal = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('O Canal de Mineração já está desativado.')

            return message.channel.send(semcanal)
        } else if (canal) {
            db.delete(`minechannel_${message.guild.id}`)
            const comcanal = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle('Canal de Mineração desativado.')
            return message.channel.send(comcanal)
        }
    }

    var channel = message.mentions.channels.first()
    if (!channel) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"
        const nochannel = new Discord.MessageEmbed()
            .setColor('#FF0000') // red
            .setTitle('' + prefix + 'setminechannel #Canal')

        return message.channel.send(nochannel)
    }

    var atual = db.get(`minechannel_${message.guild.id}`)
    if (channel.id === atual) {

        const iqual = new Discord.MessageEmbed()
            .setColor('#FF0000') // Red
            .setTitle('Este canal já foi definido como Canal de Mineração!')

        return message.channel.send(iqual)
    } else if (args[0] !== atual) {
        db.set(`minechannel_${message.guild.id}`, channel.id)

        const sucess = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Canal de Mineração Ativado!')
            .setDescription(`Canal escolhido: ${channel}`)

        return message.channel.send(sucess)
    }
}