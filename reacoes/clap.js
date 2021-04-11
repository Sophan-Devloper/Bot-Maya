const Discord = require('discord.js')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

    var list = [
        'https://imgur.com/LVVGS8f.gif',
        'https://imgur.com/1gfMJ0g.gif',
        'https://imgur.com/5Bd9CSP.gif',
        'https://imgur.com/5Bd9CSP.gif',
        'https://imgur.com/2W8WpVO.gif',
        'https://imgur.com/trGqji4.gif',
        'https://imgur.com/cAROAx9.gif',
        'https://imgur.com/q4HSdKN.gif',
        'https://imgur.com/75hPNpP.gif',
        'https://imgur.com/TLu9P1c.gif',
        'https://imgur.com/KYqsOsT.gif'
    ]

    var gif = list[Math.floor(Math.random() * list.length)]

    const ClapEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription(`${message.author.username} aplaudiu isso!`)
        .setImage(gif)
    return message.channel.send(ClapEmbed)
}