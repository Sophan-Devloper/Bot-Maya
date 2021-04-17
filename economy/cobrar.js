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

        user = message.mentions.members.first()

        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        args[0] = user
        if (!args[0]) {
            const noamout = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Siga o formato correto')
                .setDescription('`' + prefix + 'cobrar @user Valor`')
            return message.inlineReply(noamout)
        }

        if (user.id === '821471191578574888') {
            return message.inlineReply('Sai pra lá, eu não to devendo ninguém :cry:')
        }

        if (user.id == message.author.id) {
            const noamout = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Você não pode cobrar para você mesmo.')
            return message.inlineReply(noamout)
        }

        if (!args[1]) {
            const noamout = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Siga o formato correto')
                .setDescription('`' + prefix + 'cobrar @user Valor`')
            return message.inlineReply(noamout)
        }

        if (args[1] < '0') {
            const nota = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Diga um valor maior que 0')
            return message.inlineReply(nota)
        }

        if (args[1] === '0') {
            const nota = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Diga um valor maior que 0')
            return message.inlineReply(nota)
        }

        if (isNaN(args[1])) {
            const notnumber = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Valor não reconhecido')
                .setDescription('O valor que você digitou não é um número.')
            return message.inlineReply(notnumber)
        }

        if (args[2]) {
            const not = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Siga o formato correto')
                .setDescription('`' + prefix + 'cobrar @user Valor`')
            return message.inlineReply(not)
        }

        const cobrando = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setDescription(`${user}, você está sendo cobrado por ${message.author}\n \nValor cobrado: ${args[1]}<:StarPoint:766794021128765469>MPoints`)
            .setFooter("Você deseja pagar?")

        await message.inlineReply(cobrando).then(msg => {
            msg.react('✅') // Check
            msg.react('❌') // X

            msg.awaitReactions((reaction, user) => {
                if (message.mentions.users.first().id !== user.id) return

                if (reaction.emoji.name === '✅') { // Check
                    msg.delete()
                    const money = db.get(`money_${user.id}`)

                    if (money === null) {
                        const nomoney = new Discord.MessageEmbed()
                            .setColor('#FF0000')
                            .setDescription('Você não tem todo esse dinheiro na carteira.')
                        return message.inlineReply(`${user}`, nomoney)
                    }

                    if (!money) {
                        const nomoney = new Discord.MessageEmbed()
                            .setColor('#FF0000')
                            .setDescription('Você não tem todo esse dinheiro na carteira.')
                        return message.inlineReply(`${user}`, nomoney)
                    }

                    if (money < args[1]) {
                        const nomoney = new Discord.MessageEmbed()
                            .setColor('#FF0000')
                            .setDescription('Você não tem todo esse dinheiro na carteira.')
                        return message.inlineReply(`${user}`, nomoney)
                    }

                    db.subtract(`money_${user.id}`, args[1])
                    db.add(`money_${message.author.id}`, args[1])

                    const embed2 = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setTitle('Transação concluida!')
                        .setDescription(`${user} pagou ${args[1]}<:StarPoint:766794021128765469>MPoints para ${message.author}`)

                    return message.inlineReply(embed2)
                }
                if (reaction.emoji.name === '❌') { // Check
                    msg.delete()
                    const noop = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setDescription(`${user} recusou e não pagou o valor cobrado.`)
                    return message.inlineReply(noop)
                }
            })
        })
    }
}