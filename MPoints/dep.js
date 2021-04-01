const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    message.delete()

    let money = db.get(`money_${message.author.id}`)

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    if (!args[0]) {
        const noamout = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'dep Valor`')
        return message.channel.send(noamout)
    }

    if (money < args[0]) {
        const not = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Você não tem todo esse dinheiro.')
        return message.channel.send(not)
    }

    if (args[0] < 0) {
        const nota = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Diga um valor maior que 0')
        return message.channel.send(nota)
    }

    if (args[0] === 'all') {
        let money = db.get(`money_${message.author.id}`)
        if (money === null) money = '0'

        if (!db.get(`money_${message.author.id}`)) money = '0'

        if (money == '0') {
            const nota = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setDescription(`Você não tem nada para depositar.`)
            return message.channel.send(nota)
        }

        db.add(`bank_${message.author.id}`, money)
        db.subtract(`money_${message.author.id}`, money)

        const nota = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription(`Você depositou ${money}<:StarPoint:766794021128765469>`)
        return message.channel.send(nota)
    }

    if (isNaN(args[0])) {
        const notnumber = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Valor não reconhecido')
            .setDescription('O valor que você digitou não é um número.')
    }

    db.add(`bank_${message.author.id}`, args[0])
    db.subtract(`money_${message.author.id}`, args[0])

    const embed = new Discord.MessageEmbed()
        .setColor('#efff00')
        .setDescription(`Você depositou ${args[0]}<:StarPoint:766794021128765469> no banco.`)
    message.channel.send(embed).then(msg => msg.delete({ timeout: 10000 }))
}