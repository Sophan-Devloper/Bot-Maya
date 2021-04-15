const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    if (!args[0]) {
        const commands = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('📋 Comandos Exclusivos de Delete (OWNER)')
            .setDescription('Com este comando, o meu criador torna possivel a opção de Deletar qualquer item de qualquer pessoa.')
            .addField('Comando', '`' + prefix + 'delete Item @user`')
        return message.channel.send(commands)
    }

    const rody = message.author.id === ("451619591320371213")
    if (!rody) {
        message.delete()
        return message.channel.send('⚠️ Este comando é um comando restrito.').then(msg => msg.delete({ timeout: 5000 }))
    }

    let user = message.mentions.members.first()

    if (['banco', 'bank'].includes(args[0])) {
        
        if (!user) {
            return message.channel.send('`' + prefix + 'del bank @user`')
        }

        db.delete(`bank_${user.id}`)
        return message.channel.send(`O banco de ${user} foi deletado`)
    }

    if (['iscas', 'isca'].includes(args[0])) {
        
        if (!user) {
            return message.channel.send('`' + prefix + 'del iscas @user`')
        }

        db.delete(`iscas_${user.id}`)
        return message.channel.send(`As iscas de ${user} foram deletadas..`)
    }

    if (['mp', 'money', 'carteira'].includes(args[0])) {
        
        if (!user) {
            return message.channel.send('`' + prefix + 'del money @user`')
        }

        db.delete(`money_${user.id}`)
        return message.channel.send(`O dinheiro da carteira de ${user} foi deletado.`)
    }

    if (['peixe', 'peixes', 'fish'].includes(args[0])) {
        
        if (!user) {
            return message.channel.send('`' + prefix + 'del peixes @user`')
        }

        db.delete(`peixes_${user.id}`)
        return message.channel.send(`Os peixes de ${user} foram deletados.`)
    }

    if (['rp', 'reputação'].includes(args[0])) {
        
        if (!user) {
            return message.channel.send('`' + prefix + 'del rp @user`')
        }
        db.delete(`rp_${user.id}`)
        return message.channel.send(`A reputação de ${user} foi deletada.`)
    }

    if (['status'].includes(args[0])) {
        
        if (!user) {
            return message.channel.send('`' + prefix + 'del status @user`')
        }

        db.delete(`status_${user.id}`)
        return message.channel.send(`O status de ${user} foi deletado.`)
    }

    if (['xp', 'level'].includes(args[0])) {
        
        if (!user) {
            return message.channel.send('`' + prefix + 'del xp @user`')
        }

        db.delete(`xp_${user.id}`)
        db.delete(`level_${user.id}`)
        return message.channel.send(`O level de ${user} foi deletado.`)
    }

    if (['blacklist'].includes(args[0])) {
        
        if (!user) {
            return message.channel.send('`' + prefix + 'del blacklist @user`')
        }

        db.delete(`blacklist_${user.id}`, user.id)
        return message.channel.send(`Você deletou ${user} da blacklist.`)
    }

    if (['whitelist'].includes(args[0])) {
        
        if (!user) {
            return message.channel.send('`' + prefix + 'del whitelist @user`')
        }

        db.delete(`whitelist_${user.id}`, user.id)
        return message.channel.send(`Você deletou ${user} da whitelist.`)
    }

    if (['timeout', 'tempo', 'cooldown'].includes(args[0])) {
        
        if (!user) {
            return message.channel.send('`' + prefix + 'del timeout @user')
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
        return message.channel.send(`Todos os Timeouts de ${user} foram deletados.`)
    }

    return message.channel.send('Comando não encontrado no registro.')
}