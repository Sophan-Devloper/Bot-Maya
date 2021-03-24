const db = require('quick.db')
const ms = require('parse-ms')

module.exports = {
    name: "work",
    description: "Work your a** off",

    async run(client, message, args) {
        message.delete()

        let user = message.author
        let timeout = 600000;
        let author = await db.fetch(`worked_${message.author.id}_${user.id}`);

        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`Você pode trabalhar em ${time.minutes}m e ${time.seconds}s`).then(msg => msg.delete({ timeout: 6000 }))
        } else {
            let amount = Math.floor(Math.random() * 200) + 1;
            db.add(`money_${message.author.id}_${user.id}`, amount)
            db.set(`worked_${message.author.id}_${user.id}`, Date.now())

            message.channel.send(`${user}, você trabalhou e ganhou ${amount} <:StarPoint:766794021128765469>MPoints`).then(msg => msg.delete({ timeout: 6000 }))
        }
    }
}