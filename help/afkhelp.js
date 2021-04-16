const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('📢 Maya - AFK Global System')
        .setDescription('Com o AFK System, eu avisarei as pessoas que te marcarem que você está offline.\nVocê pode deixar uma mensagem pra elas também.')
        .addFields(
            {
                name: '📴 Servidor',
                value: '`' + prefix + 'afk Almoçando`\nAvisarei a todos que você está almoçando.'
            },
            {
                name: '🌎 Global',
                value: '`' + prefix + 'afk all` ou ' + '`' + prefix + 'afk global`\n' +  'Avisarei em todos os servidores que você está offline.\n \nExemplo: ' + '`' + prefix + 'afk global Estou almoçando, já volto.`'
            }
        )
        .setFooter('O AFK System será desativado quando você mandar uma mensagem.')
    return message.inlineReply(`Este é um comando novo, se houve algúm bug, use **${prefix}support**`, embed)
}