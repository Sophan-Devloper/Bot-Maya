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
                .setTitle('<:estrelinha:831161441847345202> Sistema de Compras Maya')
                .setDescription('Aqui você pode comprar os itens da lojinha. É muito simples, basta usar o comando, assim você compra itens e pode usa-lo.\n \nDigite o nome do item com meu prefixo que eu te falo mais informações sobre ele.')
                .addField('Comando', '`' + prefix + 'buy Nome do item`')
                .addField('Todos os itens', '`' + prefix + 'loja`')
            return message.channel.send(noargs)
        }

        if (['vara de pesca', 'vara', 'pesca'].includes(args[0])) {

            if (db.get(`itens_${message.author.id}`, "Vara de pesca")) {
                return message.channel.send(`${message.author}, você já possui este item.`)
            }

            var money = db.get(`money_${message.author.id}`)
            if (money === null) { money = 0 }

            if (money === null) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('❌ Compra negada')
                    .setDescription(`${message.author}, você não tem dinheiro para comprar este item.`)
                return message.channel.send(nota)
            }

            if (money < 5000) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('❌ Compra negada')
                    .setDescription(`${message.author}, você não tem dinheiro suficiente para comprar este item.`)
                return message.channel.send(nota)
            }

            if (money == 0) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('✅ Compra aprovada')
                    .setDescription(`${message.author}, você não tem dinheiro.`)
                return message.channel.send(nota)
            }

            if (money < 0) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('✅ Compra aprovada')
                    .setDescription(`${message.author}, você está com divida.`)
                return message.channel.send(nota)
            }

            if (money = 5000 || money > 5000) {
                db.subtract(`money_${message.author.id}`, 5000)
                db.add(`bank_${client.user.id}`, 5000)
                db.push(`itens_${message.author.id}`, "Vara de pesca")

                const buypesca = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('✅ Compra aprovada')
                    .setDescription(`${message.author}` + ', você comprou uma 🎣 `Vara de Pesca`')
                return message.channel.send(buypesca)
            }
        }

        if (['arma'].includes(args[0])) {

            if (db.get(`itens_${message.author.id}`, "Arma")) {
                return message.channel.send(`${message.author}, você já possui este item.`)
            }

            var money = db.get(`money_${message.author.id}`)
            if (money === null) { money = 0 }

            if (money === null) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('❌ Compra negada')
                    .setDescription(`${message.author}, você não tem dinheiro para comprar este item.`)
                return message.channel.send(nota)
            }

            if (money < 100000) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('❌ Compra negada')
                    .setDescription(`${message.author}, você não tem dinheiro suficiente para comprar este item.`)
                return message.channel.send(nota)
            }

            if (money == 0) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('❌ Compra negada')
                    .setDescription(`${message.author}, você não tem dinheiro.`)
                return message.channel.send(nota)
            }

            if (money < 0) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('✅ Compra aprovada')
                    .setDescription(`${message.author}, você está com divida.`)
                return message.channel.send(nota)
            }

            if (money = 100000 || money > 100000) {
                db.subtract(`money_${message.author.id}`, 100000)
                db.add(`bank_${client.user.id}`, 100000)
                db.push(`itens_${message.author.id}`, "Arma")
                const buyarma = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('✅ Compra aprovada')
                    .setDescription(`${message.author}` + ', você comprou uma 🔫 `Arma`')
                return message.channel.send(buyarma)
            }
        }

        if (['isca', 'minhoca', 'iscas', 'minhocas'].includes(args[0])) {

            var money = db.get(`money_${message.author.id}`)
            if (money === null) { money = 0 }

            if (money === null) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('❌ Compra negada')
                    .setDescription(`${message.author}, você não tem dinheiro para comprar este item.`)
                return message.channel.send(nota)
            }

            if (!args[1]) {
                return message.channel.send(`${message.author}, ` + 'quantas iscas você quer comprar? `' + prefix + 'buy iscas quantidade`')
            }
            if (money < args[1] * 10) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('❌ Compra negada')
                    .setDescription(`${message.author}, você não tem dinheiro suficiente para comprar este item.`)
                return message.channel.send(nota)
            }

            if (money == 0) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('❌ Compra negada')
                    .setDescription(`${message.author}, você não tem dinheiro.`)
                return message.channel.send(nota)
            }

            if (money < 0) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('✅ Compra negada')
                    .setDescription(`${message.author}, você está com divida.`)
                return message.channel.send(nota)
            }

            db.add(`iscas_${message.author.id}`, args[1] * 1)
            var acima = db.get(`iscas_${message.author.id}`)
            if (acima > 500) {
                db.subtract(`iscas_${message.author.id}`, args[1] * 1)
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('LIMITE DE ISCAS ATINGIDO!')
                    .setDescription(`${message.author}, você não pode passar de 500 iscas.`)
                return message.channel.send(nota)
            }

            if (money = 10 || money > 10) {
                db.subtract(`money_${message.author.id}`, args[1] * 10)
                db.add(`bank_${client.user.id}`, args[1] * 10)
                const buyarma = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('✅ Compra aprovada')
                    .setDescription(`${message.author}` + ', ' + 'você comprou ' + `${args[1]}` + ' 🪱 `Iscas`')
                return message.channel.send(buyarma)
            }
        }

        if (['picareta', "Picareta"].includes(args[0])) {

            if (db.get(`itens_${message.author.id}`) == "Picareta") {
                return message.channel.send(`${message.author}, você já possui este item.`)
            }

            var money = db.get(`money_${message.author.id}`)
            if (money === null) { money = 0 }

            if (money === null) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('❌ Compra negada')
                    .setDescription(`${message.author}, você não tem dinheiro para comprar este item.`)
                return message.channel.send(nota)
            }

            if (money < 350) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('❌ Compra negada')
                    .setDescription(`${message.author}, você não tem dinheiro suficiente para comprar este item.`)
                return message.channel.send(nota)
            }

            if (money == 0) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('❌ Compra negada')
                    .setDescription(`${message.author}, você não tem dinheiro.`)
                return message.channel.send(nota)
            }

            if (money < 0) {
                const nota = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('✅ Compra aprovada')
                    .setDescription(`${message.author}, você está com divida.`)
                return message.channel.send(nota)
            }

            if (money = 350 || money > 350) {
                db.subtract(`money_${message.author.id}`, 350)
                db.add(`bank_${client.user.id}`, 350)
                db.push(`itens_${message.author.id}`, "Picareta")
                const buyarma = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('✅ Compra aprovada')
                    .setDescription(`${message.author}` + ', você comprou uma ⛏️ `Picareta`')
                return message.channel.send(buyarma)
            }
        } else {
            return message.channel.send(`${message.author}, eu não achei nenhum item com o nome **${args.join(" ")}** na minha loja.`)
        }
    }
}