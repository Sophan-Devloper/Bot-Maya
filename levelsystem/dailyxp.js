const db = require('quick.db')
const ms = require('parse-ms')

exports.run = async (client, message, args) => {

    let user = message.author
    let timeout = 86400000
    let amount = 500
    let daily = await db.fetch(`dailyxp_${message.author.id}_${user.id}`)

    let usera = message.mentions.members.first()
    if (usera){
        return message.channel.send('Você não pode dar seu dailyxp para outra pessoa.')
    }

    if (!isNaN(args[0])) {
        return message.channel.send('Você não pode escolher quanto xp você vai ganhar.')
    }
    
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily))
        return message.channel.send(`Você já usou o dailyxp hoje. Volte em , ${time.hours}h, ${time.minutes}m, e ${time.seconds}s`)
    } else {
        db.add(`xp_${user.id}`, 150)
        db.set(`dailyxp_${message.author.id}_${user.id}`, Date.now())

        return message.channel.send(`Você obteve 150xp.`)
    }
}