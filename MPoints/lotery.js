const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

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

        let timeout = 1728000
        let author = await db.fetch(`lotery_${message.author.id}`)

        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author))
            return message.channel.send(`Você pode jogar novamente em ${time.minutes}m e ${time.seconds}s`)
        } else {
            var amount = Math.floor(Math.random() * 1000) + 1
            db.add(`money_${message.author.id}`, amount)
            db.set(`lotery_${message.author.id}`, Date.now())

            await message.channel.send(`${message.author} jogou e ganhou ${amount} <:StarPoint:766794021128765469>MPoints.`)
        }
    }
}