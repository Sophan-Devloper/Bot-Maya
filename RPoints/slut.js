const db = require('quick.db')
const ms = require('parse-ms')

module.exports = {
    name: "slut",
    description: "slluuut",

    async run(client, message, args) {
        message.delete()

        let user = message.author;
        let timeout = 600000;
        let author = await db.fetch(`slut_${message.author.id}_${user.id}`);

        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`Você pode se prostituir em ${time.minutes}m e ${time.seconds}s`).then(msg => msg.delete({ timeout: 6000 }))
        } else {

            var list = [
                "win",
                "lose"
            ]
            var result = list[Math.floor(Math.random() * list.length)]

            if (result === "win")

            let amount = (Math.floor(Math.random() * 2000) + 1)
            db.add(`money_${message.author.id}_${user.id}`, amount)
            db.set(`slut_${message.author.id}_${user.id}`, Date.now())
            message.channel.send(`${user}, você se prostituiu e obteve ${amount} <:StarPoint:766794021128765469>RPoints`).then(msg => msg.delete({ timeout: 6000 }))

            if (result === "lose")

            let amount = (Math.floor(Math.random() * -2000) + 1)
            db.delete(`money_${message.author.id}_${user.id}`, amount)
            db.set(`slut_${message.author.id}_${user.id}`, Date.now())
            message.channel.send(`${user}, você se prostituiu e obteve ${amount} <:StarPoint:766794021128765469>RPoints`).then(msg => msg.delete({ timeout: 6000 }))
        }
    }
}