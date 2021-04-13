const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        const adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
        return message.channel.send(adm)
    }

    var list = [
        'https://imgur.com/B8gX2UL.gif',
        'https://imgur.com/2etwv4a.gif',
        'https://imgur.com/NcHlgkV.gif',
        'https://imgur.com/xfvwpMk.gif',
        'https://imgur.com/CIa9Gru.gif',
        'https://imgur.com/iDzsPm8.gif',
        'https://imgur.com/zfvczuE.gif',
        'https://imgur.com/xDeE5fc.gif'
    ]

    var gif = list[Math.floor(Math.random() * list.length)]

    const ClapEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setImage(gif)
    return message.channel.send(ClapEmbed)
}