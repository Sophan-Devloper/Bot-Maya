const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: "logchannel",
    category: "seta um canal log",
    description: "escolher canal log no server",
    run: async (client, message, args) => {
        message.delete()

        let permss = message.member.hasPermission("ADMINISTRATOR")
        if (!permss) {
            const noperm = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Permissão Necessária: Administrador')

            return message.channel.send(noperm).then(msg => msg.delete({ timeout: 7000 }))
        }

        if (!args[0]) {
            let prefix = db.get(`prefix_${message.guild.id}`)
            if (prefix === null) prefix = "-"

            const noargs = new Discord.MessageEmbed()
                .setColor('#FF0000') // red
                .setTitle('' + prefix + 'setlogchannel #CanalLog')
            return message.channel.send(noargs).then(msg => msg.delete({ timeout: 5000 }))
        }

        if (args[0] === 'off') {
            let prefix = db.get(`prefix_${message.guild.id}`)
            if (prefix === null) prefix = "-"

            const semcanal = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('O sistema log não pode ser desativado.')
                .setDescription('Caso deseje trocar de canal, use o comando novamente.\n`' + prefix + 'setlogchannel #CanalLog`')

            return message.channel.send(semcanal).then(msg => msg.delete({ timeout: 5000 }))

        }

        var channel = message.mentions.channels.first()
        if (!channel) {
            let prefix = db.get(`prefix_${message.guild.id}`)
            if (prefix === null) prefix = "-"
            const nochannel = new Discord.MessageEmbed()
                .setColor('#FF0000') // red
                .setTitle('' + prefix + 'setlogchannel #Canallogs')

            return message.channel.send(nochannel).then(msg => msg.delete({ timeout: 10000 }))
        }

        var atual = db.get(`logchannel_${message.guild.id}`)
        if (channel.id === atual) {

            const iqual = new Discord.MessageEmbed()
                .setColor('#FF0000') // Red
                .setTitle('Este canal já foi definido como Canal Log!')

            return message.channel.send(iqual)
        } else if (args[0] !== atual) {
            db.set(`logchannel_${message.guild.id}`, channel.id)

            const sucess = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle('Log System Ativado!')
                .setDescription('`Canal escolhido: ' + channel.name + '`')

            return message.channel.send(sucess)
        }
    }
}