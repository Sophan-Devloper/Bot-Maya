const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    var embed = new Discord.MessageEmbed()
        .setColor('#D8901B')
        .setTitle(`Link para me adicionar no seu servidor`)
        .addFields(
            {
                name: 'Link direto',
                value: '[Clique aqui](https://discord.com/api/oauth2/authorize?client_id=821471191578574888&permissions=8&scope=bot)',
                inline: true
            },
            {
                name: 'QR Code',
                value: '`-qrinvite`',
                inline: true
            }
        )
    await message.channel.send(embed)
}