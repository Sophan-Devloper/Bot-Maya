const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
      const adm = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
      return message.inlineReply(adm)
    }

    var list = [
        'https://i.pinimg.com/originals/78/72/6a/78726a6ec74ba506137966e9f9250bd1.gif',
        'https://i.pinimg.com/originals/b1/b8/94/b1b8947fbb9e61d279125f678ff263ab.gif',
        'https://imgur.com/OT0UPBi.gif',
        'https://imgur.com/GU8ibL7.gif',
        'https://imgur.com/I6sD8Lx.gif',
        'https://imgur.com/enjWiGi.gif',
    ]

    var gif = list[Math.floor(Math.random() * list.length)]

    const Itachi = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription('Meu senpai é o Itachi :heart:')
        .setImage(gif)
    return message.inlineReply(Itachi)
}