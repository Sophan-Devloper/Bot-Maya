const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')

exports.run = async (client, message, args) => {

    let timeout = 6140000
    let author = await db.fetch(`pego_${message.author.id}`)

    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author))

        const presomax = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('🚨 Você está em prisão máxima!')
            .setDescription('`Liberdade em: ' + `${time.minutes}` + 'm e ' + `${time.seconds}` + 's`')

        return message.channel.send(presomax)
    } else {

        let timeout2 = 1000000
        let author2 = await db.fetch(`preso_${message.author.id}`)

        if (author2 !== null && timeout2 - (Date.now() - author2) > 0) {
            let time = ms(timeout2 - (Date.now() - author2))

            const fuga = new Discord.MessageEmbed()
                .setColor('GRAY')
                .setDescription('‼️ Você está prestes a tentar fungir da penitenciária. A sua pena pode aumentar.\n \nVocê deseja tentar a fuga?')

            await message.channel.send(`${message.author}`, fuga).then(msg => {
                msg.react('✅') // Check
                msg.react('❌') // X

                msg.awaitReactions((reaction, user) => {
                    if (message.author.id !== user.id) return

                    if (reaction.emoji.name === '✅') { // Sim
                        msg.delete()

                        var luck = ['win', 'lose']
                        var result = luck[Math.floor(Math.random() * luck.length)]

                        const fugindo = new Discord.MessageEmbed()
                            .setColor('BLUE')
                            .setTitle('🏃 Fugindo da detenção...')

                        const wins = new Discord.MessageEmbed()
                            .setColor('GREEN')
                            .setTitle('✅ Você fugiu da detenção com sucesso.')

                        const lose = new Discord.MessageEmbed()
                            .setColor('#FF0000')
                            .setTitle('🚨 Você foi pego!')
                            .setDescription(`${message.author} foi pego tentando escapar. Prisão máxima!`)

                        if (result == 'win') {
                            db.delete(`preso_${message.author.id}`)
                            return message.channel.send(`${message.author}`, fugindo).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, wins))
                        } else if (result === "lose") {
                            db.set(`pego_${message.author.id}`, Date.now())
                            return message.channel.send(`${message.author}`, fugindo).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, lose))
                        }
                    }
                    if (reaction.emoji.name === '❌') { // Não
                        msg.delete()
                        msg.channel.send("Fuga cancelada.")
                    }
                })
            })
        } else {
            return message.channel.send(`${message.author}, você não está preso.`)
        }
    }
}