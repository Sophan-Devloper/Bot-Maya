const db = require('quick.db')
const ms = require('parse-ms')

module.exports = {
    name: "work",
    description: "Work your a** off",

    async run(client, message, args) {
        message.delete()

        let timeout = 600000
        let author = await db.fetch(`worked_${message.author.id}`)

        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`Você pode trabalhar em ${time.minutes}m e ${time.seconds}s`).then(msg => msg.delete({ timeout: 6000 }))
        } else {
            let amount = Math.floor(Math.random() * 1000) + 1;
            db.add(`money_${message.author.id}`, amount)
            db.set(`worked_${message.author.id}`, Date.now())

            message.channel.send(`${message.author.username} trabalhou e ganhou ${amount} <:StarPoint:766794021128765469>MPoints`).then(msg => msg.delete({ timeout: 6000 }))
        }
    }
}