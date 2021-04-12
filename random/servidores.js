const Discord = require('discord.js')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

    var Akatsuki = 'https://discord.gg/JMvXDZHG4H'
    var mk = 'https://discord.gg/YpFWgJuuUV'

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
    return message.channel.send(historys)
}