const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    var embed = new Discord.MessageEmbed()
        .setColor('#D8901B')
        .setTitle(`Link para adicionar minha irmazinha`)
        .addFields(
            {
                name: 'Link direto',
                value: '[Clique aqui](https://discord.com/api/oauth2/authorize?client_id=822490782329733150&permissions=8&scope=bot)',
                inline: true
            },
            {
                name: 'QR Code',
                value: '`-qrmusic`',
                inline: true
            }
        )
    return message.channel.send(embed)
}