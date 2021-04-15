const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        const adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso da permissão "Manusear Cargos" para utilizar esta função.')
        return message.inlineReply(adm)
    }

    let perms = message.member.hasPermission("MANAGE_ROLES")
    if (!perms) {
        const permss = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Manusear Roles (cargos)')
        return message.inlineReply(permss)
    }

    if (!args[0]) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        if (db.get(`autorole_${message.guild.id}`) !== null) {
            const rolee = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setDescription(`O autorole atual é: <@&${db.get(`autorole_${message.guild.id}`)}>`)
            return message.inlineReply(rolee)
        }

        const noargs = new Discord.MessageEmbed()
            .setColor('BLUE') // red
            .setTitle('O Autorole System está desativado')
            .setDescription('Escolha o cargo que todos vão receber assim que entrar no servidor.')
            .addField('Defina o cargo', '`' + prefix + 'setautorole @Cargo`')
            .addField('Desative o Autorole', '`' + prefix + 'setautorole off`')
        return message.inlineReply(noargs)
    }

    if (args[0] === 'off') {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        if (db.get(`autorole_${message.guild.id}`) === null) {
            const noauto = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('O Autorole System já está desativado.')
            return message.inlineReply(noauto)
        }

        var cargo = db.get(`autorole_${message.guild.id}`)
        const confirm1 = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setDescription(`Você deseja desligar o sistema de Autorole? O cargo <@&${cargo}> deixará de ser dado a todos os novos membros.`)
        return message.inlineReply(confirm1).then(msg => {
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
                        message.inlineReply(desativado)
                    }, 3400)

                    return message.inlineReply(semrole)
                }

                if (reaction.emoji.name === '❌') { // MPEmbed
                    msg.delete()
                    const cancel = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setTitle('Comando cancelado')
                    return message.inlineReply(cancel)
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
        return message.inlineReply(norole)
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
            message.inlineReply(soberol)
        }, 6000)
        return message.inlineReply(sobcarg)

    }

    var atual = db.get(`autorole_${message.guild.id}`)
    if (role.id === atual) {

        const iqual = new Discord.MessageEmbed()
            .setColor('#FF0000') // Red
            .setTitle('Este cargo já foi definido como Autorole!')
        return message.inlineReply(iqual)
    }

    const confirm = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription(`Você deseja definir o cargo ${role} como autorole?`)

    await message.inlineReply(confirm).then(msg => {
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
                return message.inlineReply(timing).then(msg => msg.delete({ timeout: 4000 })).then(msg => msg.inlineReply(redefine))
            }

            if (reaction.emoji.name === '❌') { // MPEmbed
                msg.delete()
                const cancel = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('Comando cancelado')
                return message.inlineReply(cancel)
            }
        })
    })
}