const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')

exports.run = async (client, message, args) => {
    // 🟠 1
    // 🟡2
    // 🟢3
    // 🟣4
    // 🟤5
    // 🔵6
    // 🔴7
    // ⚫8
    // ⚪9
    let user = message.author
    let timeout = 600000
    let author = await db.fetch(`crimetimeout_${message.author.id}`)

    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author))
        message.delete()
        return message.channel.send(`Xiiiiu ${message.author}!! Você está sendo procurado pela policia. A investigação vai durar mais ${time.minutes}m e ${time.seconds}s`).then(msg => msg.delete({ timeout: 6000 }))
    } else {

        const newcrime = new Discord.MessageEmbed()
            .setColor('GRAY')
            .setTitle('🕵️‍♂️ Você está preste a entrar no mundo do crime.🕵️‍♂️ ')
            .setDescription('O mundo do crime é um lugar perigoso, você pode ser preso e não conseguir fazer mais nada por horas.\n \nTem certeza que deseja entrar no mundo do crime?')

        await message.channel.send(`${message.author}`, newcrime).then(msg => {
            msg.react('🥷') // Check
            msg.react('❌') // X

            msg.awaitReactions((reaction, user) => {
                if (message.author.id !== user.id) return

                if (reaction.emoji.name === '🥷') { // Sim
                    msg.delete()

                    const embedcrime = new Discord.MessageEmbed()
                        .setColor('#FF0000')
                        .setTitle('🔎 Qual lugar da cidade você deseja roubar? :mag:')
                        .setDescription('🟠 Casa\n🟡 Mansão\n🟢 Prefeitura\n🟣 Cartório\n🟤 Correios\n🔵 Joaleria\n🔴 Shopping\n⚫ Fabrica\n⚪ Motel')

                    return message.channel.send(`${message.author}`, embedcrime).then(msg => {
                        msg.react('🟠').catch(err => { return }) // 1
                        msg.react('🟡').catch(err => { return }) // 2
                        msg.react('🟢').catch(err => { return })// 3
                        msg.react('🟣').catch(err => { return }) // 4
                        msg.react('🟤').catch(err => { return }) // 5
                        msg.react('🔵').catch(err => { return }) // 6
                        msg.react('🔴').catch(err => { return }) // 7
                        msg.react('⚫').catch(err => { return }) // 8
                        msg.react('⚪').catch(err => { return }) // 9

                        msg.awaitReactions((reaction, user) => { // CÓDIGOS DE OPÇÕES
                            if (message.author.id !== user.id) return

                            if (reaction.emoji.name === '🟠') { // 1
                                msg.delete()

                                var winlose = ['win', 'lose', 'win', 'win', 'fugiu']
                                var result = winlose[Math.floor(Math.random() * winlose.length)]

                                const embedcrime = new Discord.MessageEmbed()
                                    .setColor('#575353')
                                    .setDescription('🥷 Roubando uma casa...')

                                const fugindo = new Discord.MessageEmbed()
                                    .setColor('RED')
                                    .setTitle('🚔 Haa nããão! A policia!!!')
                                    .setDescription('🏃 Fugindo...')

                                const fugiu = new Discord.MessageEmbed()
                                    .setColor('YELLOW')
                                    .setTitle('Ufa, você escapou!')
                                    .setDescription('Você perdeu o dinheiro enquanto fugia.')

                                if (result === "win") {
                                    let amount = (Math.floor(Math.random() * 700) + 1)
                                    db.add(`money_${message.author.id}`, amount)
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())

                                    const win = new Discord.MessageEmbed()
                                        .setColor('GREEN')
                                        .setTitle('O roubo foi um sucesso!')
                                        .setDescription(`Com o roubo da casa, você obteve ${amount}<:StarPoint:766794021128765469>MPoints`)

                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(win))
                                } else if (result === "fugiu") {
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())
                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugindo)).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugiu))
                                } else if (result === "lose") {
                                    let amount = (Math.floor(Math.random() * 1000) + 1)
                                    db.subtract(`money_${message.author.id}`, amount)
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())

                                    const lose = new Discord.MessageEmbed()
                                        .setColor('#FF0000')
                                        .setTitle('🚨 Preso!')
                                        .setDescription(`Você foi preso e perdeu ${amount}<:StarPoint:766794021128765469>MPoints`)

                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugindo)).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, lose))
                                }
                            }
                            if (reaction.emoji.name === '🟡') { // 2
                                msg.delete()

                                var winlose = ['win', 'lose', 'win', 'fugiu']
                                var result = winlose[Math.floor(Math.random() * winlose.length)]

                                const embedcrime = new Discord.MessageEmbed()
                                    .setColor('#575353')
                                    .setDescription('🥷 Roubando a mansão...')

                                const fugindo = new Discord.MessageEmbed()
                                    .setColor('RED')
                                    .setTitle('🚔 Haa nããão! A policia!!!')
                                    .setDescription('🏃 Fugindo...')

                                const fugiu = new Discord.MessageEmbed()
                                    .setColor('YELLOW')
                                    .setTitle('Ufa, você escapou!')
                                    .setDescription('Você perdeu o dinheiro enquanto fugia.')

                                if (result === "win") {
                                    let amount = (Math.floor(Math.random() * 10000) + 1)
                                    db.add(`money_${message.author.id}`, amount)
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())

                                    const win = new Discord.MessageEmbed()
                                        .setColor('GREEN')
                                        .setTitle('O roubo foi um sucesso!')
                                        .setDescription(`Com o roubo da mansão, você obteve ${amount}<:StarPoint:766794021128765469>MPoints`)

                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(win))
                                } else if (result === "fugiu") {
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())
                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugindo)).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugiu))
                                } else if (result === "lose") {
                                    let amount = (Math.floor(Math.random() * 5000) + 1)
                                    db.subtract(`money_${message.author.id}`, amount)
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())

                                    const lose = new Discord.MessageEmbed()
                                        .setColor('#FF0000')
                                        .setTitle('🚨 Preso!')
                                        .setDescription(`Você foi preso e perdeu ${amount}<:StarPoint:766794021128765469>MPoints`)

                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugindo)).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, lose))
                                }
                            }
                            if (reaction.emoji.name === '🟢') { // 3
                                msg.delete()

                                var winlose = ['win', 'lose', 'lose', 'fugiu']
                                var result = winlose[Math.floor(Math.random() * winlose.length)]

                                const embedcrime = new Discord.MessageEmbed()
                                    .setColor('#575353')
                                    .setDescription('🥷 Roubando a prefeitura...')

                                const fugindo = new Discord.MessageEmbed()
                                    .setColor('RED')
                                    .setTitle('🚔 Haa nããão! A policia!!!')
                                    .setDescription('🏃 Fugindo...')

                                const fugiu = new Discord.MessageEmbed()
                                    .setColor('YELLOW')
                                    .setTitle('Ufa, você escapou!')
                                    .setDescription('Você perdeu o dinheiro enquanto fugia.')

                                if (result === "win") {
                                    let amount = (Math.floor(Math.random() * 15000) + 1)
                                    db.add(`money_${message.author.id}`, amount)
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())

                                    const win = new Discord.MessageEmbed()
                                        .setColor('GREEN')
                                        .setTitle('O roubo foi um sucesso!')
                                        .setDescription(`Com o roubo da prefeitura, você obteve ${amount}<:StarPoint:766794021128765469>MPoints`)

                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(win))
                                } else if (result === "fugiu") {
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())
                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugindo)).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugiu))
                                } else if (result === "lose") {
                                    let amount = (Math.floor(Math.random() * 8000) + 1)
                                    db.subtract(`money_${message.author.id}`, amount)
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())

                                    const lose = new Discord.MessageEmbed()
                                        .setColor('#FF0000')
                                        .setTitle('🚨 Preso!')
                                        .setDescription(`Você foi preso e perdeu ${amount}<:StarPoint:766794021128765469>MPoints`)

                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugindo)).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, lose))
                                }
                            }
                            if (reaction.emoji.name === '🟣') { // 4
                                msg.delete()

                                var winlose = ['win', 'lose', `win`, 'fugiu']
                                var result = winlose[Math.floor(Math.random() * winlose.length)]

                                const embedcrime = new Discord.MessageEmbed()
                                    .setColor('#575353')
                                    .setDescription('🥷 Roubando o cartório...')

                                const fugindo = new Discord.MessageEmbed()
                                    .setColor('RED')
                                    .setTitle('🚔 Haa nããão! A policia!!!')
                                    .setDescription('🏃 Fugindo...')

                                const fugiu = new Discord.MessageEmbed()
                                    .setColor('YELLOW')
                                    .setTitle('Ufa, você escapou!')
                                    .setDescription('Você perdeu o dinheiro enquanto fugia.')

                                if (result === "win") {
                                    let amount = (Math.floor(Math.random() * 8000) + 1)
                                    db.add(`money_${message.author.id}`, amount)
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())

                                    const win = new Discord.MessageEmbed()
                                        .setColor('GREEN')
                                        .setTitle('O roubo foi um sucesso!')
                                        .setDescription(`Com o roubo do cartório, você obteve ${amount}<:StarPoint:766794021128765469>MPoints`)

                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(win))
                                } else if (result === "fugiu") {
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())
                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugindo)).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugiu))
                                } else if (result === "lose") {
                                    let amount = (Math.floor(Math.random() * 4000) + 1)
                                    db.subtract(`money_${message.author.id}`, amount)
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())

                                    const lose = new Discord.MessageEmbed()
                                        .setColor('#FF0000')
                                        .setTitle('🚨 Preso!')
                                        .setDescription(`Você foi preso e perdeu ${amount}<:StarPoint:766794021128765469>MPoints`)

                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugindo)).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, lose))
                                }
                            }
                            if (reaction.emoji.name === '🟤') { // 5
                                msg.delete()

                                var winlose = ['win', 'lose', `win`, 'fugiu', 'fugiu', 'fugiu']
                                var result = winlose[Math.floor(Math.random() * winlose.length)]

                                const embedcrime = new Discord.MessageEmbed()
                                    .setColor('#575353')
                                    .setDescription('🥷 Roubando os correios...')

                                const fugindo = new Discord.MessageEmbed()
                                    .setColor('RED')
                                    .setTitle('🚔 Haa nããão! A policia!!!')
                                    .setDescription('🏃 Fugindo...')

                                const fugiu = new Discord.MessageEmbed()
                                    .setColor('YELLOW')
                                    .setTitle('Ufa, você escapou!')
                                    .setDescription('Você perdeu o dinheiro enquanto fugia.')

                                if (result === "win") {
                                    let amount = (Math.floor(Math.random() * 50000) + 1)
                                    db.add(`money_${message.author.id}`, amount)
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())

                                    if (amount > 40000) {
                                        const win = new Discord.MessageEmbed()
                                            .setColor('GREEN')
                                            .setTitle('CARGA VALIOSA!!!')
                                            .setDescription(`Com o roubo dos correios, você obteve ${amount}<:StarPoint:766794021128765469>MPoints`)

                                        return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(win))
                                    }
                                    if (amount < 40000) {
                                        const win = new Discord.MessageEmbed()
                                            .setColor('GREEN')
                                            .setTitle('O roubo foi um sucesso!')
                                            .setDescription(`Com o roubo do cartório, você obteve ${amount}<:StarPoint:766794021128765469>MPoints`)
                                        return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(win))
                                    }
                                } else if (result === "fugiu") {
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())
                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugindo)).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugiu))
                                } else if (result === "lose") {
                                    let amount = (Math.floor(Math.random() * 4000) + 1)
                                    db.subtract(`money_${message.author.id}`, amount)
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())

                                    const lose = new Discord.MessageEmbed()
                                        .setColor('#FF0000')
                                        .setTitle('🚨 Preso!')
                                        .setDescription(`Você foi preso e perdeu ${amount}<:StarPoint:766794021128765469>MPoints`)

                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugindo)).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, lose))
                                }
                            }
                            if (reaction.emoji.name === '🔵') { // 6
                                msg.delete()

                                var winlose = ['win', 'lose', 'lose', 'win', 'fugiu']
                                var result = winlose[Math.floor(Math.random() * winlose.length)]

                                const embedcrime = new Discord.MessageEmbed()
                                    .setColor('#575353')
                                    .setDescription('🥷 Roubando a joaleira...')

                                const fugindo = new Discord.MessageEmbed()
                                    .setColor('RED')
                                    .setTitle('🚔 Haa nããão! A policia!!!')
                                    .setDescription('🏃 Fugindo...')

                                const fugiu = new Discord.MessageEmbed()
                                    .setColor('YELLOW')
                                    .setTitle('Ufa, você escapou!')
                                    .setDescription('Você perdeu o dinheiro enquanto fugia.')

                                if (result === "win") {
                                    let amount = (Math.floor(Math.random() * 9000) + 1)
                                    db.add(`money_${message.author.id}`, amount)
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())

                                    const win = new Discord.MessageEmbed()
                                        .setColor('GREEN')
                                        .setTitle('O roubo foi um sucesso!')
                                        .setDescription(`Com o roubo da joaleria, você obteve ${amount}<:StarPoint:766794021128765469>MPoints`)

                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(win))
                                } else if (result === "fugiu") {
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())
                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugindo)).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugiu))
                                } else if (result === "lose") {
                                    let amount = (Math.floor(Math.random() * 6000) + 1)
                                    db.subtract(`money_${message.author.id}`, amount)
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())

                                    const lose = new Discord.MessageEmbed()
                                        .setColor('#FF0000')
                                        .setTitle('🚨 Preso!')
                                        .setDescription(`Você foi preso e perdeu ${amount}<:StarPoint:766794021128765469>MPoints`)

                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugindo)).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, lose))
                                }
                            }
                            if (reaction.emoji.name === '🔴') { // 7
                                msg.delete()

                                var winlose = ['win', 'lose', 'lose', 'win', 'fugiu', 'fugiu']
                                var result = winlose[Math.floor(Math.random() * winlose.length)]

                                const embedcrime = new Discord.MessageEmbed()
                                    .setColor('#575353')
                                    .setDescription('🥷 Roubando o shopping...')

                                const fugindo = new Discord.MessageEmbed()
                                    .setColor('RED')
                                    .setTitle('🚔 Haa nããão! A policia!!!')
                                    .setDescription('🏃 Fugindo...')

                                const fugiu = new Discord.MessageEmbed()
                                    .setColor('YELLOW')
                                    .setTitle('Ufa, você escapou!')
                                    .setDescription('Você perdeu o dinheiro enquanto fugia.')

                                if (result === "win") {
                                    let amount = (Math.floor(Math.random() * 40000) + 1)
                                    db.add(`money_${message.author.id}`, amount)
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())

                                    const win = new Discord.MessageEmbed()
                                        .setColor('GREEN')
                                        .setTitle('O roubo foi um sucesso!')
                                        .setDescription(`Com o roubo do shopping, você obteve ${amount}<:StarPoint:766794021128765469>MPoints`)

                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(win))
                                } else if (result === "fugiu") {
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())
                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugindo)).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugiu))
                                } else if (result === "lose") {
                                    let amount = (Math.floor(Math.random() * 6000) + 1)
                                    db.subtract(`money_${message.author.id}`, amount)
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())

                                    const lose = new Discord.MessageEmbed()
                                        .setColor('#FF0000')
                                        .setTitle('🚨 Preso!')
                                        .setDescription(`Você foi preso e perdeu ${amount}<:StarPoint:766794021128765469>MPoints`)

                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugindo)).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, lose))
                                }
                            }
                            if (reaction.emoji.name === '⚫') { // 8
                                msg.delete()

                                var winlose = ['win', 'lose', 'fugiu']
                                var result = winlose[Math.floor(Math.random() * winlose.length)]

                                const embedcrime = new Discord.MessageEmbed()
                                    .setColor('#575353')
                                    .setDescription('🥷 Roubando a fabrica...')

                                const fugindo = new Discord.MessageEmbed()
                                    .setColor('RED')
                                    .setTitle('🚔 Haa nããão! A policia!!!')
                                    .setDescription('🏃 Fugindo...')

                                const fugiu = new Discord.MessageEmbed()
                                    .setColor('YELLOW')
                                    .setTitle('Ufa, você escapou!')
                                    .setDescription('Você perdeu o dinheiro enquanto fugia.')

                                if (result === "win") {
                                    let amount = (Math.floor(Math.random() * 20000) + 1)
                                    db.add(`money_${message.author.id}`, amount)
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())

                                    const win = new Discord.MessageEmbed()
                                        .setColor('GREEN')
                                        .setTitle('O roubo foi um sucesso!')
                                        .setDescription(`Com o roubo da fabrica, você obteve ${amount}<:StarPoint:766794021128765469>MPoints`)

                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(win))
                                } else if (result === "fugiu") {
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())
                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugindo)).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugiu))
                                } else if (result === "lose") {
                                    let amount = (Math.floor(Math.random() * 10000) + 1)
                                    db.subtract(`money_${message.author.id}`, amount)
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())

                                    const lose = new Discord.MessageEmbed()
                                        .setColor('#FF0000')
                                        .setTitle('🚨 Preso!')
                                        .setDescription(`Você foi preso e perdeu ${amount}<:StarPoint:766794021128765469>MPoints`)

                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugindo)).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, lose))
                                }
                            }
                            if (reaction.emoji.name === '⚪') { // 9
                                msg.delete()

                                var winlose = ['win', 'lose', 'fugiu', 'win']
                                var result = winlose[Math.floor(Math.random() * winlose.length)]

                                const embedcrime = new Discord.MessageEmbed()
                                    .setColor('#575353')
                                    .setDescription('🥷 Roubando o motel...')

                                const fugindo = new Discord.MessageEmbed()
                                    .setColor('RED')
                                    .setTitle('🚔 Haa nããão! A policia!!!')
                                    .setDescription('🏃 Fugindo...')

                                const fugiu = new Discord.MessageEmbed()
                                    .setColor('YELLOW')
                                    .setTitle('Ufa, você escapou!')
                                    .setDescription('Você perdeu o dinheiro enquanto fugia.')

                                if (result === "win") {
                                    let amount = (Math.floor(Math.random() * 10000) + 1)
                                    db.add(`money_${message.author.id}`, amount)
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())

                                    const win = new Discord.MessageEmbed()
                                        .setColor('GREEN')
                                        .setTitle('O roubo foi um sucesso!')
                                        .setDescription(`Com o roubo do motel, você obteve ${amount}<:StarPoint:766794021128765469>MPoints`)

                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(win))
                                } else if (result === "fugiu") {
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())
                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugindo)).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugiu))
                                } else if (result === "lose") {
                                    let amount = (Math.floor(Math.random() * 30000) + 1)
                                    db.subtract(`money_${message.author.id}`, amount)
                                    db.set(`crimetimeout_${message.author.id}`, Date.now())

                                    const lose = new Discord.MessageEmbed()
                                        .setColor('#FF0000')
                                        .setTitle('🚨 Preso!')
                                        .setDescription(`Você foi preso e perdeu ${amount}<:StarPoint:766794021128765469>MPoints`)

                                    return message.channel.send(embedcrime).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, fugindo)).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(`${message.author}`, lose))
                                }
                            }
                        })
                    })
                }
                if (reaction.emoji.name === '❌') { // Não
                    msg.delete()
                    msg.channel.send("Roubo cancelado.").then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
                }
            })
        })
    }
}