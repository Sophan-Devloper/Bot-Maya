const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    message.delete()

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        const adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso das permissões "Gerenciar Mensagens" e "Gerenciar Canais" para utilizar esta função.')
        return message.inlineReply(adm)
    }

    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
      const adm = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Eu preciso das permissões "Gerenciar Mensagens" e "Gerenciar Canais" para utilizar esta função.')
      return message.inlineReply(adm)
    }

    let user = message.mentions.members.first()
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    var channel = db.get(`reportchannel_${message.guild.id}`)
    if (channel === null) {
        const nochannel = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Nenhum canal de report definido.')
            .setDescription('`' + prefix + 'setreportchannel #canal`')
        return message.inlineReply(nochannel)
    }

    if (!client.channels.cache.get(channel)) {
        const nochanel = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Parece que o canal de report foi excluido.')
            .setDescription('`' + prefix + 'setreportchannel #canal`')
        return message.inlineReply(nochanel)
    }

    if (!args[0]) {
        const noargs = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Por favor, siga o formato correto')
            .setDescription(`Use o comando abaixo para reportar algo a equipe da ${message.guild.name}. \nO **@user** é opcional, use se quiser reportar algum membro.`)
            .addField('⠀', '`' + prefix + 'report @user O motivo da sua denúncia`')
        return message.inlineReply(noargs)
    }

    if (user && !args[1]) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const nop = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'report <@user> O motivo do seu report`')
        return message.inlineReply(nop)
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

        return message.channel.send (`${message.author}, o seu report foi enviado com sucesso!`)
    }

    if (user) {
        const embed1 = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle('📨 Novo Reporte Recebido')
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
        return message.channel.send (`${message.author}, o seu report foi enviado com sucesso!`)
    }
}