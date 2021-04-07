const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    user = message.mentions.members.first()

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    args[0] = user
    if (!args[0]) {
        const noamout = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'pay @user Valor`')
        return message.channel.send(noamout)
    }

    if (!args[1]) {
        const noamout = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'pay @user Valor`')
        return message.channel.send(noamout)
    }

    let money = db.get(`money_${message.author.id}`)
    if (money === null) money = '0'

    if (money < args[1]) {
        const not = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setDescription(`Você precisa ter ${args[1]}<:StarPoint:766794021128765469> na carteira para poder pagar ${user.user.username}.`)
        return message.channel.send(not)
    }

    if (args[1] < 0) {
        const nota = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Diga um valor maior que 0')
        return message.channel.send(nota)
    }

    if (isNaN(args[1])) {
        const notnumber = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Valor não reconhecido')
            .setDescription('O valor que você digitou não é um número.')
        return message.channel.send(notnumber)
    }

    db.add(`money_${user.id}`, args[1])
    db.subtract(`money_${message.author.id}`, args[1])

    const embed = new Discord.MessageEmbed()
        .setColor('#efff00')
        .setDescription(`${message.author} pagou ${args[1]}<:StarPoint:766794021128765469> para ${user.user.username}.`)
    return message.channel.send(embed)
}