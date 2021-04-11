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
            .setColor('#FF0000')
            .setTitle('Use o formato correto')
            .setDescription('`' + prefix + 'createchannel NomeDoCanal`')
        return message.channel.send(noargs)
    }

    message.guild.channels.create(args.slice(0).join(" "), { type: 'text' })

    const sucess = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Canal criado com sucesso.')
    return message.channel.send(sucess)
}