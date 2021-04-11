const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        const adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso da permissão "Manusear Cargos" para utilizar esta função.')
        return message.channel.send(adm)
    }

    if (!message.member.hasPermission(["MANAGE_ROLES"])) {
        const perms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Manusear Cargos')
        return message.channel.send(perms)
    }

    if (!args[0]) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const noargs = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'resetwarns @user`')
        return message.channel.send(noargs)
    }

    let user = message.mentions.members.first()
    if (!user) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const nouser = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'resetwarns @user`')
        return message.channel.send(nouser)
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    if (warnings === null) {
        const nowa = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(`${user.user.username} não tem nenhum warn.`)
        return message.channel.send(nowa)
    }

    db.delete(`warnings_${message.guild.id}_${user.id}`)
    const sucess = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle(`O warns de ${user.user.username} foi resatado com sucesso.`)
    message.channel.send(sucess)
}