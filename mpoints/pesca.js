const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')

exports.run = async (client, message, args) => {

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
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) { prefix = "-" }

        var canal = db.get(`pescachannel_${message.guild.id}`)
        if (canal === null) {
            const nocanal = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Canal de pesca não definido')
                .setDescription('Peça para algúm administrador digitar o comando para habilidade o Canal de Pesca')
                .addField('Comando de Ativação', '`' + prefix + 'setpescachannel #Canal`')
            return message.channel.send(nocanal)
        }

        if (!db.get(`pescachannel_${message.guild.id}`)) {
            const notcanal = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Canal de pesca excluido.')
                .setDescription('Parece que o Canal de Pesca foi desativado ou excluido.')
                .addField('Comando de Ativação', '`' + prefix + 'setpescachannel #Canal`')
            return message.channel.send(notcanal)
        }

        var canaloficial = message.channel.id === db.get(`pescachannel_${message.guild.id}`)
        if (!canaloficial) {
            message.delete()
            return message.channel.send(`Este não é o canal de pesca. Chega mais, é aqui: ${client.channels.cache.get(canal)}`)
        }

        var vara = db.get(`vara_${message.author.id}`)
        if (vara === null) {
            const novara = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('❌ Comando bloqueado')
                .setDescription(`${message.author}, você precisa de uma vara de pesca. Compre uma na ${prefix}loja`)
            return message.channel.send(novara)
        }

        if (!db.get(`vara_${message.author.id}`)) {
            const novara = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('❌ Comando bloqueado')
                .setDescription(`${message.author}, você precisa de uma vara de pesca. Compre uma na ${prefix}loja`)
            await message.channel.send(novara)
        }

        let iscas = db.get(`iscas_${message.author.id}`)
        if (iscas === null) {
            const novara = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('❌ Comando bloqueado')
                .setDescription(`${message.author}, você não possui iscas para pescar. Compre algumas na ${prefix}loja`)
            return message.channel.send(novara)
        }

        if (!db.get(`iscas_${message.author.id}`)) { iscas = 0 }

        if (iscas == 0) {
            const novara = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('❌ Comando bloqueado')
                .setDescription(`${message.author}, você não possui iscas para pescar. Compre algumas na ${prefix}loja`)
            return message.channel.send(novara)
        }

        if (iscas > 0) {
            var num = ['win', 'lose', 'lose', 'lose', 'lose', 'lose', 'lose', 'lose', 'lose', 'lose']
            var rand = num[Math.floor(Math.random() * num.length)]
            var din = Math.floor(Math.random() * 100) + 1

            var a = ['wiin', 'loose', 'loose', 'loose', 'loose', 'loose', 'loli', 'nololi', 'faca', 'nololi', 'nololi']
            var randa = a[Math.floor(Math.random() * a.length)]

            if (rand === 'win') {

                if (randa === 'faca') {
                    var faca = db.get(`faca_${message.author.id}`)
                    if (faca === null) {
                        var dinh = Math.floor(Math.random() * 500) + 1
                        var peixes = Math.floor(Math.random() * 20) + 1
                        var iiscas = Math.floor(Math.random() * 5) + 1
                        var camarao = Math.floor(Math.random() * 3) + 1
                        db.subtract(`iscas_${message.author.id}`, 1)
                        db.add(`iscas_${message.author.id}`, iiscas)
                        db.add(`peixes_${message.author.id}`, peixes)
                        db.add(`camarao_${message.author.id}`, camarao)
                        db.add(`money_${message.author.id}`, dinh)
                        db.set(`faca_${message.author.id}`, "Faca")
                        db.set(`pescatimeout_${message.author.id}`, Date.now())
                        const pescaembed = new Discord.MessageEmbed()
                            .setColor('GREEN')
                            .setTitle('⭐ Você adquiriu um item de Classe Especial! DDD')
                            .addField('Classe Especial: 🔪 Faca', `Você obteve: ${dinh}<:estrelinha:831161441847345202>MPoints, ${peixes} 🐟 peixes, ${iiscas} 🪱 Iscas e ${camarao} 🍤 Camarões`)
                        return message.channel.send(`${message.author}`, pescaembed)
                    } else if (!db.get(`faca_${message.author.id}`)) {
                        var dinh = Math.floor(Math.random() * 500) + 1
                        var peixes = Math.floor(Math.random() * 20) + 1
                        var iiscas = Math.floor(Math.random() * 5) + 1
                        var camarao = Math.floor(Math.random() * 3) + 1
                        db.subtract(`iscas_${message.author.id}`, 1)
                        db.add(`iscas_${message.author.id}`, iiscas)
                        db.add(`peixes_${message.author.id}`, peixes)
                        db.add(`camarao_${message.author.id}`, camarao)
                        db.add(`money_${message.author.id}`, dinh)
                        db.set(`faca_${message.author.id}`, "Faca")
                        db.set(`pescatimeout_${message.author.id}`, Date.now())
                        const pescaembed = new Discord.MessageEmbed()
                            .setColor('GREEN')
                            .setTitle('⭐ Você adquiriu um item de Classe Especial! SSS')
                            .addField('Classe Especial: 🔪 Faca', `Você obteve: ${dinh}<:estrelinha:831161441847345202>MPoints, ${peixes} 🐟 peixes, ${iiscas} 🪱 Iscas e ${camarao} 🍤 Camarões`)
                        return message.channel.send(`${message.author}`, pescaembed)
                    } else {

                        var dinh = Math.floor(Math.random() * 300) + 1
                        var peixes = Math.floor(Math.random() * 10) + 1
                        var iiscas = Math.floor(Math.random() * 5) + 1
                        var camarao = Math.floor(Math.random() * 3) + 1
                        db.subtract(`iscas_${message.author.id}`, 1)
                        db.add(`iscas_${message.author.id}`, iiscas)
                        db.add(`peixes_${message.author.id}`, peixes)
                        db.add(`camarao_${message.author.id}`, camarao)
                        db.add(`money_${message.author.id}`, dinh)
                        db.set(`pescatimeout_${message.author.id}`, Date.now())
                        const pescaembed = new Discord.MessageEmbed()
                            .setColor('GREEN')
                            .setTitle('🎣 Você pescou com sucesso! XXX')
                            .addField('<:estrelinha:831161441847345202> <:estrelinha:831161441847345202> Você achou um baú do tesouro! <:estrelinha:831161441847345202> <:estrelinha:831161441847345202>', `Você obteve: ${dinh}<:estrelinha:831161441847345202>MPoints, ${peixes} 🐟 peixes, ${iiscas} 🪱 Iscas e ${camarao} 🍤 Camarões`)
                        return message.channel.send(`${message.author}`, pescaembed)

                    }
                }

                if (randa === "loose") {

                    var peixes = Math.floor(Math.random() * 10) + 1
                    var iiscas = Math.floor(Math.random() * 3) + 1
                    var camarao = Math.floor(Math.random() * 3) + 1
                    db.subtract(`iscas_${message.author.id}`, 1)
                    db.add(`iscas_${message.author.id}`, iiscas)
                    db.add(`peixes_${message.author.id}`, peixes)
                    db.add(`camarao_${message.author.id}`, camarao)
                    db.add(`money_${message.author.id}`, din)
                    db.set(`pescatimeout_${message.author.id}`, Date.now())
                    const pescaembed = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setTitle('🎣 Você pescou com sucesso')
                        .addField('<:estrelinha:831161441847345202> <:estrelinha:831161441847345202> Você achou um baú do tesouro! <:estrelinha:831161441847345202> <:estrelinha:831161441847345202>', `Você obteve: ${din}<:estrelinha:831161441847345202>MPoints, ${peixes} 🐟 peixes, ${iiscas} 🪱 Iscas e ${camarao} 🍤 Camarões `)
                    return message.channel.send(`${message.author}`, pescaembed)
                }

                var loli = db.get(`loli_${message.author.id}`)
                if (randa === "loli") {
                    if (loli === null) {
                        db.set(`loli_${message.author.id}`, "Loli")
                        const pescaembed = new Discord.MessageEmbed()
                            .setColor('GREEN')
                            .setTitle('⭐ Você adquiriu um item de Clase Especial')
                            .setDescription(`**Loli:** <:Loli:831571527744356422> Oooi ${message.author}, tudo bem com você? De agora em diante eu vou ser a sua parceira :heart:`)
                        return message.channel.send(`${message.author}`, pescaembed)
                    } else if (!db.get(`loli_${message.author.id}`)) {
                        db.set(`loli_${message.author.id}`, "Loli")
                        const pescaembed = new Discord.MessageEmbed()
                            .setColor('GREEN')
                            .setTitle('⭐ Você adquiriu um item de Clase Especial 1')
                            .setDescription(`**Loli:** <:Loli:831571527744356422> Oooi ${message.author}, tudo bem com você? De agora em diante eu vou ser a sua parceira :heart:`)
                        return message.channel.send(`${message.author}`, pescaembed)
                    } else {
                        var frase = ['Oii, sabia que eu gosto de passear enquanto vejo os passarinhos?', 'Sabia que um dia eu cai da cama e machuquei meu braço?', 'Ei, eu tenho medo de pessoas más.']
                        var result = frase[Math.floor(Math.random() * frase.length)]
                        const looli = new Discord.MessageEmbed()
                            .setColor('BLUE')
                            .setTitle('Uma garotinha atrapalhou sua pesca.')
                            .setDescription(`<:Loli:831571527744356422> ${result}`)
                        return message.channel.send(`${message.author}`, looli)
                    }
                }

                if (randa === "nololi") {
                    var frase = ['Oii, sabia que eu gosto de passear enquanto vejo os passarinhos?', 'Sabia que um dia eu cai da cama e machuquei meu braço?', 'Ei, eu tenho medo de pessoas más.']
                    var result = frase[Math.floor(Math.random() * frase.length)]
                    const looli = new Discord.MessageEmbed()
                        .setColor('BLUE')
                        .setTitle('Uma garotinha atrapalhou sua pesca.')
                        .setDescription(`<:Loli:831571527744356422> ${result}`)
                    return message.channel.send(`${message.author}`, looli)
                }
            }

            if (rand === 'lose') {
                var peixes = Math.floor(Math.random() * 3) + 1
                db.subtract(`iscas_${message.author.id}`, 1)
                db.add(`peixes_${message.author.id}`, peixes)
                db.set(`pescatimeout_${message.author.id}`, Date.now())
                const pescaembed = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('🎣 Você pescou com sucesso!')
                    .setDescription(`Com a pesca, você obteve ${peixes} peixes.`)
                return message.channel.send(`${message.author}`, pescaembed)
            }
        } else {
            const novara = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('❌ Comando bloqueado')
                .setDescription(`${message.author}, você não tem iscas suficiente.`)
            return message.channel.send(novara)
        }
    }
}