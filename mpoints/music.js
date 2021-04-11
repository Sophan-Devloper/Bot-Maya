const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
      const adm = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
      return message.channel.send(adm)
    }

    const embed = new Discord.MessageEmbed()
        .setColor('#D8901B')
        .setTitle(`Link para adicionar minha irmazinha`)
        .addFields(
            {
                name: 'Link direto',
                value: '[Clique aqui](https://discord.com/api/oauth2/authorize?client_id=822490782329733150&permissions=8&scope=bot)',
                inline: true
            }
        )
    return message.channel.send(embed)
}