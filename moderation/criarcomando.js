const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'addcommand',
    description: "Add a Custom Command to your server!",
    usage: "?addcommand <Command Name> <Command Response>",
    aliases: ['addcmd'],
    run: async (client, message, args) => {
         

        if (!message.member.hasPermission('ADMINISTRATOR')) {
            const permss = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Permissão Necessária: ADMINISTRATOR')
            return message.channel.send(permss).then(msg => msg.delete({ timeout: 5000 })).catch(err => {return})
        }

        if (!args[0]) {
            let prefix = db.get(`prefix_${message.guild.id}`)
            if (prefix === null) prefix = "-"

            const noargs = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Siga o formato correto')
                .setDescription('`' + prefix + 'criarcomando Nome Resposta`')
                .addFields(
                    {
                        name: 'Exemplo',
                        value: '`' + prefix + 'criarcomando Sorvete Eu amo sorvete`'
                    }
                )
            return message.channel.send(noargs).then(msg => msg.delete({ timeout: 10000 })).catch(err => {return})
        }

        let commandName = args[0].toLowerCase()
        if (commandName.length > 10) {
            const toname = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('O nome do comando não pode ultrapassar 10 letras')
            return message.channel.send(toname).then(msg => msg.delete({ timeout: 5000 })).catch(err => {return})
        }

        let commandResponse = args.slice(1).join(" ")
        if (!commandResponse) {
            let prefix = db.get(`prefix_${message.guild.id}`)
            if (prefix === null) prefix = "-"

            const noargs = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Siga o formato correto')
                .setDescription('`' + prefix + 'criarcomando Nome Resposta`')
                .addFields(
                    {
                        name: 'Exemplo',
                        value: '`' + prefix + 'criarcomando Sorvete Eu amo sorvete`'
                    }
                )
            return message.channel.send(noargs).then(msg => msg.delete({ timeout: 10000 })).catch(err => {return})
        }

        let database = db.get(`guildConfigurations_${message.guild.id}.commands`)
        if (database && database.find(x => x.name === commandName.toLowerCase())) {
            const existe = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Este comando já existe')
            return message.channel.send(existe).then(msg => msg.delete({ timeout: 5000 })).catch(err => {return})
        }

        let data = {
            name: commandName,
            response: commandResponse
        }

        db.push(`guildConfigurations_${message.guild.id}.commands`, data)
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const embed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('O comando `' + prefix + commandName.toLowerCase() + '` foi adicionado ao servidor!')

        message.channel.send(embed)
    }
}