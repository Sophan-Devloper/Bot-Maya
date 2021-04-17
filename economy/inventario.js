const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let user = message.mentions.members.first() || message.member

    let title = await db.get(`title_${user.id}`)
    if (title) (title = "🔰 Título Ativado")
    if (title === null) { title = ":x: Título Desativado" }
    if (!db.get(`title_${user.id}`)) { title = ":x: Título Desativado" }

    let peixes = await db.get(`peixes_${user.id}`)
    if (peixes === null) { peixes = "0" }
    if (!db.get(`peixes_${user.id}`)) { peixes = "0" }

    let iscas = await db.get(`iscas_${user.id}`)
    if (iscas === null) { iscas = "0" }
    if (!db.get(`iscas_${user.id}`)) { iscas = "0" }

    let agua = await db.get(`agua_${user.id}`)
    if (agua === null) { agua = "0" }
    if (!db.get(`agua_${user.id}`)) { agua = "0" }

    let camarao = await db.get(`camarao_${user.id}`)
    if (camarao === null) { camarao = "0" }
    if (!db.get(`camarao_${user.id}`)) { camarao = "0" }

    let diamond = await db.get(`diamond_${user.id}`)
    if (diamond === null) { diamond = "0" }
    if (!db.get(`diamond_${user.id}`)) { diamond = "0" }

    let minerio = await db.get(`minerio_${user.id}`)
    if (minerio === null) { minerio = "0" }
    if (!db.get(`minerio_${user.id}`)) { minerio = "0" }

    let ossos = await db.get(`ossos_${user.id}`)
    if (ossos === null) { ossos = "0" }
    if (!db.get(`ossos_${user.id}`)) { ossos = "0" }

    let madeira = await db.get(`madeira_${user.id}`)
    if (madeira === null) { madeira = "0" }
    if (!db.get(`madeira_${user.id}`)) { madeira = "0" }

    let arma = await db.get(`arma_${user.id}`)
    if (arma) { arma = "🔫 Arma" }
    if (arma === null) { arma = "❌ Slot Vazio" }
    if (!db.get(`arma_${user.id}`)) { arma = "❌ Slot Vazio" }

    var xusos = (db.get(`offpicareta_${user.id}`) + 1)
    let picareta = await db.get(`picareta_${user.id}`)
    if (picareta) { picareta = `⛏️ Picareta | Uso restante: ${xusos}` }
    if (picareta === null) { picareta = "❌ Slot Vazio" }
    if (!db.get(`picareta_${user.id}`)) { picareta = "❌ Slot Vazio" }

    let machado = db.get(`machado_${user.id}`)
    if (machado) { machado = "🪓 Machado" }
    if (machado === null) { machado = "❌ Slot Vazio" }
    if (!db.get(`machado_${user.id}`)) { machado = "❌ Slot Vazio" }

    let vara = db.get(`vara_${user.id}`)
    if (vara) { vara = "🎣 Vara de pesca" }
    if (vara === null) { vara = "❌ Slot Vazio" }
    if (!db.get(`vara_${user.id}`)) { vara = "❌ Slot Vazio" }

    let faca = db.get(`faca_${user.id}`)
    if (faca) { faca = "🔪 Faca" }
    if (faca === null) { faca = "❌ Slot Vazio" }
    if (!db.get(`faca_${user.id}`)) { faca = "❌ Slot Vazio" }

    let loli = db.get(`loli_${user.id}`)
    if (loli) { loli = "<:Loli:831571527744356422> Loli" }
    if (loli === null) { loli = "❌ Slot Vazio" }
    if (!db.get(`loli_${user.id}`)) { loli = "❌ Slot Vazio" }

    let fossil = db.get(`fossil_${user.id}`)
    if (fossil) { fossil = "<:fossil:831859111578173450> Fossil" }
    if (fossil === null) { fossil = "❌ Slot Vazio" }
    if (!db.get(`fossil_${user.id}`)) { fossil = "❌ Slot Vazio" }

    let mamute = db.get(`mamute_${user.id}`)
    if (mamute) { mamute = "🦣 Mamute" }
    if (mamute === null) { mamute = "❌ Slot Vazio" }
    if (!db.get(`mamute_${user.id}`)) { mamute = "❌ Slot Vazio" }

    const Embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription(`📖 **Inventário de ${user.user.username}**`)
        .addField('Itens Obtidos', `${arma}\n${picareta}\n${vara}\n${machado}\n❌ Slot Vazio\n❌ Slot Vazio\n❌ Slot Vazio\n❌ Slot Vazio\n❌ Slot Vazio\n❌ Slot Vazio`)
        .addField('Itens Especiais', `${title}\n${faca}\n${loli}\n${fossil}\n${mamute}\n🛡️ Em breve`)
        .addField('Mantimentos', `🐟 ${peixes} Peixes\n🪱 ${iscas} Iscas\n🥤 ${agua} Água\n🍤 ${camarao} Camarões\n🦴 ${ossos} Ossos\n🪵 ${madeira} Madeiras\n🪨 ${minerio} Minérios\n💎 ${diamond} Diamantes`)

    await message.inlineReply(Embed)
}