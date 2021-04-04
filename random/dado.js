const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    message.delete()

    var numb = ['1', '2', '3', '4', '5', '6']
    var rand = numb[Math.floor(Math.random() * numb.length)]

    const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('<:dado:827721735968915506> Rolando os dados...')

    const dados = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('<:dado:827721735968915506> `' + rand + '`')
    return message.channel.send(embed).then(msg => msg.delete({ timeout: 2500 })).then(msg => message.channel.send(dados))
}