const db = require('quick.db')
const ms = require('parse-ms')

module.exports = {
    name: "rp",
    description: "Receive a rp award of rp",

    async run(client, message, args) {

         
        let user = message.mentions.members.first()
        let timeout = 1800000
        let rptimeout = await db.get(`rptimeout_${message.author.id}`)

        if (!user) {
            return message.channel.send('Você se esqueceu do `@user`').then(msg => msg.delete({ timeout: 6000 }))
        }

        if (user.id === message.author.id) {
            return message.channel.send('Você não pode dar reputação para você mesmo.').then(msg => msg.delete({ timeout: 6000 }))
        }

        if (rptimeout !== null && timeout - (Date.now() - rptimeout) > 0) {
            let time = ms(timeout - (Date.now() - rptimeout))
            return message.channel.send(`Você já deu reputação hoje. Volte em ${time.days}d, ${time.hours}h, ${time.minutes}m, e ${time.seconds}s`).then(msg => msg.delete({ timeout: 6000 }))
        } else {

            let rp = db.fetch(`rp_${user.id}`)
            if (rp === null) { rp = 0 }

            let amount = 1
            db.add(`rp_${user.id}`, amount)
            db.set(`rptimeout_${message.author.id}`, Date.now())

            message.channel.send(`Você deu reputação para ${user}`).then(msg => msg.delete({ timeout: 6000 }))
        }
    }
}