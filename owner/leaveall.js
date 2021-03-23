const db = require("quick.db")
const discord = require("discord.js")

module.exports = {
    run: async (client, message, args) => {

        if (!message.author.id === "451619591320371213")
            return message.channel.send('⚠️ Este comando é importe, deixe que apenas meu criador use ele, tá bom?')
    }
}