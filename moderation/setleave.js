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
            .setTitle('Permissão Necessária: Manusear Canais')
        return message.inlineReply(perms)
    }

    if (!args[0]) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const noargs = new Discord.MessageEmbed()
            .setColor('#FF0000') // red
            .setTitle('' + prefix + 'setleave #CanalDeSaidas')
        return message.inlineReply(noargs)
    }

    if (args[0] === 'off') {
        var canal = db.get(`leavechannel_${message.guild.id}`)
        if (canal === null) {
            const semcanal = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('O Leave System já está desativado.')

            return message.inlineReply(semcanal)
        } else if (canal) {
            db.delete(`leavechannel_${message.guild.id}`)
            const comcanal = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle('Sistema Leave desativado.')
            return message.inlineReply(comcanal)
        }
    }

    var channel = message.mentions.channels.first()
    if (!channel) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"
        const nochannel = new Discord.MessageEmbed()
            .setColor('#FF0000') // red
            .setTitle('' + prefix + 'setleave #CanalDeSaidas')

        return message.inlineReply(nochannel)
    }

    var atual = db.get(`leavechannel_${message.guild.id}`)
    if (channel.id === atual) {

        const iqual = new Discord.MessageEmbed()
            .setColor('#FF0000') // Red
            .setTitle('Este canal já foi definido como Leave Channel!')

        return message.inlineReply(iqual)
    } else if (args[0] !== atual) {
        db.set(`leavechannel_${message.guild.id}`, channel.id)

        const sucess = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Leave System Ativado!')
            .setDescription(`Canal escolhido: ${channel}`)

        return message.inlineReply(sucess)
    }
}