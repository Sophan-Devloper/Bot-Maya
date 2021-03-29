const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'addcommand',
    description: "Add a Custom Command to your server!",
    usage: "?addcommand <Command Name> <Command Response>",
    aliases: ['addcmd'],
    run: async (client, message, args) => {
        message.delete()

        if (!message.member.hasPermission('ADMINISTRATOR')) {
            const permss = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Permissão Necessária: ADMINISTRATOR')
            return message.channel.send(permss).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
        }

        if (!args[0]) {
            let prefix = db.get(`prefix_${message.guild.id}`)
            if (prefix === null) prefix = "-"

            const noargs = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Siga o formato correto')
                .setDescription('`' + prefix + 'deletecomando NomeDoComando`')
                .addFields(
                    {
                        name: 'Exemplo',
                        value: '`' + prefix + 'deletecomando Sorvete`'
                    }
                )
            return message.channel.send(noargs).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
        }

        let commandName = args[0].toLowerCase()
        let database = db.get(`guildConfigurations_${message.guild.id}.commands`)
        if (database) {
            let data = database.find(x => x.name === commandName.toLowerCase())
            if (!data) {
                const noex = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('Este comando não existe no meu banco de dados.')
                return message.channel.send(noex).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
            }

            let value = database.indexOf(data)
            delete database[value]

            var filter = database.filter(x => {
                return x != null && x != ''
            })

            db.set(`guildConfigurations_${message.guild.id}.commands`, filter)

            let prefix = db.get(`prefix_${message.guild.id}`)
            if (prefix === null) prefix = "-"

            const embed = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle('Comando `' + prefix + args[0] + '` deletado com sucesso!')

            return message.channel.send(embed)
        }
        else {
            const nof = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Comando não encontrado')
            return message.channel.send(nof).then(msg => msg.delete({ timeout: 6000 })).catch(err => { return })
        }
    }
}