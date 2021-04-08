const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
     

    if (!message.member.hasPermission('MANAGE_CHANNELS')) {
        const perms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Manusear Canais')
        return message.channel.send(perms).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    if (args[0]) {
        const noargs = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Utilize apenas `-clonechannel` no canal em que deseja clonar.')
        return message.channel.send(noargs)
    }

    var NomeDoCanal = message.channel.name
    message.guild.channels.create(NomeDoCanal, { type: 'text' })

    const sucess = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Canal criado com sucesso.')
    message.channel.send(sucess).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
}