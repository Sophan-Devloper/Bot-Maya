const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    message.delete()

    let user = message.mentions.users.first() || message.author

    const rody = message.author.id === ("451619591320371213")
    if (!rody)
        return message.channel.send('⚠️ Este comando é restrito.').then(msg => msg.delete({ timeout: 5000 }))

    db.delete(`dailyxp_${user.id}`)
    db.delete(`rptimeout_${user.id}`)
    db.delete(`robtime_${user.id}`)
    db.delete(`lotery_${user.id}`)
    db.delete(`work_${user.id}`)
    db.delete(`slut_${message.author.id}`)
    db.delete(`preso_${message.author.id}`)
    db.delete(`pego_${message.author.id}`)
    db.delete(`procurado_${message.author.id}`)
    message.channel.send(`Timeout resetado.`).then(msg => msg.delete({ timeout: 6000 }))
}