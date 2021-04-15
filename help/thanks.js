const Discord = require('discord.js')

exports.run = async (client, message, args) => {

     if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
          const adm = new Discord.MessageEmbed()
               .setColor('#FF0000')
               .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
          return message.inlineReply(adm)
     }

     const Thanks = new Discord.MessageEmbed()
          .setColor('GREEN')
          .setThumbnail(client.user.displayAvatarURL())
          .setTitle(':hearts: OBRIGADA a todos que ajudaram! :hearts:')
          .setURL('https://github.com/rodycouto/MayaCommands/blob/main/README.md#-maya-assistence')
          .addFields(
               {
                    name: 'Listinha de pessoas que ajudaram',
                    value: '[Clique aqui pra ver a listinha](https://github.com/rodycouto/MayaCommands/blob/main/README.md#-maya-assistence)'
               }
          )
     return message.inlineReply(Thanks)
}