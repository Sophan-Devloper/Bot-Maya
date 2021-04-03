const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    var user = message.mentions.members.first()
    if (!user) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const nouser = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'nota @user`')
        return message.channel.send(nouser).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    var num = ['5', '6', '7', '8', '9', '5', '6', '7', '8', '9', '10']
    var nota = num[Math.floor(Math.random() * num.length)]

    if (nota === '5') {
        const embed1 = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setDescription(`🤔 Huum... Minha nota para ${user} é 5. Na escola pública passa em...`)
        return message.channel.send(embed1)
    }

    if (nota === '6') {
        const embed1 = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setDescription(`🤔 Huum... Minha nota para ${user} é 6. Não é Itachi mais me deixou em um genjutsu.`)
        return message.channel.send(embed1)
    }

    if (nota === '7') {
        const embed1 = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setDescription(`🤔 Huum... Minha nota para ${user} é 7. Não é Neji mas atingiu meu ponto fraco.`)
        return message.channel.send(embed1)
    }

    if (nota === '8') {
        const embed1 = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setDescription(`🤔 Huum... Minha nota para ${user} é 8. Se fosse um avião, me levava as alturas.`)
        return message.channel.send(embed1)
    }

    if (nota === '9') {
        const embed1 = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setDescription(`🤔 Huum... Minha nota para ${user} é 9. Tô fugindo de problemas mas se o problema for ${user}, eu vou até buscar.`)
        return message.channel.send(embed1)
    }

    if (nota === '10') {
        const embed1 = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setDescription(`🤔 Huum... Minha nota para ${user} é 10. Vou juntar as esferas do dragão e pedir você.`)
        return message.channel.send(embed1)
    }
}