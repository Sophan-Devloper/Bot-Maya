const Discord = require('discord.js')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.inlineReply(adm)
  }

    var list = [
        'https://imgur.com/vWefPeq.gif',
        'https://imgur.com/eyP7fdy.gif',
        'https://imgur.com/QwkU36H.gif',
        'https://imgur.com/1OGayCA.gif',
        'https://imgur.com/M1bhUTr.gif',
        'https://imgur.com/wkG8DQP.gif',
        'https://imgur.com/YsPeGCr.gif',
        'https://imgur.com/aoDtLiN.gif'
    ]

    var gif = list[Math.floor(Math.random() * list.length)]

    const ClapEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription(`${message.author.username} esta rindo`)
        .setImage(gif)
    return message.inlineReply(ClapEmbed)
}