const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    message.delete()
    return message.inlineReply('Comando em reforma').then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
}