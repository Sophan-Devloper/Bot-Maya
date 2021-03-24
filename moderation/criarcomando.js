const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'addcommand',
    description: "Add a Custom Command to your server!",
    usage: "?addcommand <Command Name> <Command Response>",
    aliases: ['addcmd'],
    run: async (client, message, args) => {

        if (!message.member.hasPermission('ADMINISTRATOR')) {
            if (!message.author.id === message.guild.ownerID) {
                return message.channel.send(`Você não tem permissão para criar novos comandos.`).then(msg => msg.delete({ timeout: 5000 }))
            }
        }
        if (!args[0])
            return message.channel.send(`Você precisa me falar o nome do comando. \n\`criarcomando NomeDoComando RespostaDoComando\``).then(msg => msg.delete({ timeout: 10000 }))

        let commandName = args[0].toLowerCase()
        if (commandName.length > 10)
            return message.channel.send(`O comando só pode ter no máximo 10 letras`).then(msg => msg.delete({ timeout: 5000 }))

        let commandResponse = args.slice(1).join(" ")
        if (!commandResponse)
            return message.channel.send(`Você precisa me dizer a resposta pro seu comando. \
Exemplo do comando: \n \`criarcomando Oi Olá\``).then(msg => msg.delete({ timeout: 10000 }))

        let database = db.get(`guildConfigurations_${message.guild.id}.commands`)
        if (database && database.find(x => x.name === commandName.toLowerCase())) {
            return message.channel.send(`Este comando já foi adicionado neste servidor`).then(msg => msg.delete({ timeout: 5000 }))
        }

        let data = {
            name: commandName,
            response: commandResponse
        }

        db.push(`guildConfigurations_${message.guild.id}.commands`, data)
        const embed = new MessageEmbed()
            .setTitle(`Comando Adicionado`)
            .setDescription('O comando **' + commandName.toLowerCase() + '** foi adicionado ao servidor!')
            .setColor('YELLOW')

        message.channel.send(embed).then(msg => msg.delete({timeout: 5000}))
    }
}