const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const commands = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Bloqueie canais para não usarem meus comandos')
        .setDescription('`' + prefix + 'blockchannel #canal` Bloqueie canais\n' + '`' + prefix + 'unblockchannel #canal` Desbloqueie canais')
    return message.channel.send(commands)
}