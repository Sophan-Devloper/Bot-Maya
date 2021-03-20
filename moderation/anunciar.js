const Discord = require('discord.js')

module.exports = {
    run: (client, message, args) => {
        message.delete()

        if (!message.member.hasPermission("ADMINISTRATOR"))
            return message.channel.send("Você não pode me usar para isso, vai com calma.").then(msg => msg.delete({ timeout: 5000 }))

        let splitarg = args.join(" ").split(" / ")
        let titulo = splitarg[0]
        let anuncio = splitarg[1]

        if (!titulo)
            return message.channel.send("Tenta usar esse formato aqui\n\n`-anunciar seu titulo / seu anuncio`").then(msg => msg.delete({ timeout: 10000 }))

        if (!anuncio)
            return message.channel.send("Tenta usar esse formato aqui\n\n`-anunciar seu titulo / seu anuncio`").then(msg => msg.delete({ timeout: 10000 }))

        let anunciopronto = new Discord.MessageEmbed()
            .setColor("#DCDDC")
            .addFields(
                {
                    name: titulo,
                    value: `\n⠀\n${anuncio}`
                }
            )
        message.channel.send(anunciopronto)
    }
}