const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

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

    if (!args[0]) {
        const noargs = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Por favor, siga o formato correto')
            .setDescription(`Use o comando abaixo para reportar algo para equipe da ${message.guild.name}. \nO **@user** é opcional, use se quiser reportar algum membro.`)
            .addField('⠀', '`' + prefix + 'report @user O motivo da sua denúncia`')
        return message.channel.send(noargs)
    }

    if (!user) {
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
                    value: `Nenhum membro foi reportado`,
                    inline: true
                },
                {
                    name: 'Razão do Reporte',
                    value: args.join(" ")
                }
            )
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        client.channels.cache.get(channel).send(embed1)
        const ok = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('O report foi enviado com sucesso!')
        message.channel.send(ok)
    }

    if (user) {
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
                    value: `${user}`,
                    inline: true
                },
                {
                    name: 'Razão do Reporte',
                    value: args.slice(1).join(" ")
                }
            )
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        client.channels.cache.get(channel).send(embed1)
        const ok = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('O report foi enviado com sucesso!')
        message.channel.send(ok)
    }
}