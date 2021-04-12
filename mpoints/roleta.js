const Discord = require("discord.js")
const db = require("quick.db")

const slotItems = ["🍇", "🍉", "🍌", "🍎", "🍒"]

exports.run = async (client, message, args) => {

    let user = message.author
    let win = false
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    if (!args[0]) {
        const noargs = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Roleta Maya')
            .setDescription('Aqui você pode apostar ou perder o dinheiro apostado, então cuidado.\n \n**Observações**\nPerdeu? Você perde o valor apostado.\nVitória? Você ganha 3x mais o valor apostado.')
            .addFields(
                {
                    name: 'Comando',
                    value: '`' + prefix + 'roleta valor`'
                }
            )
        return message.channel.send(noargs)
    }

    let money = db.get(`money_${message.author.id}`)
    if (!db.get(`money_${message.author.id}`)) money = '0'

    if (money === null) {
        const nota = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setDescription(`${message.author}, você não tem dinheiro para apostar.`)
        return message.channel.send(nota)
    }

    if (money < 0) {
        const nota = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setDescription(`${message.author}, você não pode jogar com divida.`)
        return message.channel.send(nota)
    }

    if (money == 0) {
        const nota = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setDescription(`${message.author}, você não tem dinheiro para apostar.`)
        return message.channel.send(nota)
    }

    if (args[0] > money) {
        const nota = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setDescription(`${message.author}, você não tem todo esse dinheiro.`)
        return message.channel.send(nota)
    }

    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length) }

    if (number[0] == number[1] && number[1] == number[2]) {
        money *= 3
        win = true
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
        money *= 30
        win = true
    }
    if (win) {
        let slotsEmbed1 = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\n${message.author} ganhou ${money} <:estrelinha:831161441847345202>`)
        message.channel.send(slotsEmbed1)
        db.add(`money_${message.author.id}`, money)
    } else {
        let slotsEmbed = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\n${message.author} perdeu ${money} <:estrelinha:831161441847345202>`)
        message.channel.send(slotsEmbed)
        db.subtract(`money_${message.author.id}`, money)
    }
}