const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    var prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = '-' }

    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
        const adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso da permissão "Manusear Canais" para utilizar esta função.')
        return message.inlineReply(adm)
    }

    if (!message.member.hasPermission('MANAGE_CHANNELS')) {
        const perms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Manusear Canais')
        return message.inlineReply(perms)
    }

    var canal = message.mentions.channels.first()
    args[0] = canal
    if (!canal) {
        const nocanal = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'send #canal Sua mensagem`')
        return message.inlineReply(nocanal)
    }

    if (!args[1]) {
        const noargs = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'send #canal Sua mensagem`')
        return message.inlineReply(noargs)
    }

    var mensagem = args.slice(1).join(" ")
    if (!mensagem) {
        const nomensagem = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'send #canal Sua mensagem`')
        return message.inlineReply(nomensagem)
    }

    canal.send(mensagem + `\n \n*${message.author.username}*`)
    message.inlineReply('Enviado com sucesso.')
}