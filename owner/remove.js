const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    if (!args[0]) {
        const commands = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('📋 Comandos Exclusivos de Remoção (OWNER)')
            .setDescription('Com este comando, o meu criador torna possivel a remoção de qualquer item do slot de qualquer pessoa.')
            .addField('Comando', '`' + prefix + 'remove Item @user Quantidade`')
        return message.channel.send(commands)
    }

    const rody = message.author.id === ("451619591320371213")
    if (!rody) {
        message.delete()
        return message.channel.send('⚠️ Este comando é um comando restrito.').then(msg => msg.delete({ timeout: 5000 }))
    }

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    let user = message.mentions.members.first()

    if (['banco', 'bank'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'remove bank @user Valor`')
        }

        let amount = args[2]
        if (!amount || isNaN(amount)) {
            return message.channel.send('`' + prefix + 'remove bank @user Valor`')
        }

        db.subtract(`bank_${user.id}`, amount)
        return message.channel.send(`O dinheiro foi removido do banco de ${user}`)
    }

    if (['iscas', 'isca'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'remove iscas @user Valor`')
        }

        let amount = args[2]
        if (!amount) {
            return message.channel.send('`' + prefix + 'remove iscas @user Valor`')
        }
        if (isNaN(amount)) {
            return message.channel.send(`**${args[2]}** não é um número.`)
        }

        db.subtract(`iscas_${user.id}`, amount)
        return message.channel.send(`Iscas removidas do slot de ${user}.`)
    }

    if (['mp', 'money'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'remove money @user Valor`')
        }

        let amount = args[2]
        if (!amount) {
            return message.channel.send('`' + prefix + 'remove money @user Valor`')
        }
        if (isNaN(amount)) {
            return message.channel.send(`**${args[2]}** não é um número.`)
        }

        db.subtract(`money_${user.id}`, amount)
        return message.channel.send(`Dinheiro removido da conta de ${user}.`)
    }

    if (['peixe', 'peixes', 'fish'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'remove peixes @user Valor`')
        }

        let amount = args[2]
        if (!amount) {
            return message.channel.send('`' + prefix + 'remove peixes @user Valor`')
        }
        if (isNaN(amount)) {
            return message.channel.send(`**${args[2]}** não é um número.`)
        }

        db.subtract(`peixes_${user.id}`, amount)
        return message.channel.send(`Peixes removidos do slot de ${user}.`)
    }

    if (['arma'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'remove arma @user`')
        }

        db.delete(`arma_${user.id}`)
        return message.channel.send(`Arma removida do slot de ${user}.`)
    }

    if (['picareta'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'remove picareta @user`')
        }

        db.delete(`picareta_${user.id}`)
        return message.channel.send(`Picareta removida do slot de ${user}.`)
    }

    if (['machado'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'remove machado @user`')
        }

        db.delete(`machado_${user.id}`)
        return message.channel.send(`Machado removido do slot de ${user}.`)
    }

    if (['vara', 'vara de pesca'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'remove vara @user`')
        }

        db.delete(`vara_${user.id}`)
        return message.channel.send(`Vara de pesca removida do slot de ${user}.`)
    }

    if (['faca'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'remove faca @user`')
        }

        db.delete(`faca_${user.id}`)
        return message.channel.send(`Faca removida do slot de ${user}.`)
    }

    if (['loli'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'remove loli @user`')
        }

        db.delete(`loli_${user.id}`)
        return message.channel.send(`Loli removida do slot de ${user}.`)
    }

    if (['fossil'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'remove fossil @user`')
        }

        db.delete(`fossil_${user.id}`)
        return message.channel.send(`Fossil removido do slot de ${user}.`)
    }

    if (['mamute'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'remove mamute @user`')
        }

        db.delete(`mamute_${user.id}`)
        return message.channel.send(`Mamute removido do slot de ${user}.`)
    }

    if (['rp', 'reputação'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'remove rp @user Valor`')
        }

        let amount = args[2]
        if (!amount) {
            return message.channel.send('`' + prefix + 'remove rp @user Valor`')
        }
        if (isNaN(amount)) {
            return message.channel.send(`**${args[2]}** não é um número.`)
        }

        db.subtract(`rp_${user.id}`, amount)
        return message.channel.send(`Reputação removida ao perfil de ${user}.`)
    }

    if (['xp'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'remove xp @user Valor`')
        }

        let amount = args[2]
        if (!amount) {
            return message.channel.send('`' + prefix + 'remove xp @user Valor`')
        }
        if (isNaN(amount)) {
            return message.channel.send(`**${args[2]}** não é um número.`)
        }

        db.subtract(`xp_${user.id}`, amount)
        return message.channel.send(`Experiência removida ao perfil de ${user}.`)
    }

    if (['blacklist'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'remove blacklist @user Valor`')
        }

        db.delete(`blacklist_${user.id}`, user.id)
        return message.channel.send(`Você removeu ${user} da blacklist.`)
    }

    if (['whitelist'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'remove whitelist @user Valor`')
        }

        db.delete(`whitelist_${user.id}`, user.id)
        return message.channel.send(`Você removeu ${user} da whitelist.`)
    }

    if (['timeout', 'tempo', 'cooldown'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'remove timeout @user')
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
        db.delete(`assaltotime_${user.id}`)
        await message.channel.send(`Todos os Timeouts de ${user} foram removidos.`)
    }
}