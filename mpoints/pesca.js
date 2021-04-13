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

        var vara = db.get(`itens_${message.author.id}`, "Vara de pesca")
        if (vara === null) {
            const novara = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('❌ Comando bloqueado')
                .setDescription(`${message.author}, você precisa de uma vara de pesca.`)
            return message.channel.send(novara)
        }

        if (!db.get(`itens_${message.author.id}`, "Vara de pesca")) {
            const novara = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('❌ Comando bloqueado')
                .setDescription(`${message.author}, você precisa de uma vara de pesca.`)
            return message.channel.send(novara)
        }

        let iscas = db.get(`iscas_${message.author.id}`)
        if (iscas === null) {
            const novara = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('❌ Comando bloqueado')
                .setDescription(`${message.author}, você não possui iscas para pescar.`)
            return message.channel.send(novara)
        }

        if (!db.get(`iscas_${message.author.id}`)) { iscas = 0 }

        if (iscas == 0) {
            const novara = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('❌ Comando bloqueado')
                .setDescription(`${message.author}, você não possui iscas para pescar.`)
            return message.channel.send(novara)
        }

        if (iscas > 0) {
            var num = ['win', 'lose', 'lose', 'lose', 'lose', 'lose', 'lose', 'lose', 'lose', 'lose']
            var rand = num[Math.floor(Math.random() * num.length)]
            var din = Math.floor(Math.random() * 50000) + 1

            if (rand === 'win') {
                if (!db.get(`itens_${user.id}`, "Faca")) {
                    var a = ['win', 'lose', 'lose', 'lose']
                    var randa = a[Math.floor(Math.random() * a.length)]
                    if (randa === "win") {
                        var peixes = Math.floor(Math.random() * 20) + 1
                        var iiscas = Math.floor(Math.random() * 50) + 1
                        db.subtract(`iscas_${message.author.id}`, 1)
                        db.add(`iscas_${message.author.id}`, iiscas)
                        db.add(`peixes_${message.author.id}`, peixes)
                        db.add(`itens_${user.id}`, "Faca")
                        db.add(`money_${message.author.id}`, din)
                        db.set(`pescatimeout_${message.author.id}`, Date.now())
                        const pescaembed = new Discord.MessageEmbed()
                            .setColor('GREEN')
                            .setTitle('🎣 Você pescou com sucesso!')
                            .addField('<:estrelinha:831161441847345202> <:estrelinha:831161441847345202> Você achou um baú do tesouro! <:estrelinha:831161441847345202> <:estrelinha:831161441847345202>', `Você obteve: ${din}<:estrelinha:831161441847345202>MPoints, ${peixes} 🐟 peixes e ${iiscas} 🪱 Iscas `)
                        return message.channel.send(`${message.author}`, pescaembed)
                    }
                }
                var peixes = Math.floor(Math.random() * 20) + 1
                var iiscas = Math.floor(Math.random() * 50) + 1
                db.subtract(`iscas_${message.author.id}`, 1)
                db.add(`iscas_${message.author.id}`, iiscas)
                db.add(`peixes_${message.author.id}`, peixes)
                db.add(`money_${message.author.id}`, din)
                db.set(`pescatimeout_${message.author.id}`, Date.now())
                const pescaembed = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('🎣 Você pescou com sucesso!')
                    .addField('<:estrelinha:831161441847345202> <:estrelinha:831161441847345202> Você achou um baú do tesouro! <:estrelinha:831161441847345202> <:estrelinha:831161441847345202>', `Você obteve: ${din}<:estrelinha:831161441847345202>MPoints, ${peixes} 🐟 peixes e ${iiscas} 🪱 Iscas `)
                return message.channel.send(`${message.author}`, pescaembed)
            }

            if (rand === 'lose') {
                var peixes = Math.floor(Math.random() * 5) + 1
                db.subtract(`iscas_${message.author.id}`, 1)
                db.add(`peixes_${message.author.id}`, peixes)
                db.set(`pescatimeout_${message.author.id}`, Date.now())
                const pescaembed = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('🎣 Você pescou com sucesso!')
                    .setDescription(`Com a pesca, você obteve ${peixes} peixes.`)
                return message.channel.send(pescaembed)
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