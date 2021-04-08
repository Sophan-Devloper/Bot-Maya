const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
     

    var content = args.join(' ')
    if (!content) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const noargs = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'votar O que você quer que seja votado.`')

        return message.channel.send(noargs).then(msg => msg.delete({ timeout: 6000 })).catch(err => { return })
    }

    if (content) {
        const embed = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle(`Votação aberta por ${message.author.username}`)
            .setDescription(content)

        return message.channel.send(embed).then(msg => {
            msg.react('👍')
            msg.react('👎')
        })
    }
}