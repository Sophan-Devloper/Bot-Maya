const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

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

        if (!args[0]) {
            const noargs = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setTitle('<:estrelinha:831161441847345202> Sistema de Vendas Maya')
                .setDescription('Aqui você pode vender seus itens em troca de MPoints. É muito simples, basta usar o comando, assim você pdoe vender os itens obtidos.\n \nDigite o nome do item com meu prefixo que eu te falo mais informações sobre ele.')
                .addField('Comando', '`' + prefix + 'vender NomeDoItem Quantidade`')
                .addField('Todos os itens', '`' + prefix + 'loja`')
            return message.channel.send(noargs)
        }

        let peixes = await db.get(`peixes_${message.author.id}`)
        if (peixes === null) { peixes = "0" }
        if (!db.get(`peixes_${message.author.id}`)) { peixes = 0 }

        let camarao = await db.get(`camarao_${message.author.id}`)
        if (camarao === null) { camarao = "0" }
        if (!db.get(`camarao_${message.author.id}`)) { camarao = 0 }

        let diamond = await db.get(`diamond_${message.author.id}`)
        if (diamond === null) { diamond = "0" }
        if (!db.get(`diamond_${message.author.id}`)) { diamond = 0 }

        let minerio = await db.get(`minerio_${message.author.id}`)
        if (minerio === null) { minerio = 0 }
        if (!db.get(`minerio_${message.author.id}`)) { minerio = 0 }

        if (['peixe', 'peixes', 'fish'].includes(args[0])) {

            if (peixes === null) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('❌ Venda negada')
                    .setDescription(`${message.author}, você não tem peixes para vender.`)
                return message.channel.send(nota)
            }

            if (!args[1]) {
                return message.channel.send(`${message.author}, ` + 'quantos peixes você quer vender? `' + prefix + 'vender peixes quantidade`')
            }

            if (peixes < args[1]) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('❌ Venda negada')
                    .setDescription(`${message.author}, você não tem tudo isso de peixes para vender.`)
                return message.channel.send(nota)
            }

            if (peixes == 0) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('❌ Venda negada')
                    .setDescription(`${message.author}, você não tem peixes para vender.`)
                return message.channel.send(nota)
            }

            if (peixes < 0) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('❌ Venda negada')
                    .setDescription(`${message.author}, você não tem peixes para vender.`)
                return message.channel.send(nota)
            }

            if (peixes = args[1] || peixes > args[1]) {
                db.subtract(`peixes_${message.author.id}`, args[1])
                db.add(`money_${message.author.id}`, args[1] * 100)
                db.subtract(`bank_${client.user.id}`, args[1] * 100)
                const buyarma = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('✅ Venda aprovada')
                    .setDescription(`${message.author} vendeu 🐟 ${args[1]} peixes e obteve ${args[1] * 100}<:estrelinha:831161441847345202>MPoints`)
                return message.channel.send(buyarma)
            }
        } else {
            return message.channel.send(`${message.author}, eu não achei nenhum item com o nome **${args.join(" ")}** no meu banco de dados.`)
        }
    }
}