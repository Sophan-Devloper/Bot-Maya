const Discord = require("discord.js")
const db = require("quick.db")
module.exports.run = async (Client, message, args) => {
message.delete()

    if (!db.get(`family4_${message.author.id}`))
    return message.channel.send("Você não tem familia...").then(msg => msg.delete({timeout: 6000}))

    await message.channel.send(`Você se separou de sua familia! Você não tem mais parentesco com ${db.get(`family4_${message.author.id}`)}.`)
    await db.delete(`family4_${db.get(`family4_${message.author.id}`)}`)
    await db.delete(`family4_${message.author.id}`)
}

module.exports.help = {
    name: "nofamily4",
}