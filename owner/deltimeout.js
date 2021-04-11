const db = require('quick.db')

exports.run = async (client, message, args) => {

    let user = message.mentions.users.first() || message.author
    const rody = message.author.id === ("451619591320371213")
    if (!rody) {
        message.delete()
        return message.channel.send('⚠️ Este comando é restrito.').then(msg => msg.delete({ timeout: 5000 }))
    }

    db.delete(`dailyxp_${user.id}`)
    db.delete(`rptimeout_${user.id}`)
    db.delete(`robtime_${user.id}`)
    db.delete(`lotery_${user.id}`)
    db.delete(`work_${user.id}`)
    db.delete(`slut_${user.id}`)
    db.delete(`preso_${user.id}`)
    db.delete(`pego_${user.id}`)
    db.delete(`procurado_${user.id}`)
    return message.channel.send(`Timeout resetado.`)
}