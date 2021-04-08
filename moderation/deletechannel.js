const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = (client, message, args) => {

    if (!message.member.hasPermission('MANAGE_CHANNELS')) {
        const perms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Manusear Canais')
        return message.channel.send(perms).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    if (!args[0]) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const noargs = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'deletechannel #Canal`')
        return message.channel.send(noargs)
    }

    var channel = message.mentions.channels.first()
    if (!channel) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const nochannel = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'deletechannel #Canal`')
        return message.channel.send(nochannel)
    }

    const confirm = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription('Este é um comando perigoso, deseja prosseguir?')

    return message.channel.send(confirm).then(msg => {
        msg.react('✅') // Check
        msg.react('❌') // X

        msg.awaitReactions((reaction, user) => {
            if (message.author.id !== user.id) return

            if (reaction.emoji.name === '✅') { // sim
                msg.delete().catch(err => { return })

                const confirm2 = new Discord.MessageEmbed()
                    .setColor('BLUE')
                    .setDescription(`O canal ${channel} será excluido e não será possivel recupera-lo, deseja prosseguir?`)

                message.channel.send(confirm2).then(msg => {
                    msg.react('✅') // Check
                    msg.react('❌') // X

                    msg.awaitReactions((reaction, user) => {
                        if (message.author.id !== user.id) return

                        if (reaction.emoji.name === '✅') { // sim
                            msg.delete().catch(err => { return })

                            const confirm3 = new Discord.MessageEmbed()
                                .setColor('BLUE')
                                .setDescription(`Último aviso. Você realmente deseja prosseguir com a exclusão do canal ${channel}?`)

                            message.channel.send(confirm3).then(msg => {
                                msg.react('✅') // Check
                                msg.react('❌') // X

                                msg.awaitReactions((reaction, user) => {
                                    if (message.author.id !== user.id) return

                                    if (reaction.emoji.name === '✅') { // sim
                                        msg.delete().catch(err => { return })

                                        const sucess = new Discord.MessageEmbed()
                                            .setColor('GREEN')
                                            .setDescription(`${message.author} excluiu o canal #${channel.name}`)
                                        message.channel.send(sucess)

                                        channel.delete().catch(err => {
                                            return message.channel.send('Ocorreu um erro na exclusão do canal.\n \n ' + err)
                                        })
                                    }

                                    if (reaction.emoji.name === '❌') { // MPEmbed
                                        msg.delete().catch(err => { return })

                                        const canceled3 = new Discord.MessageEmbed()
                                            .setColor('GREEN')
                                            .setTitle('Comando cancelado.')
                                        msg.channel.send(canceled3).then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
                                    }
                                })
                            })
                        }
                        if (reaction.emoji.name === '❌') { // MPEmbed
                            msg.delete().catch(err => { return })

                            const canceled2 = new Discord.MessageEmbed()
                                .setColor('GREEN')
                                .setTitle('Comando cancelado.')
                            msg.channel.send(canceled2).then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
                        }
                    })
                })
            }
            if (reaction.emoji.name === '❌') { // MPEmbed
                msg.delete().catch(err => { return })
                const canceled = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('Comando cancelado.')
                msg.channel.send(canceled).then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
            }
        })
    })
}