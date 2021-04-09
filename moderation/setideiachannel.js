const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let permss = message.member.hasPermission("ADMINISTRATOR")
    if (!permss) {
        const noperm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Administrador')

        return message.channel.send(noperm)
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
        return message.channel.send(noargs)
    }

    if (args[0] === 'off') {
        var canal = db.get(`ideiachannel_${message.guild.id}`)
        if (canal === null) {
            const semcanal = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('O Ideia System já está desativado.')

            return message.channel.send(semcanal)
        } else if (canal) {
            db.delete(`ideiachannel_${message.guild.id}`)
            const comcanal = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle('Ideia System desativado.')
            return message.channel.send(comcanal)
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

        return message.channel.send(nochannel)
    }

    var atual = db.get(`ideiachannel_${message.guild.id}`)
    if (channel.id === atual) {

        const iqual = new Discord.MessageEmbed()
            .setColor('#FF0000') // Red
            .setTitle('Este canal já foi definido como Ideia Channel!')

        return message.channel.send(iqual)
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

        setTimeout(function(){
            message.channel.send(liberado)
        }, 5000)

        return message.channel.send(sucess)
    }
}