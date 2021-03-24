const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'deletecommand',
    description: "Deletes a custom command.",
    usage: "?deletecommand <Command Name>",
    aliases: ['delcmd'],
    run: async(client, message, args) => {

        if(!message.member.hasPermission('ADMINISTRATOR')) {
            if(!message.author.id === message.guild.ownerID) {
                return message.channel.send(`Você não tem permissão para criar novos comandos.`).then(msg => msg.delete({ timeout: 5000 }))
            }
        }

        if(!args[0]) 
        return message.channel.send(`Você precisa me falar o nome do comando. \n\`deletarcomando NomeDoComando RespostaDoComando\``).then(msg => msg.delete({ timeout: 10000 }))
        let commandName = args[0].toLowerCase()

        let database = db.get(`guildConfigurations_${message.guild.id}.commands`)
        if(database) {
            let data = database.find(x => x.name === commandName.toLowerCase())
            if(!data) return message.channel.send(`Esse comando não existe: \`${commandName}\``).then(msg => msg.delete({ timeout: 5000 }))

            let value = database.indexOf(data)
            delete database[value]

            var filter = database.filter(x => {
                return x != null && x != ''
            })

            db.set(`guildConfigurations_${message.guild.id}.commands`, filter)
            const embed = new MessageEmbed()
            .setTitle(`Comando Deletado!`)
            .setDescription(`Deletei o comando **${commandName}** com sucesso!`)
            .setColor('BLUE')

            return message.channel.send(embed).then(msg => msg.delete({ timeout: 5000}))
        }
        else {
            return message.channel.send(`Eu não achei esse comando.`)
        }
    }
}