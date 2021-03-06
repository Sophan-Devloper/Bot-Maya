const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
      const adm = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
      return message.inlineReply(adm)
    }

    let timeout1 = 6140000
    let author1 = await db.fetch(`pego_${message.author.id}`)

    if (author1 !== null && timeout1 - (Date.now() - author1) > 0) {
        let time = ms(timeout1 - (Date.now() - author1))

        const presomax = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('🚨 Você está em prisão máxima!')
            .setDescription('`Liberdade em: ' + `${time.minutes}` + 'm e ' + `${time.seconds}` + 's`')

        return message.inlineReply(presomax)
    } else {

        let money = db.get(`money_${message.author.id}`)
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        if (!args[0]) {
            const noamout = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Siga o formato correto')
                .setDescription('`' + prefix + 'depositar Valor`\n ' + '`' + prefix + 'depositar all`\n ')
            return message.inlineReply(noamout)
        }

        if (args[0] === 'all') {
            let money = db.get(`money_${message.author.id}`)
            if (!db.get(`money_${message.author.id}`)) money = '0'

            if (money === null) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setDescription(`Você não tem nada para depositar.`)
                return message.inlineReply(nota)
            }

            if (money < 0) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setDescription(`Você não tem nada para depositar.`)
                return message.inlineReply(nota)
            }

            if (money == 0) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setDescription(`Você não tem nada para depositar.`)
                return message.inlineReply(nota)
            }

            if (money > 0) {
                db.add(`bank_${message.author.id}`, money)
                db.subtract(`money_${message.author.id}`, money)

                const nota = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setDescription(`${message.author} depositou ${money}<:StarPoint:766794021128765469>`)
                return message.inlineReply(nota)
            }
        }

        if (isNaN(args[0])) {
            const notnumber = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Valor não reconhecido')
                .setDescription('O valor que você digitou não é um número.')
            return message.inlineReply(notnumber)
        }

        if (money < 0) {
            const not = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Você não tem todo esse dinheiro.')
            return message.inlineReply(not)
        }

        if (money < args[0]) {
            const not = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Você não tem todo esse dinheiro.')
            return message.inlineReply(not)
        }

        if (args[0] < 0) {
            const nota = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Diga um valor maior que 0')
            return message.inlineReply(nota)
        }
        db.add(`bank_${message.author.id}`, args[0])
        db.subtract(`money_${message.author.id}`, args[0])

        const embed = new Discord.MessageEmbed()
            .setColor('#efff00')
            .setDescription(`${message.author} depositou ${args[0]}<:StarPoint:766794021128765469> no banco.`)
        message.inlineReply(embed)

    }
}