const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let user = message.mentions.members.first() || message.member

    let peixes = db.get(`peixes_${user.id}`)
    if (peixes === null) { peixes = "0" }
    if (!db.get(`peixes_${user.id}`)) { peixes = "0" }

    let iscas = db.get(`iscas_${user.id}`)
    if (iscas === null) { iscas = "0" }
    if (!db.get(`iscas_${user.id}`)) { peixes = "0" }

    var arma = db.get(`itens_${user.id}`, "Arma")
    if (arma) { arma = "🔫 Arma" }
    if (!db.get(`itens_${user.id}`, "Arma")) { arma = "❌ Slot Vazio" }
    if (arma === null) { arma = "❌ Slot Vazio" }

    var picareta = db.get(`itens_${user.id}`, "Picareta")
    if (picareta) { picareta = "⛏️ Picareta" }
    if (!db.get(`itens_${user.id}`, "Picareta")) { picareta = "❌ Slot Vazio" }
    if (picareta === null) { picareta = "❌ Slot Vazio" }

    var vara = db.get(`itens_${user.id}`, "Vara de pesca")
    if (vara) { vara = "🎣 Vara de pesca" }
    if (!db.get(`itens_${user.id}`, "Vara de pesca")) { vara = "❌ Slot Vazio" }
    if (vara === null) { vara = "❌ Slot Vazio" }

    var faca = db.get(`itens_${user.id}`, "Faca")
    if (faca) { vara = "🔪 Faca" }
    if (!db.get(`itens_${user.id}`, "Faca")) { faca = "❌ Slot Vazio" }
    if (faca === null) { faca = "❌ Slot Vazio" }

    const Embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription(`📖 **Inventário de ${user.user.username}**`)
        .addField('Itens Obtidos', `${arma}\n${picareta}\n${vara}\n${faca}`)
        .addField('Mantimentos', `🐟 ${peixes} Peixes\n🪱 ${iscas} Iscas`)

    await message.channel.send(Embed)
}