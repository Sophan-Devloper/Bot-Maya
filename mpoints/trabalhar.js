const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')

exports.run = async (client, message, args) => {

    let timeout1 = 6140000
    let author1 = await db.fetch(`pego_${message.author.id}`)

    if (author1 !== null && timeout1 - (Date.now() - author1) > 0) {
        let time = ms(timeout1 - (Date.now() - author1))

        const presomax = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('🚨 Você está em prisão máxima!')
            .setDescription('`Liberdade em: ' + `${time.minutes}` + 'm e ' + `${time.seconds}` + 's`')
        return message.channel.send(presomax)
    } else {

        let timeout = 600000
        let author = await db.fetch(`worked_${message.author.id}`)

        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author))
             
            return message.channel.send(`Você pode trabalhar novamente em ${time.minutes}m e ${time.seconds}s`)
        } else {
            let amount = Math.floor(Math.random() * 800) + 1;
            db.add(`money_${message.author.id}`, amount)
            db.set(`worked_${message.author.id}`, Date.now())

            message.channel.send(`${message.author} trabalhou e ganhou ${amount} <:StarPoint:766794021128765469>MPoints`)
        }
    }
}