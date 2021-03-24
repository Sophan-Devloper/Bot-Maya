const Discord = require("discord.js")
const db = require('quick.db')
const moment = require('moment')

exports.run = async (client, message, args) => {
message.delete()

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member || message.mentions.users.first()

    let bal = await db.fetch(`money_${message.author.id}_${user.id}`)
    if(bal === null) bal = 0

    let marry = await `<@${db.get(`marry_${user.id}`)}>`
    if(marry === `<@null>`)
    marry = "Solteiro(a)"

    let family = await `<@${db.get(`family_${user.id}`)}>`
    if(family === `<@null>`)
    family = "Vago"

    let family2 = await `<@${db.get(`family2_${user.id}`)}>`
    if(family2 === `<@null>`) family2 = "Vago"
    let family3 = await `<@${db.get(`family3_${user.id}`)}>`
    if(family3 === `<@null>`) family3 = "Vago"

    let level = await db.fetch(`level_${user.id}`)
    if(level === null) level = 0

    let status = await db.get(`status_${message.author.id}`)
    if(status === null) status = "Sem frase por aqui"


    const casamento = new Discord.MessageEmbed()
        .setTitle(`:hearts: Perfil Pessoal de ${user.user.username}:hearts:`)
        .setColor('#bf3bfc')
        .addFields(
            {
                name: `\n💍Em relacionamento com`,
                value: marry
            },
            {
                name: '❤️Familia❤️',
                value: `${family}, ${family2}, ${family3}`
            },
            {
                name: '💸 Dinheiro Intersevidor',
                value: `${bal}<:StarPoint:766794021128765469>RPoints`
            },
            {
                name: '🌐 Level Interservidor',
                value: `${level}<:level:766847577416138772>`
            },
            {
                name: '🛡️Membro Desde',
                value: moment(user.joinedAt).format('DD/MM/YY')
            },
            {
                name: 'Status',
                value: status
            }
            )
        .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
        .setFooter('Maya Family')
    message.channel.send(casamento).then(msg => msg.delete({timeout: 10000}))
        }