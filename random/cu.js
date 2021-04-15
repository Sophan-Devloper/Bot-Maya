const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')

exports.run = async (client, message, args) => {

    let timeout = 300000
    let author = await db.fetch(`cutime_${message.author.id}`)

    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author))

        return message.inlineReply(`Pelo bem do seu querido anûs, espere mais ${time.minutes}m e ${time.seconds}s`)
    } else {

        const cu = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('⚠️ Esta é uma escolha dificil')
            .setDescription(`${message.author}, o cú é algo valioso, você realmente deseja entrega-lo por dinheiro?\n \n**Faça sua escolha**`)

        await message.inlineReply(cu).then(msg => {
            msg.react('✅') // Check
            msg.react('❌') // X

            msg.awaitReactions((reaction, user) => {
                if (message.author.id !== user.id) return
                if (reaction.emoji.name === '✅') { // Sim
                    msg.delete()

                    var winlose = ['win', 'lose']
                    var result = winlose[Math.floor(Math.random() * winlose.length)]
                    var din = Math.floor(Math.random() * 400) + 1

                    if (result === "win") {
                        db.add(`money_${message.author.id}`, din)
                        db.set(`cutime_${message.author.id}`, Date.now())

                        const embed = new Discord.MessageEmbed()
                            .setColor('GREEN')
                            .setTitle('O cliente gostou!')
                            .setDescription(`${message.author}, o cliente anônimo gostou dos seus serviços e te pagou ${din}<:estrelinha:831161441847345202>MPoints`)
                        return message.inlineReply(embed)
                    }

                    if (result === "lose") {
                        db.subtract(`money_${message.author.id}`, din)
                        db.set(`cutime_${message.author.id}`, Date.now())

                        const embed = new Discord.MessageEmbed()
                            .setColor('#FF0000')
                            .setTitle('O cliente não gostou!')
                            .setDescription(`${message.author}, o cliente anônimo não gostou dos seus serviços e seu prejuizo foi de ${din}<:estrelinha:831161441847345202>MPoints`)
                        return message.inlineReply(embed)
                    }
                }

                if (reaction.emoji.name === '❌') { // MPEmbed
                    msg.delete()
                    const cancel = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setTitle('Comando cancelado com sucesso')
                    return message.inlineReply(cancel)
                }
            })
        })
    }
}