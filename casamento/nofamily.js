const Discord = require("discord.js")
const db = require("quick.db")
module.exports.run = async (Client, message, args) => {
message.delete()

    if (!db.get(`family_${message.author.id}`))
    return message.channel.send("Você não tem familia...").then(msg => msg.delete({timeout: 6000}))

    await message.channel.send(`Você acaba de se separar da sua familia.`)
    await db.delete(`family_${db.get(`family_${message.author.id}`)}`)
    await db.delete(`family_${message.author.id}`)
}

module.exports.help = {
    name: "nofamily"
}