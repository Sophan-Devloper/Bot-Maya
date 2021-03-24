const db = require('quick.db')
const ms = require('parse-ms')

module.exports = {
    name: "daily",
    description: "Receive a daily award of money",

async run (client, message, args) {
message.delete()
let user = message.author
let timeout = 86400000
let amount = 500
let daily = await db.fetch(`daily_${message.author.id}_${user.id}`)

if(daily !== null && timeout - (Date.now() - daily) > 0){
let time = ms(timeout - (Date.now() - daily))
    return message.channel.send(`Você já pegou seus pontos hoje. Volte em ${time.days}d, ${time.hours}h, ${time.minutes}m, e ${time.seconds}s`).then(msg => msg.delete({timeout: 6000}))
} else {
      db.add(`money_${message.author.id}_${user.id}`, amount);
      db.set(`daily_${message.author.id}_${user.id}`, Date.now());

message.channel.send(`Você adquiriu ${amount} <:StarPoint:766794021128765469>MPoints.`).then(msg => msg.delete({timeout: 6000}))
}}}