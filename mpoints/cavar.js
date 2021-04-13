const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    var picareta = db.get(`itens_${message.author.id}`) == "Picareta"
    if (!db.get(`itens_${message.author.id}`) == "Picareta") {
        const novara = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('❌ Comando bloqueado')
            .setDescription(`${message.author}, você precisa de uma isca.`)
    }

    if (!picareta) {
        const novara = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('❌ Comando bloqueado')
            .setDescription(`${message.author}, você precisa de uma isca.`)
    }

    return message.channel.send("Comando quase pronto...")
}