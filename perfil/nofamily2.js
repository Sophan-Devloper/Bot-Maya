const db = require("quick.db")

exports.run = async (client, message, args) => {

    if (!db.get(`family2_${message.author.id}`)) {
        return message.channel.send("Você não tem um familiar nesta posição...")
    }

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    var user = message.mentions.members.first()

    if (!args[0]) {
        return message.channel.send('Marque o seu familiar `' + prefix + 'nofamily2 @Familiar`')
    }

    var par = user.id === db.get(`family2_${message.author.id}`)
    if (!par) {
        return message.channel.send(`${user} não é a pessoa que você está em um relacionamento.`)
    }

    await db.delete(`family2_${par}`)
    await db.delete(`family2_${message.author.id}`)
    await message.channel.send(`Você se separou de sua familia! Você não tem mais parentesco com ${user}.`)
}