const db = require('quick.db')
const ms = require('parse-ms')

module.exports = {
    name: "lotery",
    description: "Win money",

async run (client, message, args) {
message.delete()

let user = message.author
let timeout = 172800000
let author = await db.fetch(`lotery_${message.guild.id}_${user.id}`)

if(author !== null && timeout - (Date.now() - author) > 0){
    let time = ms(timeout - (Date.now() - author))
    return message.channel.send(`Você pode jogar novamente em ${time.minutes}m e ${time.seconds}s`).then(msg => msg.delete({timeout: 6000}))
} else {
    let amount = Math.floor(Math.random() * 1000) + 1;
db.add(`money_${message.guild.id}_${user.id}`, amount)
db.set(`lotery_${message.guild.id}_${user.id}`, Date.now())

  message.channel.send(`Você jogou e ganhou ${amount} <:StarPoint:766794021128765469>RPoints.`).then(msg => msg.delete({timeout: 6000}))
}}}