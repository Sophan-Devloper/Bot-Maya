const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        const adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
        return message.inlineReply(adm)
    }

    var list = [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ]

    var gif = list[Math.floor(Math.random() * list.length)]

    const nezukoo = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setImage(gif)
        .setFooter('Auto delete em 2 minutos.')
    return message.inlineReply(`Coletando gifs para o código... Comando disponivel dentro de 2 dias\nQuer enviar seus gifs? Usa o -help e entra no meu servidor :hearts:`)

    await message.inlineReply(nezukoo).then(msg => {
        msg.react('🔄').catch(err => { return }) // 1º Embed
        msg.react('❌').catch(err => { return })
        msg.delete({ timeout: 120000 }).catch(err => { return })

        msg.awaitReactions((reaction, user) => {
            if (message.author.id !== user.id) return;

            if (reaction.emoji.name === '🔄') { // 1º Embed - Principal
                reaction.users.remove(user)
                const nezukoo = new Discord.MessageEmbed()
                    .setColor('BLUE')
                    .setImage(list[Math.floor(Math.random() * list.length)])
                    .setFooter('Auto delete em 2 minutos.')
                msg.edit(nezukoo)
            }
            if (reaction.emoji.name === '❌') {
                msg.delete()
            }
        })
    })
}