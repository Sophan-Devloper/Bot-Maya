const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    message.delete()

    let member = message.mentions.members.first()
    let reason = args.slice(1).join(" ")

    if (!message.member.hasPermission('KICK_MEMBERS')) {
        const permss = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Expulsar Membros')
        return message.channel.send(permss).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    let logchannel = db.get(`logchannel_${message.guild.id}`)
    if (logchannel === null) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const nochannel = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('O logchannel não foi definido.')
            .setDescription('`' + prefix + 'setlogchannel #CanalLog`')
        return message.channel.send(nochannel).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
    }

    if (!client.channels.cache.get(logchannel)) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const logdel = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Parece que o logchannel foi deletado.')
            .setDescription('`' + prefix + 'setlogchannel #CanalLog`')
        return message.channel.send(logdel)
    }

    if (!args[0]) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const noargs = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'kick @user Razão do kick (opcional)`')
        return message.channel.send(noargs).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    if (!member) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const noargs1 = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'kick @user Razão do kick (opcional)`')
        return message.channel.send(noargs1).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    if (member.id === '821471191578574888') { // Maya
        const whitelist = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle(member.user.username + ' está na whitelist.')
        return message.channel.send(whitelist).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    if (member.id === '451619591320371213') { //Rodrigo
        const whitelist1 = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle(member.user.username + ' está na whitelist.')
        return message.channel.send(whitelist1).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    if (member.hasPermission(['ADMINISTRATOR'])) {
        const nokick = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(member.user.username + ' é um administrador. Não posso continuar com a expulsão.')
        return message.channel.send(nokick)
    }

    if (!member.kickable) {
        const nokick = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(member.user.username + ' tem algum cargo maior que o meu')
        return message.channel.send(nokick).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    if (member.id === message.author.id) {
        const autokick = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Autokick não é uma opção')
        return message.channel.send(autokick).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    if (!reason) { reason = `${message.author.username} não especificou nenhuma razão` }

    var discordserver = 'https://discord.gg/mx8eMx6'
    var support = 'https://forms.gle/vtJ5qBqFDd9rL5JU8'

    const kickembed = new Discord.MessageEmbed()
        .setColor('GRAY')
        .setTitle('Sistema de Kick - ' + message.guild.name)
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Usuário Expulso', member)
        .addField('ID', member.id)
        .addField('Kickado por', message.author)
        .addField('Razão', reason)
        .setFooter('Horário:')
        .setTimestamp()

    const confirm = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription(`Você confirma a expulsão de ${member.user}?`)

    await message.channel.send(confirm).then(msg => {
        msg.react('✅') // Check
        msg.react('❌') // X

        msg.awaitReactions((reaction, user) => {
            if (message.author.id !== user.id) return

            if (reaction.emoji.name === '✅') { // Sim
                msg.delete()

                const kicked = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle(`${member.user.username} foi expulso com sucesso.`)
                    .setDescription(`Relatório enviado ao ${client.channels.cache.get(logchannel)}`)

                member.kick().catch(err => {
                    const errorembed = new Discord.MessageEmbed()
                        .setColor('#FF0000')
                        .setTitle('Um erro ocorreu na expulsão')
                        .setDescription('Error by console.log: \n \n' + err)
                        .addFields(
                            {
                                name: 'Precisa de ajuda?',
                                value: `[Meu servidor](${discordserver})`,
                                inline: true
                            },
                            {
                                name: 'Dica o que houve no suporte',
                                value: `[Suporte Maya](${support})`
                            }
                        )
                    return message.channel.send(errorembed)
                })
                message.channel.send(kicked)
                return client.channels.cache.get(logchannel).send(kickembed)
            }
            if (reaction.emoji.name === '❌') { // Não
                msg.delete()
                const cancel = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('Comando cancelado.')

                message.channel.send(cancel).then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
            }
        })
    })
}