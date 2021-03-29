const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "lockdown",
    category: "moderation",

    run: async (client, message, args) => {
        message.delete()

        const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category')

        let perms = message.member.hasPermission("ADMINISTRATOR")

        if (!perms) return message.channel.send("Este comando é muito perigoso, portanto, é privado apenas para os Administradores do servidor.").then(message => message.delete({ timeout: 5000 }))

        if (message.content === '-lockdown') return message.channel.send('`-lockdown on` Para ativar o lockdown \n`-lockdown off` Para desativar o lockdown \n \n*Fique ciente de que o cargo "@everyone" será bloqueado de mandar mensagens em todos os canais de texto do servidor.*\n \nQuando o Lockdown for desativado, **TODOS** os canais de texto será liberado para "@everyone" mandar mensagens.').then(message => message.delete({ timeout: 25000 }))

        if (args[0] === 'on') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false
                })
            })
            return message.channel.send(`${message.author} colocou o servidor em **Lockdown**!`).then(message => message.author.send('Use `-lockdown off` para tirar o servidor do estado Lockdown'))

        } else if (args[0] === 'off') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true
                })
            })
            return message.channel.send(`${message.author} desativou o Lockdown.`)
        }
    }
}