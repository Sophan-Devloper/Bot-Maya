const Discord = require('discord.js')

exports.run = async (client, message, args) => {
     

    const nop = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Hey, espera. Não faça isso.')

    return message.channel.send(nop).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
}