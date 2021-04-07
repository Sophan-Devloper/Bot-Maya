const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    var prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = '-' }

    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
        message.delete()
        const noperm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Manusear Canais')
        return message.channel.send(`${message.author}`, noperm).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    var canal = message.mentions.channels.first()
    args[0] = canal
    if (!canal) {
        const nocanal = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'send #canal Sua mensagem`')
        return message.channel.send(nocanal)
    }

    if (!args[1]) {
        const noargs = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'send #canal Sua mensagem`')
        return message.channel.send(noargs)
    }

    var mensagem = args.slice(1).join(" ")
    if (!mensagem) {
        const nomensagem = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'send #canal Sua mensagem`')
        return message.channel.send(nomensagem)
    }

    canal.send(mensagem + `\n \n*${message.author.username}*`)
    message.channel.send('Enviado com sucesso.')
}