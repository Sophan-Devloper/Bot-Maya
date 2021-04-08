const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = (client, message, args) => {
     

    if (!message.member.hasPermission('MOVE_MEMBERS')) {
        const noperm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Mover Membros')
        return message.reply(noperm).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    const member = message.mentions.members.first()
    if (!member) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const nomember = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'kickvoice @user`')
        return message.channel.send(nomember).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    if (!member.voice.channel) {
        const novoice = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(`${member.user.username} não está em nenhum canal de voz.`)
        return message.channel.send(novoice).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    if (db.get(`whitelist_${member.id}`)) {// Rodrigo Couto
        const banrody = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle(member.user.username + ' está na whitelist.')
        return message.channel.send(banrody).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    if (member.hasPermission(['MOVE_MEMBERS', 'ADMINISTRATOR', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANEGE_ROLES'])) {
        const perms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(`${member.user.username} tem permissões importantes neste servidor.`)
        return message.channel.send(perms).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    const kicked = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle(`${member.user.username} foi desconectado/a do canal de voz com sucesso.`)

    member.voice.kick().catch(err => {
        const error = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Um erro foi encontrado')
            .setDescription(`ERROR BY CONSOLE.LOG \n` + err)
        message.channel.send(error)
    })

    return message.channel.send(kicked)
}