const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: "setleave",
    category: "seta um canal leave",
    description: "escolher canal leave no server",
    run: async (client, message, args) => {
         

        let permss = message.member.hasPermission("ADMINISTRATOR")
        if (!permss) {
            const noperm = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Permissão Necessária: Administrador')

            return message.channel.send(noperm).then(msg => msg.delete({ timeout: 7000 })).catch(err => { return })
        }

        if (!args[0]) {
            let prefix = db.get(`prefix_${message.guild.id}`)
            if (prefix === null) prefix = "-"

            const noargs = new Discord.MessageEmbed()
                .setColor('#FF0000') // red
                .setTitle('' + prefix + 'setleave #CanalDeSaidas')
            return message.channel.send(noargs).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
        }

        if (args[0] === 'off') {
            var canal = db.get(`leavechannel_${message.guild.id}`)
            if (canal === null) {
                const semcanal = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setTitle('O Leave System já está desativado.')

                return message.channel.send(semcanal).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
            } else if (canal) {
                db.delete(`leavechannel_${message.guild.id}`)
                const comcanal = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('Sistema Leave desativado.')
                return message.channel.send(comcanal)
            }
        }

        var channel = message.mentions.channels.first()
        if (!channel) {
            let prefix = db.get(`prefix_${message.guild.id}`)
            if (prefix === null) prefix = "-"
            const nochannel = new Discord.MessageEmbed()
                .setColor('#FF0000') // red
                .setTitle('' + prefix + 'setleave #CanalDeSaidas')

            return message.channel.send(nochannel).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
        }

        var atual = db.get(`leavechannel_${message.guild.id}`)
        if (channel.id === atual) {

            const iqual = new Discord.MessageEmbed()
                .setColor('#FF0000') // Red
                .setTitle('Este canal já foi definido como Leave Channel!')

            return message.channel.send(iqual)
        } else if (args[0] !== atual) {
            db.set(`leavechannel_${message.guild.id}`, channel.id)

            const sucess = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle('Leave System Ativado!')
                .setDescription(`Canal escolhido: ${channel}`)

            return message.channel.send(sucess)
        }
    }
}