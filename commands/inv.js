const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
    
    var embed = new Discord.MessageEmbed()
        .setColor('#D8901B')
        .setDescription('❤️ [Clique aqui para me adicionar](https://discord.com/api/oauth2/authorize?client_id=821471191578574888&permissions=8&scope=bot)')
    return message.channel.send(`${message.author}, obrigada por querer me adicionar no seu servidor.`, embed)
}