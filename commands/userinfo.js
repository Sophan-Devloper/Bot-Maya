const Discord = require('discord.js')
const moment = require('moment')

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        const adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
        return message.inlineReply(adm)
    }

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member

    const flags = {
        DISCORD_EMPLOYEE: 'Discord Employee',
        DISCORD_PARTNER: 'Discord Partner',
        BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
        BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
        HYPESQUAD_EVENTS: 'HypeSquad Events',
        HOUSE_BRAVERY: 'House of Bravery',
        HOUSE_BRILLIANCE: 'House of Brilliance',
        HOUSE_BALANCE: 'House of Balance',
        EARLY_SUPPORTER: 'Early Supporter',
        TEAM_USER: 'Team User',
        SYSTEM: 'System',
        VERIFIED_BOT: 'Verified Bot',
        VERIFIED_DEVELOPER: 'Verified Bot Developer'
    }

    const roles = user.roles.cache
        .sort((a, b) => b.position - a.position)
        .map(role => role.toString())
        .slice(0, -1)

    const userFlags = user.user.flags.toArray()

    const embed = new Discord.MessageEmbed()
        .setTitle(`📝 Informações sobre ${user.user.username}`)
        .setColor(`#f3f3f3`)
        .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
        .addField('Usuário', [
            `❯ Nome Original: ${user.user.tag}`,
            `❯ ID: ${user.user.id}`,
            `❯ Status Atual: ${user.presence.status}`,
            `❯ Bandeira: ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'Nenhuma'}`,
            `❯ Foto de perfil: [Link da foto](${user.user.displayAvatarURL()})`,
            `❯ Criou a conta em: ${moment(user.user.createdTimestamp).format('DD/MM/YY')} | ${moment(user.user.createdTimestamp).fromNow()}`,
            `❯ Jogando: ${user.user.presence.game || 'Nada no momento'}`
        ])
        .addField('Servidor', [
            `❯ Nome no Servidor: ${user.user.username}`,
            `❯ Entrou no Server em: ${moment(user.joinedAt).format('DD/MM/YY')}`,
            `❯ Maior cargo: ${user.roles.highest.id === message.guild.id ? 'Nenhum' : user.roles.highest.name}`
        ])
    await message.inlineReply(embed)
}