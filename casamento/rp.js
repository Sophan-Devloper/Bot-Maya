const db = require('quick.db')
const ms = require('parse-ms')

module.exports = {
    name: "rp",
    description: "Receive a rp award of money",

    async run(client, message, args) {
        message.delete()
        let member = message.mentions.users.first()
        let timeout = 1800000
        let amount = 1
        let rp = await db.fetch(`rptimeout_${message.author.id}`)

        if (!member) {
            return message.channel.send('Você se esqueceu do `@user`').then(msg => msg.delete({ timeout: 6000 }))
        }
        
        if (member.id === message.author.id) {
            return message.channel.send('Você não pode dar reputação para você mesmo.').then(msg => msg.delete({ timeout: 6000 }))
        }

        if (rp !== null && timeout - (Date.now() - rp) > 0) {
            let time = ms(timeout - (Date.now() - rp))
            return message.channel.send(`Você já deu reputação hoje. Volte em ${time.days}d, ${time.hours}h, ${time.minutes}m, e ${time.seconds}s`).then(msg => msg.delete({ timeout: 6000 }))
        } else {

            db.add(`rp_${member.id}`, amount)
            db.set(`rptimeout_${message.author.id}`, Date.now())

            message.channel.send(`Você deu reputação para ${member}`).then(msg => msg.delete({ timeout: 6000 }))
            return member.send(`${message.author.username} te deu reputação.`)
        }
    }
}