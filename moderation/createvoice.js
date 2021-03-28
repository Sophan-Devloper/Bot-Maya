const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = (client, message, args) => {
    message.delete()

    if (!message.member.hasPermission('MANAGE_CHANNELS')) {
        const perms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Manusear Canais')
        return message.channel.send(perms).then(msg => msg.delete({ timeout: 5000 })).catch(err => {return})
    }

    if (!args[0]) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const noargs = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Use o formato correto')
            .setDescription('`' + prefix + 'createvoice NomeDoCanal`')
        return message.channel.send(noargs).then(msg => msg.delete({ timeout: 9000 })).catch(err => {return})
    }

    message.guild.channels.create(args.slice(0).join(" "), { type: 'voice' })

    const sucess = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Canal criado com sucesso.')
    message.channel.send(sucess).then(msg => msg.delete({ timeout: 10000 })).catch(err => {return})
}