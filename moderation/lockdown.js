const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
        const adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso da permissão "Manusear Canais" para utilizar esta função.')
        return message.inlineReply(adm)
    }

    let perms = message.member.hasPermission("ADMINISTRATOR")
    if (!perms) {
        const noperms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Administrador')
        return message.inlineReply(noperms)
    }

    if (!args[0]) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const alert = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Utilize este comando somente em caso de EMERGÊNCIA!')
            .setDescription('Este comando tem um alto poder de impacto em todo o servidor. Quando ativado, o cargo *everyone* será bloqueado de falar em todos os canais de textos e conectar/falar em canais de voz.')
            .addFields(
                {
                    name: '`' + prefix + 'lockdown on`',
                    value: '**Todos** os canais serão bloqueados',
                    inline: true
                },
                {
                    name: '`' + prefix + 'lockdown off`',
                    value: '**Todos** os canais serão liberados',
                    inline: true
                }
            )
        return message.inlineReply(alert)
    }

    const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category')

    if (args[0] === 'on') {

        const confirmon = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Você confirma o bloqueio de todos os canais de texto/voz do servidor?')
        await message.inlineReply(confirmon).then(msg => {
            msg.react('✅') // Check
            msg.react('❌') // X

            msg.awaitReactions((reaction, user) => {
                if (message.author.id !== user.id) return

                if (reaction.emoji.name === '✅') { // Sim
                    msg.delete()

                    channels.forEach(channel => {
                        channel.updateOverwrite(message.guild.roles.everyone, {
                            SEND_MESSAGES: false,
                            CONNECT: false,
                            SPEAK: false
                        })
                    })

                    const ok = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setDescription(`${message.author.username} colocou o servidor em estado de Lockdown.`)

                    const info = new Discord.MessageEmbed()
                        .setColor('BLUE')
                        .setTitle('Todos os canais de texto e de voz foram bloqueados para @everyone.')
                    return message.inlineReply(ok).then(m => m.inlineReply(info))
                }
                if (reaction.emoji.name === '❌') { // Não
                    msg.delete()
                    const ok = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setDescription('Comando cancelado')
                    message.inlineReply(ok)
                }
            })
        })

    } else if (args[0] === 'off') {
        channels.forEach(channel => {
            channel.updateOverwrite(message.guild.roles.everyone, {
                SEND_MESSAGES: true,
                CONNECT: true,
                SPEAK: true
            })
        })

        const free = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle(`${message.author.username} desativou o Lockdown.`)

        const okok = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('**TODOS** os membros agora podem falar em **TODOS** os canais de texto e voz. Recomendo reconfigurar as permissões dos canais privados.')
        return message.inlineReply(free).then(m => m.inlineReply(okok))
    }
}