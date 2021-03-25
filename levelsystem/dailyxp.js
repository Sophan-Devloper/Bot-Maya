const db = require('quick.db')
const ms = require('parse-ms')

module.exports = {
    name: "dailyxp",
    description: "Receive a daily award of xp",

    async run(client, message, args) {
        message.delete()
        let user = message.author
        let timeout = 86400000
        let amount = 500
        let daily = await db.fetch(`dailyxp_${message.author.id}_${user.id}`)

        let usera = message.mentions.members.first()
        if (usera)
            return message.channel.send('Você não pode dar seu dailyxp para outra pessoa.').then(msg => msg.delete({ timeout: 5000 }))

        if (!isNaN(args[0]))
            return message.channel.send('Você não pode escolher quanto xp você vai ganhar.').then(msg => msg.delete({ timeout: 5000 }))

        if (args[0])
            return message.channel.send('Ei, digite apenas o comando `dailyxp`').then(msg => msg.delete({ timeout: 5000 }))

        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily))
            return message.channel.send(`Você já usou o dailyxp hoje. Volte em , ${time.hours}h, ${time.minutes}m, e ${time.seconds}s`).then(msg => msg.delete({ timeout: 6000 }))
        } else {
            db.add(`xp_${user.id}`, 150)
            db.set(`dailyxp_${message.author.id}_${user.id}`, Date.now())

            message.channel.send(`Você obteve 150xp.`).then(msg => msg.delete({ timeout: 6000 }))
        }
    }
}