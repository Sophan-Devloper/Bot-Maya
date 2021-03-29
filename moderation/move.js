const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: "move",
    category: "moderation",

    run: async (client, message, args) => {
        message.delete()

        if (!message.member.permissions.has("MOVE_MEMBERS")) {
            const noperms = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Permissão necessária: Mover Membros')
            return message.channel.send(noperms).then(msg => msg.delete({ timeout: 3000 })).catch(err => { return })
        }

        if (!message.member.voice.channel) {
            const canal = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Você não está em nenhum canal de voz.')
            return message.channel.send(canal).then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
        }

        const member = message.mentions.members.first()
        if (!member) {
            let prefix = db.get(`prefix_${message.guild.id}`)
            if (prefix === null) prefix = "-"

            const noform = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Siga o formato correto')
                .setDescription('`' + prefix + 'move @user`')
            return message.channel.send(noform).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
        }

        if (member.permissions.has("MANAGE_CHANNELS", "ADMINISTRATOR", "BAN_MEMBERS", "MANAGE_ROLES")) {
            const perms = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle(`Eu não posso mover ${member.user.username}.`)
            return message.channel.send(perms).then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
        }
        if (!member.voice.channel) {
            const permsc = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle(`${member.user.username} não está em nenhum canal de voz.`)
            return message.channel.send(permsc).then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
        }

        member.voice.setChannel(message.member.voice.channel)
        message.channel.send('Feito.')
    }
}