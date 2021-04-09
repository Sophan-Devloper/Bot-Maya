const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    var linksupport = 'https://forms.gle/vtJ5qBqFDd9rL5JU8'
    var linkservidor = 'https://discord.gg/mx8eMx6'

    const Support = new Discord.MessageEmbed()
        .setColor('#DCDCDC')
        .setTitle('💬 Centralzinha de Suporte 💬')
        .setURL('https://forms.gle/vtJ5qBqFDd9rL5JU8')
        .setDescription('A Central de Suporte consegue atender a qualquer problema ou crítica que você tenha :heart:')
        .setThumbnail('https://imgur.com/KyjyfRg.gif')
        .addFields(
            {
                name: 'Discord Server',
                value: `[Clique aqui](${linkservidor})`,
                inline: true
            },
            {
                name: 'Desenvolvedor',
                value: 'Rody#3756',
                inline: true
            },
            {
                name: 'Central de Suporte',
                value: `[Clique aqui](${linksupport})`,
                inline: true
            }
        )
    return message.channel.send(`${message.author}`, Support)
}