const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MOVE_MEMBERS")) {
        const adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso da permissão "Mover Membros" para utilizar esta função.')
        return message.inlineReply(adm)
    }

    if (!message.member.permissions.has("MOVE_MEMBERS")) {
        const noperms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão necessária: Mover Membros')
        return message.inlineReply(noperms)
    }

    if (!message.member.voice.channel) {
        const canal = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Você não está em nenhum canal de voz.')
        return message.inlineReply(canal)
    }

    const member = message.mentions.members.first()
    if (!member) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const noform = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'move @user`')
        return message.inlineReply(noform)
    }

    if (db.get(`whitelist_${member.id}`)) {// Rodrigo Couto
        const banrody = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle(member.user.username + ' está na whitelist.')
        return message.inlineReply(banrody)
    }

    if (member.permissions.has("MANAGE_CHANNELS", "ADMINISTRATOR", "BAN_MEMBERS", "MANAGE_ROLES")) {
        const perms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(`Eu não posso mover ${member.user.username}.`)
        return message.inlineReply(perms)
    }
    if (!member.voice.channel) {
        const permsc = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(`${member.user.username} não está em nenhum canal de voz.`)
        return message.inlineReply(permsc)
    }

    member.voice.setChannel(message.member.voice.channel)
    message.inlineReply('Feito.')
}