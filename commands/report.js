const Discord = require('discord.js')

module.exports = {
    name: "report",
    category: "moderation",
    description: "Reports a member",
    usage: "<mention, id>",
}

module.exports.run = async (client, message, args) => {
    message.delete()

    let channel = message.guild.channels.cache.find(ch => ch.name === "reports")
    let user = message.mentions.members.first()
    let avatar = message.author.displayAvatarURL({ format: 'png' })

    if (!channel)
        return message.channel.send("Por favor, peça para que um Adm crie um Canal com o nome `reports` \nCopie e cole pra eu criar um pra você \n`-createchannel reports`").then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })

    if (message.content === '-report')
        return message.channel.send("Hey, tenta fazer assim -> `-report Seu Reporte.` \nQuer reportar um membro? -> `-report @user Motivo do seu Reporte.`").then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })

    if (!user) {
        const embed = new Discord.MessageEmbed()
            .setColor("#DCDCDC")
            .setAuthor('Reporte Recebido')
            .addFields(
                {
                    name: 'Autor do Reporte',
                    value: message.author,
                    inline: true
                },
                {
                    name: 'Membro Reportado',
                    value: 'Nenhum membro foi reportado',
                    inline: true
                },
                {
                    name: 'Razão do Reporte',
                    value: args.slice(0).join(" ")
                }
            )
            .setTimestamp()
        return channel.send(embed).then(msg => message.author.send(`O seu reporte foi enviado para a moderação do *${message.guild.name}* com sucesso.`))
    } else {

        const embed1 = new Discord.MessageEmbed()
            .setColor("#DCDCDC")
            .setAuthor('Reporte Recebido')
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
        return channel.send(embed1).then(msg => message.author.send(`O seu reporte foi enviado para a moderação do *${message.guild.name}* com sucesso.`))
    }
}