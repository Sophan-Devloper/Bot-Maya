const db = require("quick.db")
const discord = require("discord.js")

module.exports = {
    run: async (client, message, args) => {

        message.channel.send('A loja está em construção...')
    }
}