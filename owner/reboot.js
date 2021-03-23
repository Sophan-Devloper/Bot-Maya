const db = require("quick.db")
const discord = require("discord.js")

module.exports = {
    run: async (client, message, args) => {

        if (!message.author.id === "451619591320371213")
            return message.channel.send('⚠️ Este comando é importe, deixe que apenas meu criador use ele, tá bom?')

        message.channel.send('Rebooting...').then(msg => msg.delete({ timeout: 6000 })).then(m => m.channel.send('Reboot completado com sucesso.\nErros encontrado: 0')).then(m => m.delete({ timeout: 5000 }))
    }
}