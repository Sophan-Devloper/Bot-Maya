const db = require('quick.db')
const ms = require('parse-ms')

exports.run = async (client, message, args) => {

    let timeout1 = 6140000
    let author1 = await db.fetch(`pego_${message.author.id}`)

    if (author1 !== null && timeout1 - (Date.now() - author1) > 0) {
        let time = ms(timeout1 - (Date.now() - author1))
        return message.channel.send(`${message.author}, você está sob prisão máxima! Liberdade em: ${time.minutes}m e ${time.seconds}s`)
    } else {

        let user = message.author
        let timeout = 600000
        let author = await db.fetch(`slut_${message.author.id}`)

        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author))
            message.delete()
            return message.channel.send(`Você pode se prostituir em ${time.minutes}m e ${time.seconds}s`).then(msg => msg.delete({ timeout: 6000 }))
        } else {

            var list = ["win", "lose"]
            var result = list[Math.floor(Math.random() * list.length)]

            if (result === "win") {
                let amount = (Math.floor(Math.random() * 10000) + 1)
                db.add(`money_${message.author.id}`, amount)
                db.set(`slut_${message.author.id}`, Date.now())
                message.channel.send(`${user}, você se prostituiu e obteve ${amount} <:StarPoint:766794021128765469>MPoints`)
            } else if (result === "lose") {
                let amount = (Math.floor(Math.random() * 10000) + 1)
                db.subtract(`money_${message.author.id}`, amount)
                db.set(`slut_${message.author.id}`, Date.now())
                message.channel.send(`${user}, você se prostituiu e perdeu ${amount} <:StarPoint:766794021128765469>MPoints`)
            }
        }
    }
}
