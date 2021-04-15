const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
        const adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso das permissões "Manusear Canais" e "Adicionar Reações" para utilizar esta função.')
        return message.inlineReply(adm)
    }

    if (!message.guild.me.hasPermission("ADD_REACTIONS")) {
        const adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso das permissões "Manusear Canais" e "Adicionar Reações" para utilizar esta função.')
        return message.inlineReply(adm)
    }
    
    if (!message.member.hasPermission('MANAGE_CHANNELS')) {
        const perms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Manusear Canais')
        return message.inlineReply(perms)
    }

    if (!args[0]) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const noargs = new Discord.MessageEmbed()
            .setColor('#FF0000') // red
            .setTitle('Por favor, siga o formato correto')
            .setDescription('Com este comando, você selecionará um canal para todos do servidor mandarem ideias para votação.')
            .addFields(
                {
                    name: '⠀',
                    value: '`' + prefix + 'setideiachannel #Canal`\n`' + prefix + 'setideiachannel off`',
                }
            )
        return message.inlineReply(noargs)
    }

    if (args[0] === 'off') {
        var canal = db.get(`ideiachannel_${message.guild.id}`)
        if (canal === null) {
            const semcanal = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('O Ideia System já está desativado.')

            return message.inlineReply(semcanal)
        } else if (canal) {
            db.delete(`ideiachannel_${message.guild.id}`)
            const comcanal = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle('Ideia System desativado.')
            return message.inlineReply(comcanal)
        }
    }

    var channel = message.mentions.channels.first()
    if (!channel) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"
        const nochannel = new Discord.MessageEmbed()
            .setColor('#FF0000') // red
            .setTitle('Siga o formato correto')
            .setDescription('' + prefix + 'setideiachannel #Canallogs')

        return message.inlineReply(nochannel)
    }

    var atual = db.get(`ideiachannel_${message.guild.id}`)
    if (channel.id === atual) {

        const iqual = new Discord.MessageEmbed()
            .setColor('#FF0000') // Red
            .setTitle('Este canal já foi definido como Ideia Channel!')

        return message.inlineReply(iqual)
    } else if (args[0] !== atual) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        db.set(`ideiachannel_${message.guild.id}`, channel.id)

        const sucess = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Ideia System Ativado!')
            .setDescription(`Canal escolhido: ${channel}`)

        const liberado = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('🎉 Novo Comando Liberado!')
            .setDescription('`' + prefix + 'ideia Sua ideia em diante`\n \nEnvie ideias para o servidor votar.')

        setTimeout(function () {
            message.inlineReply(liberado)
        }, 5000)

        return message.inlineReply(sucess)
    }
}