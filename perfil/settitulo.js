const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    if (args[0] === 'help') {
        const help = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('🔰 Permissão Título')
            .setDescription('Escolha um título para seu perfil. Se auto nomeie e mostre a todos o quão grandioso/a você é!\n' + 'Exemplo: `' + prefix + 'settitulo Rei do Discord`')
        return message.inlineReply(help)
    }

    var perm = db.get(`title_${message.author.id}`)
    if (perm === null) {
        return message.inlineReply(`Você não tem a permissão 🔰 **Título**. Você pode comprar na **${prefix}loja**`)
    }

    if (!args[0]) {
        const embed1 = new Discord.MessageEmbed()
            .setColor('#FF0000') // RED 
            .setTitle('Siga o formato correto')
            .setDescription('Exemplo: `' + prefix + 'settitulo Rei do Discord`')
        return message.inlineReply(embed1)
    }

    if (args[3]) {
        const embed15 = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('É permito até 3 palavras no título.')
        return message.inlineReply(embed15)
    }

    const status = args.join(' ')
    var stat = db.get(`titulo_${message.author.id}`)
    if (status === stat) {
        const iqualstats = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription('Esse já é seu título.')
        return message.inlineReply(iqualstats)
    }

    const confirm = new Discord.MessageEmbed()
        .setColor('BLUE')
        .addFields(
            {
                name: 'Confirmar alteração do Título?',
                value: '`' + status + '`'
            }
        )

    await message.inlineReply(confirm).then(msg => {
        msg.react('✅') // Check
        msg.react('❌') // X

        msg.awaitReactions((reaction, user) => {
            if (message.author.id !== user.id) return

            if (reaction.emoji.name === '✅') { // Check
                msg.delete()
                db.set(`titulo_${message.author.id}`, status)
                const embednewstatus = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setTitle('Título alterado com sucesso!')
                message.inlineReply(embednewstatus)
            }
            if (reaction.emoji.name === '❌') { // MPEmbed
                msg.delete()
                const cancel = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setTitle('Comando cancelado.')
                message.inlineReply(cancel)
            }
        })
    })
}