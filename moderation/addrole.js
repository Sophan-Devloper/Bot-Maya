const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete()

    let perms = message.member.hasPermission("MANAGE_ROLES")
    if (!perms) {
        const permss = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Manusear Roles (cargos)')
        return message.channel.send(permss).then(msg => msg.delete({ timeout: 3000 })).catch(err => {return})
    }

    let user = message.mentions.members.first()
    if (!user) {
        const userr = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato')
            .setDescription('`-addrole @user @cargo`')
        return message.channel.send(userr).then(msg => msg.delete({ timeout: 3000 })).catch(err => {return})
    }

    let role = message.mentions.roles.first()
    if (!role) {
        const rolee = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato')
            .setDescription('`-addrole @user @cargo`')
        return message.channel.send(rolee).then(msg => msg.delete({ timeout: 3000 })).catch(err => {return})
    }

    if (user.roles.cache.has(role.id)) {
        const roleee = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(`${user.user.username} já possui este cargo.`)
        return message.channel.send(roleee).then(msg => msg.delete({ timeout: 3000 })).catch(err => {return})
    }

    user.roles.add(role)
    const sucess = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setDescription(`${user.user.username} recebeu o cargo ${role} com sucesso!`)
    message.channel.send(sucess).then(msg => msg.delete({ timeout: 6000 })).catch(err => {return})
}