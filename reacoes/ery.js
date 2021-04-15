const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        const adm = new Discord.MessageEmbed()
          .setColor('#FF0000')
          .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
        return message.inlineReply(adm)
      }

   const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setImage('https://imgur.com/8ee59mw.gif')

   return message.inlineReply(embed)
}

