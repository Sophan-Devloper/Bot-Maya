const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: "setwelcome",
    category: "seta um canal welcome",
    description: "escolher canal welcome no server",
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
                .setTitle('' + prefix + 'setwelcome #CanalDeBoasVindas')
            return message.channel.send(noargs).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
        }

        if (args[0] === 'off') {
            var canal = db.get(`welcomechannel_${message.guild.id}`)
            if (canal === null) {
                const semcanal = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setTitle('O Welcome System já está desativado.')

                return message.channel.send(semcanal)
            } else if (canal) {
                db.delete(`welcomechannel_${message.guild.id}`)
                const comcanal = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('Sistema Welcome desativado.')
                return message.channel.send(comcanal)
            }
        }

        var channel = message.mentions.channels.first()
        if (!channel) {
            let prefix = db.get(`prefix_${message.guild.id}`)
            if (prefix === null) prefix = "-"
            const nochannel = new Discord.MessageEmbed()
                .setColor('#FF0000') // red
                .setTitle('' + prefix + 'setwelcome #CanalDeBoasVindas')

            return message.channel.send(nochannel).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
        }

        var atual = db.get(`welcomechannel_${message.guild.id}`)
        if (channel.id === atual) {

            const iqual = new Discord.MessageEmbed()
                .setColor('#FF0000') // Red
                .setTitle('Este canal já foi definido como Welcome Channel!')

            return message.channel.send(iqual)
        } else if (args[0] !== atual) {
            db.set(`welcomechannel_${message.guild.id}`, channel.id)

            const sucess = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle('Welcome System Ativado!')
                .setDescription(`Canal definido: ${channel}`)

            return message.channel.send(sucess)
        }
    }
}