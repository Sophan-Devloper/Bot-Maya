const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: "setleavemsg",
    run: async (client, message, args) => {

        let permss = message.member.hasPermission("ADMINISTRATOR")
        if (!permss) {
            const noperm = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Permissão Necessária: Administrador')

            return message.channel.send(noperm).then(msg => msg.delete({ timeout: 7000 })).catch(err => { return })
        }

        if (args[0] === 'off') {
            var canal = db.get(`msgleave_${message.guild.id}`)
            if (canal === null) {
                const semcanal = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setTitle(message.guild.name + ' não tem nenhuma mensagem definida.')

                return message.channel.send(semcanal).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
            } else if (canal) {
                db.delete(`msgleave_${message.guild.id}`)
                const comcanal = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('A mensagem de saída foi delatada com sucesso.')
                return message.channel.send(comcanal)
            }
        }

        var canal = db.get(`leavechannel_${message.guild.id}`)
        if (canal === null) {
            let prefix = db.get(`prefix_${message.guild.id}`)
            if (prefix === null) prefix = "-"

            const nocanal = new Discord.MessageEmbed()
                .setColor('#FF0000') // Red Color
                .setTitle('O Leave System está desativado.')
                .setDescription('`' + prefix + 'setleave`')
            return message.channel.send(nocanal)
        }

        const mensagem = args.slice(0).join(" ")
        if (!mensagem) {
            let prefix = db.get(`prefix_${message.guild.id}`)
            if (prefix === null) prefix = "-"

            const noargs = new Discord.MessageEmbed()
                .setColor('#FF0000') // red
                .setTitle('Siga o formato abaixo')
                .setDescription('`' + prefix + 'setleavemsg Mensagem de saída`')
            return message.channel.send(noargs).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
        }

        if (mensagem) {
            db.set(`msgleave_${message.guild.id}`, mensagem)

            const sucess = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle('A mensagem foi armazenada com sucesso.')
                .setDescription('Mensagem: `' + mensagem + '`')

            return message.channel.send(sucess)
        }
    }
}