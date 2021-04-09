const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Maya - AFK System')
        .setDescription('Com o AFK System, eu avisarei as pessoas que te marcarem que você está offline.\nVocê pode deixar uma mensagem pra elas também.')
        .addFields(
            {
                name: 'AFK System - Servidor',
                value: '`' + prefix + 'afk Almoçando` Avisarei a todos que você está almoçando.'
            },
            {
                name: 'AFK System - Global',
                value: '`' + prefix + 'afk all Estudando` Avisarei em todos os servidores que você está estudando.'
            }
        )
        .setFooter('O AFK System vai ser desativado quando você mandar uma mensagem.')
    return message.channel.send(`${message.author}`, embed)
}