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

    let family = await `1. <@${db.get(`family1_${user.id}`)}>`

    let family2 = await `⠀\n2. <@${db.get(`family2_${user.id}`)}>`

    let family3 = await `⠀\n3. <@${db.get(`family3_${user.id}`)}>`

    let nofamily = (family === `1. <@null>`) && (family2 === `⠀\n2. <@null>`) && (family3 === `⠀\n3. <@null>`)
    if (nofamily) { nofamily = "⠀\nNão tem ninguém por aqui" }
    if (!nofamily) { nofamily = "⠀" }
    if (family === `1. <@null>`) family = "⠀"
    if (family2 === `⠀\n2. <@null>`) family2 = "⠀"
    if (family3 === `⠀\n3. <@null>`) family3 = "⠀"

    let level = await db.fetch(`level_${user.id}`)
    if (level === null) level = 0

    let rp = await db.fetch(`rp_${user.id}`)
    if (rp === null) rp = 'Sem reputação'

    let title = await db.get(`titulo_${user.id}`)
    let titleloja = await db.get(`title_${user.id}`)
    if (titleloja === null) { titulo = "⠀" }
    if (!titleloja) { titulo = "⠀" }
    if (title === null) { titulo = "⠀" }
    if (titleloja && !title) { titulo = `🔰 Sem título definido` }
    if (title && titleloja) { titulo = `🔰 ${db.get(`titulo_${user.id}`)}` }

    let status = await db.get(`status_${user.id}`)
    if (status === null) status = `${user.user.username} não conhece o comando ${prefix}setstatus.`

    let signo = await db.get(`signo_${message.author.id}`)
    if (signo === null) { signo = ':x: Sem signo habilitado' }

    var estrela = '<:starM:832974891635572787>'
    var noestrela = '<:nostar:832972978009538591>'

    if (user.id === '821471191578574888') {
        const perfil = new Discord.MessageEmbed()
            .setDescription(`📃 **Perfil Pessoal de ${user.user.username}** ${estrela}${estrela}${estrela}${estrela}${estrela}`)
            .setColor('#BF3BFC')
            .addFields(
                {
                    name: `🔰 Princesa do Discord`,
                    value: `💍 Itachi Uchiha\n♓ Peixes`
                },
                {
                    name: '❤️ Familia',
                    value: `O Discord é minha familia`
                },
                {
                    name: '💸 Dinheiro Total',
                    value: `${money} <:StarPoint:766794021128765469> MPoints`,
                },
                {
                    name: '🌐 Level',
                    value: `∞ <:level:766847577416138772>`
                },
                {
                    name: '💌 Reputação',
                    value: rp
                },
                {
                    name: '📝 Status',
                    value: 'Um dia eu quero ir pra lua'
                }
            )
            .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
        return message.inlineReply(perfil)
    }

    const perfil = new Discord.MessageEmbed()
        .setDescription(`📃 **Perfil Pessoal de ${user.user.username}** ${noestrela}${noestrela}${noestrela}${noestrela}${noestrela}`)
        .setColor('#BF3BFC')
        .addFields(
            {
                name: `${titulo}`,
                value: `💍 ${marry}\n${signo}`
            },
            {
                name: `❤️ Familia${nofamily}`,
                value: `${family}${family2}${family3}`
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
                value: status
            }
        )
        .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
        .setFooter(`${prefix}help perfil`)
    await message.inlineReply(perfil)

    if (['help', 'ajuda', 'comandos'].includes(args[0])) {
        return message.inlineReply('Quase pronto')
    }
}