const db = require('quick.db')
const ms = require('parse-ms')

exports.run = async (client, message, args) => {
  let timeout = 86400000
  let amount = 500

  let daily = await db.fetch(`daily_${message.author.id}`)
  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily))
    return message.channel.send(`Você já pegou seus pontos hoje. Volte em ${time.days}d, ${time.hours}h, ${time.minutes}m, e ${time.seconds}s`).then(msg => msg.delete({ timeout: 6000 }))
  } else {

    let money = db.fetch(`money_${message.author.id}`)
    if (money === null) { money = 0 }

    db.add(`money_${message.author.id}`, amount);
    db.set(`daily_${message.author.id}`, Date.now());

    message.channel.send(`Você adquiriu ${amount} <:StarPoint:766794021128765469>MPoints.`).then(msg => msg.delete({ timeout: 6000 }))
  }
}