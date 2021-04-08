const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'status no perfil',
    aliases: ['status', 'perfil'],
    run: async (client, message, args) => {
         

        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        if (!args[0]) {
            const embed1 = new Discord.MessageEmbed()
                .setColor('#FF0000') // RED 
                .setTitle('Siga o formato correto')
                .setDescription('`' + prefix + 'status Um peixinho nadando no mar azul`')
            return message.channel.send(embed1).then(msg => msg.delete({ timeout: 10000 }))
        }

        if (args[20]) {
            const embed15 = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle('É permito até 20 palavras no status.')
            return message.channel.send(embed15).then(msg => msg.delete({ timeout: 6000 }))
        }

        const status = args.join(' ')
        var stat = db.get(`status_${message.author.id}`)
        if (status === stat) {
            const iqualstats = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription('O seu status é igual ao do seu perfil.')
            return message.channel.send(iqualstats).then(msg => msg.delete({ timeout: 8000 }))
        }

        const confirm = new Discord.MessageEmbed()
            .setColor('BLUE')
            .addFields(
                {
                    name: 'Confirmar alteração do Status?',
                    value: '`' + status + '`'
                }
            )

        await message.channel.send(confirm).then(msg => {
            msg.react('✅') // Check
            msg.react('❌') // X

            msg.awaitReactions((reaction, user) => {
                if (message.author.id !== user.id) return

                if (reaction.emoji.name === '✅') { // Check
                    msg.delete()
                    db.set(`status_${message.author.id}`, status)
                    const embednewstatus = new Discord.MessageEmbed()
                        .setColor("GREEN")
                        .setTitle('Status alterado com sucesso!')
                    message.channel.send(embednewstatus).then(msg => msg.delete({ timeout: 6000 }))
                }
                if (reaction.emoji.name === '❌') { // MPEmbed
                    msg.delete()
                    const cancel = new Discord.MessageEmbed()
                        .setColor("GREEN")
                        .setTitle('Comando cancelado.')
                    msg.channel.send(cancel).then(msg => msg.delete({ timeout: 4000 }))
                }
            })
        })
    }
}

module.exports.help = {
    name: "status"
}