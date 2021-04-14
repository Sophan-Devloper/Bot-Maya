const db = require("quick.db")

exports.run = async (client, message, args) => {

    if (!db.get(`marry_${message.author.id}`)) {
        return message.channel.send("Você não esta em um relacionamento.")
    }

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    var user = message.mentions.members.first()

    if (!args[0]) {
        return message.channel.send('Marque o seu par `' + prefix + 'divorce @SeuPar`')
    }

    var par = user.id === db.get(`marry_${message.author.id}`)
    if (!par) {
        return message.channel.send(`${user} não é a pessoa que você está em um relacionamento.`)
    }

    db.delete(`marry_${par}`)
    db.delete(`marry_${message.author.id}`)
    return message.channel.send(`Você se divorciou! Você não está mais se relacionando com ${user}.`)
}