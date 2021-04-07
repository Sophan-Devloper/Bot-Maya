const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    var user = message.mentions.members.first()
    if (!user) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const nouser = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Use formato correto')
            .setDescription('`' + prefix + 'lutar @user`')
        return message.channel.send(nouser)
    }

    var list = ['win', 'lose']
    var result = list[Math.floor(Math.random() * list.length)]

    const lutando = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('⚔️ Lutando...')

    if (result === 'win') {
        const vitória = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('👑 Vitória')
            .setDescription(`Você ganhou a luta contra ${user.user.username}`)

        return message.channel.send(lutando).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(vitória))
    }

    if (result === 'lose') {
        const derrota = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('⛑️ Derrota')
            .setDescription(`Você perdeu a luta contra ${user.user.username}`)

        return message.channel.send(lutando).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(derrota))
    }
}