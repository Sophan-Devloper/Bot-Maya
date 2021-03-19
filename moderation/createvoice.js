const Discord = require('discord.js')

module.exports.run = (client, message, args) => {
    message.delete()

    if(!message.member.hasPermission('MENAGE_CHANNELS'))
        return message.channel.send('Você não tem todo esse poder para criar canais, desculpe.').then (msg => msg.delete({timeout: 5000}))
    
    if(!args[0])
        return message.channel.send('Por favor, me diga o nome do canal de voz que você quer criar').then(msg => msg.delete({timeout: 6000}))
    
        message.guild.channels.create(args.slice(0).join(" "),
        {type: 'voice'})
        
    message.channel.send('Eu criei o canal que você pediu com sucesso! :hearts:').then(msg => msg.delete({timeout: 5000}))
}