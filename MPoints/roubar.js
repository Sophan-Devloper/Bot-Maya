const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')

module.exports = {
    async run(client, message, args) {
        message.delete()

        let author = message.author

        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        let user = message.mentions.members.first()
        if (!user) {
            const nook = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Siga o formato correto')
                .setDescription('`' + prefix + 'rob @user`')
            return message.channel.send(nook)
        }

        if (user.id == message.author.id) {
            const nook = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Siga o formato correto')
                .setDescription('`' + prefix + 'rob @user`')
            return message.channel.send(nook)
        }

        var usermoney = db.get(`money_${user.id}`)
        if (usermoney == null) usermoney = 0

        var autormoney = db.get(`money_${message.author.id}`)
        if (autormoney == null) autormoney = 0

        if (usermoney <= 0) {
            const nomoney = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle(`${user.user.username} não possui dinheiro.`)
        }

        var timeout = 6040000
        var daily = db.get(`robtime_${message.author.id}`)
        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily))

            let embedtime = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setDescription(`Você já roubou alguém hoje, robe novamente em ${time.minutes}m e ${time.seconds}s.`)
            return message.channel.send(embedtime)
        } else {

            let sorte = Math.floor(Math.random() * 4) + 1

            if (sorte == 2) {
                var amount = Math.floor(Math.random() * autor_money) + 1
                var embed1 = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle("🚨 A polícia te pegou e você foi preso!")
                    .setDescription(`A fiança custou ${amount}<:StarPoint:766794021128765469>`)
                message.channel.send(embed1)
                db.substract(`money_${message.author.id}`, amount)
                db.set(`robtime_${message.author.id}`, Date.now())
            } else {
                let amount = Math.floor(Math.random() * usermoney) + 1
                let moneyEmbed = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setTitle(`🔫 Você roubou ${user.user.username} com sucesso!`)
                    .setDescription(`O lucro do roubo foi de ${amount}<:StarPoint:766794021128765469>`)

                message.channel.send(moneyEmbed)
                db.subtract(`money_${user.id}`, amount)
                db.add(`money_${message.author.id}`, amount)
                db.set(`robtime_${message.author.id}`, Date.now())
            }
        }
    }
}