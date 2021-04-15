const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    if (!args[0]) {
        const commands = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('📋 Comandos Exclusivos de Doação (OWNER)')
            .setDescription('Com este comando, o meu criador torna possivel a doação de qualquer item da loja para qualquer pessoa.')
            .addField('Comando', '`' + prefix + 'give Item @user`')
        return message.channel.send(commands)
    }

    const rody = message.author.id === ("451619591320371213")
    if (!rody) {
        message.delete()
        return message.channel.send('⚠️ Este comando é um comando restrito.').then(msg => msg.delete({ timeout: 5000 }))
    }

    let user = message.mentions.members.first()

    if (['arma'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'give arma @user')
        }

        db.set(`arma_${user.id}`, "Arma")
        return message.channel.send(`Uma arma adicionada ao slot de ${user}`)
    }

    if (['picareta'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'give picareta @user')
        }

        db.set(`picareta_${user.id}`, "Picareta")
        db.add(`offpicareta_${user.id}`, 50)
        return message.channel.send(`Uma picareta adicionada ao slot de ${user}`)
    }

    if (['vara'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'give vara @user')
        }

        db.set(`vara_${user.id}`, "Vara")
        return message.channel.send(`Uma vara de pesca adicionada ao slot de ${user}`)
    }

    if (['faca'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'give faca @user')
        }

        db.set(`faca_${user.id}`, "Faca")
        return message.channel.send(`Uma faca adicionada ao slot de ${user}`)
    }

    if (['machado'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'give machado @user')
        }

        db.set(`machado_${user.id}`, "Machado")
        return message.channel.send(`Um machado adicionada ao slot de ${user}`)
    }

    if (['loli'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'give loli @user')
        }

        db.set(`loli_${user.id}`, "Loli")
        return message.channel.send(`Uma loli adicionada ao slot de ${user}`)
    }

    if (['fossil'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'give fossil @user')
        }

        db.set(`fossil_${user.id}`, "Fossil")
        return message.channel.send(`Uma fossil adicionada ao slot de ${user}`)
    }

    if (['mamute'].includes(args[0])) {

        if (!user) {
            return message.channel.send('`' + prefix + 'give mamute @user')
        }

        db.set(`mamute_${user.id}`, "Mamute")
        return message.channel.send(`Uma mamute adicionada ao slot de ${user}`)
    }

    return message.channel.send('Comando não encontrado no registro.')
}