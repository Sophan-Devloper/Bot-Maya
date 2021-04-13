const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
      const adm = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
      return message.channel.send(adm)
    }

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

        user = message.mentions.members.first()

        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        args[0] = user
        if (!args[0]) {
            const noamout = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Siga o formato correto')
                .setDescription('`' + prefix + 'doar @user Valor`')
            return message.channel.send(noamout)
        }

        if (!args[1]) {
            const noamout = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Siga o formato correto')
                .setDescription('`' + prefix + 'doar @user Valor`')
            return message.channel.send(noamout)
        }

        if (user.id == message.author.id) {
            const noamout = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Você não pode pagar para você mesmo.')
            return message.channel.send(noamout)
        }

        let money = db.get(`money_${message.author.id}`)
        if (money === null) money = '0'

        if (money < args[1]) {
            const not = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setDescription(`Você precisa ter pelo menos ${args[1]}<:StarPoint:766794021128765469> na carteira para poder doar.`)
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
            .setColor('GREEN')
            .setDescription(`${message.author} doou para ${args[1]}<:StarPoint:766794021128765469> para ${user}.`)
        return message.channel.send(embed)
    }
}