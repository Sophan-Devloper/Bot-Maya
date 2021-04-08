const Discord = require('discord.js')

exports.run = async (client, message, args) => {
     

    var Akatsuki = 'https://discord.gg/JMvXDZHG4H'
    var mk = 'https://discord.gg/mx8eMx6'

    const historys = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('📝 Listinha de Servidores TOP\'s')
        .setDescription(`Envie seu servidor no [suporte](https://forms.gle/vtJ5qBqFDd9rL5JU8)`)
        .addFields(
            {
                name: 'Servidores Otakus',
                value: `[:cloud: AKATSUKI](${Akatsuki})`
            },
            {
                name: 'Servidores Super Automatizados',
                value: `[Mystic Kingdom](${mk})`
            }
        )
    return message.channel.send(historys).then(msg => msg.delete({ timeout: 60000 })).catch(err => { return })
}