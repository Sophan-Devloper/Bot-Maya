const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    message.delete()

    let user = message.mentions.members.first()
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    var channel = db.get(`reportchannel_${message.guild.id}`)
    if (channel === null) {
        const nochannel = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Nenhum canal de report definido.')
            .setDescription('`' + prefix + 'setreportchannel #canal`')
        return message.channel.send(nochannel).then(msg => msg.delete({ timeout: 15000 })).catch(err => { return })
    }

    if (!db.get(`reportchannel_${message.guild.id}`)) {
        const nochanel = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Parece que o canal de report foi excluido.')
            .setDescription('`' + prefix + 'setreportchannel #canal`')
        return message.channel.send(nochanel).then(msg => msg.delete({ timeout: 15000 })).catch(err => { return })
    }

    if (!user) user = 'Nenhum membro foi reportado'

    const embed1 = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle('Novo Reporte Recebido')
        .addFields(
            {
                name: 'Autor do Reporte',
                value: message.author,
                inline: true
            },
            {
                name: 'Membro Reportado',
                value: user,
                inline: true
            },
            {
                name: 'Razão do Reporte',
                value: args.slice(1).join(" ")
            }
        )
        .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
    client.channels.cache.get(channel).send(joinembed).send(embed1).then(msg => message.author.send(`O seu reporte foi enviado para a moderação do *${message.guild.name}* com sucesso.`))
}
