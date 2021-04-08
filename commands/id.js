const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    var user = message.mentions.members.first()

    if (!isNaN(args[0]))
        return message.channel.send('Ué? Números não são usuários... cadê o usuário?\n \n`-id @user`').then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })

    if (user) {
        var idembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`**Usuário:** ${user.user.username}\n**ID:** \`${user.user.id}\``)
        return message.channel.send(idembed).then(msg => msg.delete({ timeout: 12000 })).catch(err => { return })
    }

    if (!args[0]) {
        var idembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`**Usuário:** ${message.author.username}\n**ID:** \`${message.author.id}\``)
        return message.channel.send(idembed).then(msg => msg.delete({ timeout: 12000 })).catch(err => { return })
    }

    if (isNaN(args[0])) {
        return message.channel.send(`${message.author.username}, por favor. Mencione um usuário do servidor.`).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }
}