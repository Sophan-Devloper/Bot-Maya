const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    message.delete()

    var perms = message.member.hasPermission('ADMINISTRATOR')
    if (!perms) {
        const noperm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Administrador')
        return message.channel.send(noperm).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    if (!args[0]) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const noargs = new Discord.MessageEmbed()
            .setColor('BLUE') // red
            .setTitle('Autorole System')
            .setDescription('Escolha o cargo que todos vão receber assim que entrar no servidor.')
            .addField('Defina o cargo', '`' + prefix + 'setautorole @Cargo`')
            .addField('Desative o Autorole', '`' + prefix + 'setautorole off`')
        return message.channel.send(noargs).then(msg => msg.delete({ timeout: 15000 })).catch(err => { return })
    }

    var cargo = db.get(`autorole_${message.guild.id}`)
    if (args[0] === 'off') {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        if (db.get(`autorole_${message.guild.id}`) === null) {
            const noauto = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('O Autorole System já está desativado.')
            return message.channel.send(noauto).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
        }

        const confirm1 = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setDescription(`Você deseja desligar o sistema de Autorole? O cargo <@&${cargo}> deixará de ser dado a todos os novos membros.`)
        return message.channel.send(confirm1).then(msg => {
            msg.react('✅') // Check
            msg.react('❌') // X

            msg.awaitReactions((reaction, user) => {
                if (message.author.id !== user.id) return
                if (reaction.emoji.name === '✅') { // Sim
                    msg.delete()

                    db.delete(`autorole_${message.guild.id}`)
                    const semrole = new Discord.MessageEmbed()
                        .setColor('BLUE')
                        .setTitle('🔄 Desativando o Autorole System...')

                    const desativado = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setTitle('Autorole System foi desativado com sucesso.')

                    setTimeout(function desativando() {
                        message.channel.send(desativado)
                    }, 5400)

                    return message.channel.send(semrole).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
                }

                if (reaction.emoji.name === '❌') { // MPEmbed
                    msg.delete()
                    const cancel = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setTitle('Comando cancelado')
                    return message.channel.send(cancel).then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
                }
            })
        })
    }

    var role = message.mentions.roles.first()
    if (!role) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const norole = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'setautorole @cargo`')
        return message.channel.send(norole).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
    }

    if (!role.editable) {
        const soberol = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Este cargo é maior que o meu.')
            .addFields(
                {
                    name: 'Suba meu cargo',
                    value: '1 - Configurações do Servidor\n2 - Cargos\n3 - Procure meu cargo "Maya"\n4 - Arraste meu cargo para um dos primeiros\n5 - Salve as alterações e tente novamente.'
                }
            )

        const sobcarg = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('🔄 Um erro foi encontrado. Buscando solução...')

        setTimeout(function () {
            message.channel.send(soberol)
        }, 6000)
        return message.channel.send(sobcarg).then(msg => msg.delete({ timeout: 5500 })).catch(err => { return })

    }

    var atual = db.get(`autorole_${message.guild.id}`)
    if (role.id === atual) {

        const iqual = new Discord.MessageEmbed()
            .setColor('#FF0000') // Red
            .setTitle('Este cargo já foi definido como Autorole!')
        return message.channel.send(iqual).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    const confirm = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription(`Você deseja definir o cargo ${role} como autorole?`)

    await message.channel.send(confirm).then(msg => {
        msg.react('✅') // Check
        msg.react('❌') // X

        msg.awaitReactions((reaction, user) => {
            if (message.author.id !== user.id) return
            if (reaction.emoji.name === '✅') { // Sim
                msg.delete()

                db.set(`autorole_${message.guild.id}`, role.id)
                const redefine = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setDescription(`O cargo ${role} foi definido como autorole com sucesso.`)

                const timing = new Discord.MessageEmbed()
                    .setColor('BLUE')
                    .setDescription(`Autenticando o cargo no banco de dados do servidor "${message.guild.name}"...`)
                return message.channel.send(timing).then(msg => msg.delete({ timeout: 4000 })).then(msg => msg.channel.send(redefine))
            }

            if (reaction.emoji.name === '❌') { // MPEmbed
                msg.delete()
                const cancel = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('Comando cancelado')
                return message.channel.send(cancel).then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
            }
        })
    })
}