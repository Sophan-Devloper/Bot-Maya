const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    const content = args.join(" ")
    if (!content) {

        db.set(`afk_${message.author.id}+${message.guild.id}`, 'Nenhuma razão especificada.')
        const embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .addFields(
                {
                    name: 'Mensagem',
                    value: 'Nenhuma razão especificada.'
                }
            )
            .setAuthor(message.author.tag + ' ativou o modo afk', message.author.displayAvatarURL({ dynamic: true }))
            .setFooter('O modo afk será desativado quando você mandar uma mensagem')
        return message.channel.send(embed)
    }

    if (content) {
        db.set(`afk_${message.author.id}+${message.guild.id}`, content)
        const embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .addFields(
                {
                    name: 'Mensagem',
                    value: content
                }
            )
            .setAuthor(message.author.tag + ' ativou o modo afk', message.author.displayAvatarURL({ dynamic: true }))
            .setFooter('O modo afk será desativado quando você mandar uma mensagem')
        return message.channel.send(embed)
    }
}