const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async (client, message, args) => {
message.delete()

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member || message.mentions.users.first()

    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)
    if(bal === null) bal = 0

    let marry = await `<@${db.get(`marry_${user.id}`)}>`
    if(marry === `<@null>`)
    marry = "Solteiro(a)"

    let adote = await `<@${db.get(`adote_${user.id}`)}>`
    if(adote === `<@null>`)
    adote = "Não está em nenhuma familia"

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
                value: adote
            },
            {
                name: '💸Dinheiro no Servidor',
                value: `${bal}<:StarPoint:766794021128765469>RPoints`
            },
            {
                name: '<:level:766847577416138772>Level',
                value: 'Sistema de Level em Reforma'
            },
            {
                name: '🛡️Membro Desde',
                value: user.joinedAt.toLocaleDateString("pt-br")
            },
            )
        .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
        .setFooter('Maya Family')
    message.channel.send(casamento).then(msg => msg.delete({timeout: 10000}))
        }