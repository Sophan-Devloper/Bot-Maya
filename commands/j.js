const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (!args[0]) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const noargs = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'j <papel> <pedra> <tesoura>`')
        return message.channel.send(noargs)
    }

    const Options = ["pedra", "papel", "tesoura"]
    if (!Options.includes(args[0]))
        return message.channel.send(":x: Opção Incorreta!")

    if (args[0] === "pedra") {

        const lose = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('😭 | Eu Perdiiii')
            .setDescription('Você 👊 x ✌️ Maya')

        const win = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('😌 | Eu Ganheeei')
            .setDescription('Você 👊 x ✋ Maya')

        const draw = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('😕 | Deu empate')
            .setDescription('Você 👊 x 👊 Maya')

        const random1 = [win, lose, draw]
        message.channel.send(random1[Math.floor(Math.random() * random1.length)])

    } else if (args[0] === "papel") {

        const lose = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('😭 | Eu Perdiiii')
            .setDescription('Você ✋ x 👊 Maya')

        const win = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('😌 | Eu Ganheeei')
            .setDescription('Você ✋ x ✌️ Maya')

        const draw = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('😕 | Deu empate')
            .setDescription('Você ✋ x ✋ Maya')

        let random2 = [lose, win, draw]
        message.channel.send(random2[Math.floor(Math.random() * random2.length)])

    } else if (args[0] === "tesoura") {

        const lose = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('😭 | Eu Perdiiii')
            .setDescription('Você ✌️ x ✋ Maya')

        const win = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('😌 | Eu Ganheeei')
            .setDescription('Você ✌️ x 👊 Maya')

        const draw = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('😕 | Deu empate')
            .setDescription('Você ✌️ x ✌️ Maya')

        let random3 = [lose, win, draw]
        message.channel.send(random3[Math.floor(Math.random() * random3.length)])
    }
}