const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

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

        if (!args[0]) {
            const noargs = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setTitle('💸 Comando Doar')
                .setDescription('Doe MPoints pra galera, é simples e rápido!\n \n*MPoints perdidos não serão recuperados. Cuidado para não ser enganado*')
                .addField('Comando', '`' + prefix + 'doar @user quantia`\n' + '`' + prefix + 'doar @user all/tudo`')
                .setFooter('Apenas o dinheiro na carteira será válido para doações.')
            return message.inlineReply(noargs)
        }

        if (['help', 'ajuda'].includes(args[0])) {
            const ajuda = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setTitle('💸 Comando Doar')
                .setDescription('Doe MPoints pra galera, é simples e rápido!\n \n*MPoints perdidos não serão recuperados. Cuidado para não ser enganado*')
                .addField('Comando', '`' + prefix + 'doar @user quantia`\n' + '`' + prefix + 'doar @user all/tudo`')
                .setFooter('Apenas o dinheiro na carteira será válido para doações.')
            return message.inlineReply(ajuda)
        }

        const incorrect = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Formato incorreto')
            .setDescription('Não sabe usar o comando doar?\n' + '`' + prefix + 'doar help`')

        if (!args[1]) {
            return message.inlineReply(incorrect)
        }

        let user = message.mentions.members.first()

        args[0] = message.mentions.members.first()

        if (['all', 'tudo'].includes(args[1])) {
            let mon = db.get(`money_${message.author.id}`)
            if (!db.get(`money_${message.author.id}`)) money = '0'

            if (!user || !args[0]) {
                return message.inlineReply(incorrect)
            }

            if (user.id == message.author.id) {
                const noamout = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('Você não pode doar para você mesmo.')
                return message.inlineReply(noamout)
            }

            if (mon === null) {
                return message.inlineReply('Você não tem dinheiro para efetuar doações.')
            }

            if (mon < 0 && mon === 0) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('Você não tem dinheiro para doar.')
                return message.inlineReply(nota)
            }

            const confirm = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setTitle('Confirmação...')
                .setDescription(`Confirmar transação no valor de ${mon}<:StarPoint:766794021128765469>MPoints para ${user}?`)

            return message.inlineReply(confirm).then(msg => {
                msg.react('✅') // Check
                msg.react('❌') // X
                msg.delete({ timeout: 120000 }).catch(err => { return })

                msg.awaitReactions((reaction, user) => {
                    let mone = db.get(`money_${message.author.id}`)
                    if (!db.get(`money_${message.author.id}`)) money = '0'

                    if (message.author.id !== user.id) return

                    if (reaction.emoji.name === '✅') { // Sim
                        msg.delete()

                        const embed = new Discord.MessageEmbed()
                            .setColor('GREEN')
                            .setTitle('Transação efetuada com sucesso!')
                        message.channel.send('🔄 Efetuando a transação...').then(msg => msg.delete({ timeout: 4000 })).then(msg => msg.channel.send(embed))
                        db.add(`money_${user.id}`, mone)
                        db.subtract(`money_${message.author.id}`, mone)
                    }

                    if (reaction.emoji.name === '❌') { // Não
                        msg.delete()
                        msg.channel.send(`Transação cancelada.`)
                    }
                })
            })
        }

        if (!user) {
            return message.inlineReply(incorrect)
        }

        if (user.id == message.author.id) {
            const noamout = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Você não pode doar para você mesmo.')
            return message.inlineReply(noamout)
        }

        let money = db.get(`money_${message.author.id}`)
        if (money === null) money = '0'

        if (money < args[1]) {
            const not = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setDescription(`Você precisa ter pelo menos ${args[1]}<:StarPoint:766794021128765469> na carteira para poder doar.`)
            return message.inlineReply(not)
        }

        if (args[1] < 0) {
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

        db.add(`money_${user.id}`, args[1])
        db.subtract(`money_${message.author.id}`, args[1])

        const embed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription(`${message.author} doou ${args[1]}<:StarPoint:766794021128765469>MPoints para ${user}.`)
        return message.channel.send(embed)
    }
}