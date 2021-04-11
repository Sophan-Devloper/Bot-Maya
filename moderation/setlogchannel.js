const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
        const adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso da permissão "Manusear Canais" para utilizar esta função.')
        return message.channel.send(adm)
    }

    if (!message.member.hasPermission('MANAGE_CHANNELS')) {
        const perms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Manusear Canais')
        return message.channel.send(perms)
    }

    if (!args[0]) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const noargs = new Discord.MessageEmbed()
            .setColor('#FF0000') // red
            .setTitle('`' + prefix + 'setlogchannel #CanalLog`')
        return message.channel.send(noargs)
    }

    if (args[0] === 'off') {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const semcanal = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('O logchannel não pode ser desativado.')
            .setDescription('Caso queira trocar de canal, use o comando \n`' + prefix + 'setlogchannel #CanalLog`')

        return message.channel.send(semcanal)

    }

    var channel = message.mentions.channels.first()
    if (!channel) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"
        const nochannel = new Discord.MessageEmbed()
            .setColor('#FF0000') // red
            .setTitle('' + prefix + 'setlogchannel #Canallogs')

        return message.channel.send(nochannel)
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
            .setDescription(`Canal escolhido: ${channel}`)

        return message.channel.send(sucess)
    }
}