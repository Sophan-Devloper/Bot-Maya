const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let user = message.mentions.members.first() || message.member

    let peixes = await db.get(`peixes_${user.id}`)
    if (peixes === null) { peixes = "0" }
    if (!db.get(`peixes_${user.id}`)) { peixes = "0" }

    let iscas = await db.get(`iscas_${user.id}`)
    if (iscas === null) { iscas = "0" }
    if (!db.get(`iscas_${user.id}`)) { peixes = "0" }

    let camarao = await db.get(`camarao_${user.id}`)
    if (camarao === null) { camarao = "0" }
    if (!db.get(`camarao_${user.id}`)) { camarao = "0" }

    let diamond = await db.get(`diamond_${user.id}`)
    if (diamond === null) { diamond = "0" }
    if (!db.get(`diamond_${user.id}`)) { diamond = "0" }

    let minerio = await db.get(`minerio_${user.id}`)
    if (minerio === null) { minerio = "0" }
    if (!db.get(`minerio_${user.id}`)) { minerio = "0" }

    let arma = await db.get(`arma_${user.id}`)
    if (arma) { arma = "🔫 Arma" }
    if (arma === null) { arma = "❌ Slot Vazio" }
    if (!db.get(`arma_${user.id}`)) { arma = "❌ Slot Vazio" }

    let picareta = await db.get(`picareta_${user.id}`)
    if (picareta) { picareta = "⛏️ Picareta" }
    if (picareta === null) { picareta = "❌ Slot Vazio" }
    if (!db.get(`picareta_${user.id}`)) { picareta = "❌ Slot Vazio" }

    let vara = db.get(`vara_${user.id}`)
    if (vara) { vara = "🎣 Vara de pesca" }
    if (vara === null) { vara = "❌ Slot Vazio" }
    if (!db.get(`vara_${user.id}`)) { vara = "❌ Slot Vazio" }

    let faca = db.get(`faca_${user.id}`)
    if (faca) { vara = "🔪 Faca" }
    if (faca === null) { faca = "❌ Slot Vazio" }
    if (!db.get(`faca_${user.id}`)) { faca = "❌ Slot Vazio" }

    const Embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription(`📖 **Inventário de ${user.user.username}**`)
        .addField('Itens Obtidos', `${arma}\n${picareta}\n${vara}\n${faca}`)
        .addField('Mantimentos', `🐟 ${peixes} Peixes\n🪱 ${iscas} Iscas\n🍤 ${camarao} Camarões\n🪨 ${minerio} Minérios\n💎 ${diamond} Diamantes`)

    await message.channel.send(Embed)
}