const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
      const adm = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
      return message.inlineReply(adm)
    }
    
    message.delete()
    return message.inlineReply('Comando em reforma').then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
}