const Discord = require("discord.js")
const db = require("quick.db")
module.exports.run = async (Client, message, args) => {
 

    if (!db.get(`marry_${message.author.id}`))
    return message.channel.send("Você não esta casado...").then(msg => msg.delete({timeout: 6000}))

    await message.channel.send(`Você se divorciou! Você não está mais casado com ${db.get(`marry_${message.author.id}`)}.`)
    await db.delete(`marry_${db.get(`marry_${message.author.id}`)}`)
    await db.delete(`marry_${message.author.id}`)
}

module.exports.help = {
    name: "divorce",
}