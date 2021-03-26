const Discord = require("discord.js")
const db = require('quick.db')
const moment = require('moment')

exports.run = async (client, message, args) => {
    message.delete()

    let user = message.mentions.members.first() || message.member

    let bal = await db.get(`money_${user.id}`)
    if (bal === null) bal = 0

    let marry = await `<@${db.get(`marry_${user.id}`)}>`
    if (marry === `<@null>`) marry = "Solteiro(a)"

    let family = await `<@${db.get(`family_${user.id}`)}>`
    if (family === `<@null>`) family = "1. Vago"

    let family2 = await `<@${db.get(`family2_${user.id}`)}>`
    if (family2 === `<@null>`) family2 = "2. Vago"

    let family3 = await `<@${db.get(`family3_${user.id}`)}>`
    if (family3 === `<@null>`) family3 = "3. Vago"

    let family4 = await `<@${db.get(`family4_${user.id}`)}>`
    if (family4 === `<@null>`) family4 = "4. Vago"

    let family5 = await `<@${db.get(`family5_${user.id}`)}>`
    if (family5 === `<@null>`) family5 = "5. Vago"

    let level = await db.fetch(`level_${user.id}`)
    if (level === null) level = 0

    let rp = await db.fetch(`rp_${user.id}`)
    if (rp === null) rp = 0

    let status = await db.get(`status_${user.id}`)
    if (status === null) status = `${user.user.username} não escreveu nada ainda.`


    const casamento = new Discord.MessageEmbed()
        .setTitle(`📃 Perfil Pessoal de ${user.user.username}`)
        .setColor('#bf3bfc')
        .addFields(
            {
                name: `💍 Em relacionamento com`,
                value: marry
            },
            {
                name: '❤️ Familia',
                value: `${family}\n${family2}\n${family3}\n${family4}\n${family5}`
            },
            {
                name: '💸 Dinheiro Intersevidor',
                value: `${bal}<:StarPoint:766794021128765469>MPoints`,
                inline: true
            },
            {
                name: '🌐 Level Interservidor',
                value: `${level}<:level:766847577416138772>`,
                inline: true
            },
            {
                name: 'Reputação',
                value: rp
            },
            {
                name: 'Status',
                value: status
            }
        )
        .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
    message.channel.send(casamento).then(msg => msg.delete({ timeout: 10000 }))
}