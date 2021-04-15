const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        const adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso da permissão "Manusear Cargos" para utilizar esta função.')
        return message.inlineReply(adm)
    }

    let perms = message.member.hasPermission("MANAGE_ROLES")
    if (!perms) {
        const permss = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Manusear Roles (cargos)')
        return message.inlineReply(permss)
    }

    let user = message.mentions.members.first()
    if (!user) {
        const userr = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato')
            .setDescription('`-addrole @user @cargo`')
        return message.inlineReply(userr)
    }

    let role = message.mentions.roles.first()
    if (!role) {
        const rolee = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato')
            .setDescription('`-addrole @user @cargo`')
        return message.inlineReply(rolee)
    }

    if (user.roles.cache.has(role.id)) {
        const roleee = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(`${user.user.username} já possui este cargo.`)
        return message.inlineReply(roleee)
    }

    user.roles.add(role)
    const sucess = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setDescription(`${user.user.username} recebeu o cargo ${role} com sucesso!`)
    message.inlineReply(sucess)
}