const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    let user = message.mentions.members.first() || message.member

    let money = await db.get(`money_${user.id}`) + db.get(`bank_${user.id}`)
    if (money === null) money = 0

    let marry = await `<@${db.get(`marry_${user.id}`)}>`
    if (marry === `<@null>`) marry = "Solteiro(a)"

    let family = await `<@${db.get(`family1_${user.id}`)}>`
    if (family === `<@null>`) family = "Vago"

    let family2 = await `<@${db.get(`family2_${user.id}`)}>`
    if (family2 === `<@null>`) family2 = "Vago"

    let family3 = await `<@${db.get(`family3_${user.id}`)}>`
    if (family3 === `<@null>`) family3 = "Vago"

    let level = await db.fetch(`level_${user.id}`)
    if (level === null) level = 0

    let rp = await db.fetch(`rp_${user.id}`)
    if (rp === null) rp = 0

    let title = await db.get(`title_${user.id}`)
    if (title === null) title = "Sem título"

    let status = await db.get(`status_${user.id}`)
    if (status === null) status = `${user.user.username} não conhece o comando ${prefix}setstatus.`

    if (user.id === '821471191578574888') {
        const perfil = new Discord.MessageEmbed()
            .setTitle(`📃 Perfil Pessoal de ${user.user.username}`)
            .setColor('#BF3BFC')
            .addFields(
                {
                    name: `🔰 A Princesa do Discord`,
                    value: `💍 ${marry}`
                },
                {
                    name: '❤️ Familia',
                    value: `1. ${family}\n2. ${family2}\n3. ${family3}`
                },
                {
                    name: '💸 Dinheiro Total',
                    value: `${money} <:StarPoint:766794021128765469> MPoints`,
                },
                {
                    name: '🌐 Level',
                    value: `${level} <:level:766847577416138772>`
                },
                {
                    name: '💌 Reputação',
                    value: rp
                },
                {
                    name: '📝 Status',
                    value: '`' + status + '`'
                }
            )
            .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
        return message.inlineReply(perfil)
    }

    const perfil = new Discord.MessageEmbed()
        .setTitle(`📃 Perfil Pessoal de ${user.user.username}`)
        .setColor('#BF3BFC')
        .addFields(
            {
                name: `🔰 ${title}`,
                value: `💍 ${marry}`
            },
            {
                name: '❤️ Familia',
                value: `1. ${family}\n2. ${family2}\n3. ${family3}`
            },
            {
                name: '💸 Dinheiro Total',
                value: `${money} <:StarPoint:766794021128765469> MPoints`,
            },
            {
                name: '🌐 Level',
                value: `${level} <:level:766847577416138772>`
            },
            {
                name: '💌 Reputação',
                value: rp
            },
            {
                name: '📝 Status',
                value: '`' + status + '`'
            }
        )
        .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
    await message.inlineReply(perfil)
}