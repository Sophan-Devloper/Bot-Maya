const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    run: async (client, message, args) => {
        message.delete()

        if (!message.member.hasPermission('MANAGE_ROLES')) {
            const noperms = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Permissão Necessária: Manusear Roles (Cargos)')
            return message.channel.send(noperms).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
        }

        let logchannel = db.get(`logchannel_${message.guild.id}`)
        if (logchannel === null) {
            let prefix = db.get(`prefix_${message.guild.id}`)
            if (prefix === null) prefix = "-"

            const nolog = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Não há Canal Log registrado.')
                .setDescription('`' + prefix + 'setlogchannel #CanalLog`')
            return message.channel.send(nolog).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
        }

        if (!client.channels.cache.get(logchannel)) {
            let prefix = db.get(`prefix_${message.guild.id}`)
            if (prefix === null) prefix = "-"

            const nolog1 = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Parece que o canal log foi excluido.')
                .setDescription('`' + prefix + 'setlogchannel #CanalLog`')
            return message.channel.send(nolog1).then(msg => msg.delete({ timeout: 120000 })).catch(err => { return })
        }

        const member = message.mentions.members.first()
        if (!member) {
            let prefix = db.get(`prefix_${message.guild.id}`)
            if (prefix === null) prefix = "-"
            const nomember = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Siga o formato correto')
                .setDescription('`' + prefix + 'unmute @user`')
            return message.channel.send(nomember).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
        }

        if (!args[0]) {
            let prefix = db.get(`prefix_${message.guild.id}`)
            if (prefix === null) prefix = "-"
            const nomember = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Siga o formato correto')
                .setDescription('`' + prefix + 'unmute @user`')
            return message.channel.send(nomember).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
        }

        const role = message.guild.roles.cache.find(role => role.name === 'Muted')

        if (!member.roles.cache.has(role.id)) {
            const norole = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle(`${member.user.username} não está mutado/a.`)
            return message.channel.send(norole).then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
        }

        await member.roles.remove(role)

        const unmuteembed = new Discord.MessageEmbed()
            .setAuthor(`Sistema de Mute - ${member.guild.name}`)
            .setColor('GREEN')
            .addFields(
                {
                    name: 'Usuário destumado',
                    value: member.user.tag
                },
                {
                    name: 'Autor/Moderador',
                    value: message.author
                }
            )
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()

        const sucess = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle(`${member.user.username} foi desmutado com sucesso.`)
            .setDescription(`Mais detalhes em ${client.channels.cache.get(logchannel)}`)
        message.channel.send(sucess).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
        client.channels.cache.get(logchannel).send(unmuteembed)
    }
}