const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    if (!args[0]) {
        var noargs = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('👊 ✋ ✌️ Jokempo')
            .setDescription('Você pode jogar jokempo e ganhar ou perder 10<:StarPoint:766794021128765469>MPoints')
            .addField('Comando', '`' + prefix + 'j <pedra> <papel> <tesoura>`')
        return message.inlineReply(noargs)
    }

    let money = db.get(`money_${message.author.id}`)
    if (money === null) money = 0

    if (!money) {
        return message.inlineReply('Você precisa ter pelo menos 10<:StarPoint:766794021128765469>MPoints na carteira')
    }

    if (money < 10) {
        return message.inlineReply('Você precisa ter pelo menos 10<:StarPoint:766794021128765469>MPoints na carteira')
    }

    let Options = ["pedra", "papel", "tesoura"]

    if (!Options.includes(args[0])) {
        return message.inlineReply(':x: Opção Incorreta!\n`' + prefix + 'j <pedra> <papel> <tesoura>`')
    }

    let random = ['win', 'lose', 'draw']
    var result = random[Math.floor(Math.random() * random.length)]

    if (['pedra', 'rock'].includes(args[0])) {

        var lose = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('😭 | Eu Perdiiii')
            .setDescription('Você 👊 x ✌️ Maya\nVocê ganhou 10<:StarPoint:766794021128765469>MPoints')

        var win = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('😌 | Eu Ganheeei')
            .setDescription('Você 👊 x ✋ Maya\nVocê perdeu 10<:StarPoint:766794021128765469>MPoints')

        var draw = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('😕 | Deu empate')
            .setDescription('Você 👊 x 👊 Maya\nNinguém ganhou nada que pena')


        if (result === 'win') {
            db.subtract(`money_${message.author.id}`, 10)
            return message.inlineReply(win)
        }

        if (result === 'lose') {
            db.add(`money_${message.author.id}`, 10)
            return message.inlineReply(lose)
        }

        if (result === 'draw') {
            return message.inlineReply(draw)
        }

    } else if (['papel', 'paper'].includes(args[0])) {

        var lose = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('😭 | Eu Perdiiii')
            .setDescription('Você ✋ x 👊 Maya\nVocê ganhou 10<:StarPoint:766794021128765469>MPoints')

        var win = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('😌 | Eu Ganheeei')
            .setDescription('Você ✋ x ✌️ Maya\nVocê perdeu 10<:StarPoint:766794021128765469>MPoints')

        var draw = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('😕 | Deu empate')
            .setDescription('Você ✋ x ✋ Maya\nNinguém ganhou nada que pena')

        if (result === 'win') {
            db.subtract(`money_${message.author.id}`, 10)
            return message.inlineReply(win)
        }

        if (result === 'lose') {
            db.add(`money_${message.author.id}`, 10)
            return message.inlineReply(lose)
        }

        if (result === 'draw') {
            return message.inlineReply(draw)
        }

    } else if (['tesoura', 'sissors'].includes(args[0])) {

        var lose = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('😭 | Eu Perdiiii')
            .setDescription('Você ✌️ x ✋ Maya\nVocê ganhou 10<:StarPoint:766794021128765469>MPoints')

        var win = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('😌 | Eu Ganheeei')
            .setDescription('Você ✌️ x 👊 Maya\nVocê perdeu 10<:StarPoint:766794021128765469>MPoints')

        var draw = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('😕 | Deu empate')
            .setDescription('Você ✌️ x ✌️ Maya\nNinguém ganhou nada que pena')

        if (result === 'win') {
            db.subtract(`money_${message.author.id}`, 10)
            return message.inlineReply(win)
        }

        if (result === 'lose') {
            db.add(`money_${message.author.id}`, 10)
            return message.inlineReply(lose)
        }

        if (result === 'draw') {
            return message.inlineReply(draw)
        }
    }
}