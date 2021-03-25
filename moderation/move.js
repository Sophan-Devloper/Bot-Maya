const Discord = require('discord.js')

module.exports = {
    name: "move",
    category: "moderation",

    run: async (client, message, args) => {

        if (!message.member.permissions.has("MANAGE_CHANNELS"))
            return message.channel.send('Você não tem poder suficiente para usar este cargo.').then(msg => msg.delete({ timeout: 4000 }))

        const member = message.mentions.members.first()
        if (!member)
            return message.channel.send(`${message.author.username},` + " mencione um membro pra mover.\n \n`move @user`").then(msg => msg.delete({ timeout: 5000 }))

        if (member.permissions.has("MANAGE_CHANNELS"))
            return message.channel.send(`${member} é muito forte, não consigo mover.`).then(msg => msg.delete({ timeout: 4000 }))

        if (!member.voice.channel)
            return message.channel.send(`${member} não está em nenhum canal de voz.`).then(msg => msg.delete({ timeout: 4000 }))

        if (!message.member.voice.channel)
            return message.channel.send('Hey, entra em um canal de voz.').then(msg => msg.delete({ timeout: 4000 }))

        member.voice.setChannel(message.member.voice.channel)
        message.react('✅')
        message.channel.send('Feito.')
    }
}