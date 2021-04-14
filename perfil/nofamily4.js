const db = require("quick.db")

exports.run = async (client, message, args) => {

    if (!db.get(`family4_${message.author.id}`)) {
        return message.channel.send("Você não tem um familiar nesta posição...")
    }

    await db.delete(`family4_${db.get(`family4_${message.author.id}`)}`)
    await message.channel.send(`Você se separou de sua familia! Você não tem mais parentesco com ${db.get(`family4_${message.author.id}`)}.`)
    await db.delete(`family4_${message.author.id}`)
}