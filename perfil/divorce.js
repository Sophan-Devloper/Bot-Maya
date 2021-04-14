const db = require("quick.db")

exports.run = async (client, message, args) => {

    if (!db.get(`marry_${message.author.id}`)) {
        return message.channel.send("Você não esta em um relacionamento.")
    }

    db.delete(`marry_${db.get(`marry_${message.author.id}`)}`)
    await message.channel.send(`Você se divorciou! Você não está mais casado com ${db.get(`marry_${message.author.id}`)}.`)
    db.delete(`marry_${message.author.id}`)
}