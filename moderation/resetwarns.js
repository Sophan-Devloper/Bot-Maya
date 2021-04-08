const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = (client, message, args) => {
     

    if (!message.member.hasPermission(["ADMINISTRATOR", "BAN_MEMBERS", "MANAGE_ROLES"])) {
        const perms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Administrador, Banir Membros, Manusear Roles (cargos)')
        return message.channel.send(perms).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    if (!args[0]) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const noargs = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'resetwarns @user`')
        return message.channel.send(noargs).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    let user = message.mentions.members.first()
    if (!user) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const nouser = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'resetwarns @user`')
        return message.channel.send(nouser).then(msg => msg.delete({ timeout: 5000 }))
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    if (warnings === null) {
        const nowa = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(`${user.user.username} não tem nenhum warn.`)
        return message.channel.send(nowa).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    db.delete(`warnings_${message.guild.id}_${user.id}`)
    const sucess = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle(`O warns de ${user.user.username} foi resatado com sucesso.`)
    message.channel.send(sucess)
}