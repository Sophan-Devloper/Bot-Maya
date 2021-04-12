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

    let itens = await db.fetch(`itens_${user.id}`)
    if (itens === null) {
        const nada = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setDescription(`Inventário Vazio`)
        return message.channel.send(nada)
    }

    if (!db.fetch(`itens_${user.id}`)) {
        const nada = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setDescription(`Inventário Vazio`)
        return message.channel.send(nada)
    }

    const Embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription(`📖 **Inventário de ${user.user.username}**`)
        .addField('Itens', itens)
        .addField('Mantimentos', `🐟 ${peixes} Peixes\n🪱 ${iscas} Iscas`)

    await message.channel.send(Embed)
}