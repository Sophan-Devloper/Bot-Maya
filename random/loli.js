const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  message.delete()

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.inlineReply(adm)
  }

  const Random = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setImage('https://imgur.com/RcrfOc3.gif')

  return message.inlineReply(Random).then(msg => msg.delete({ timeout: 6000 })).catch(err => { return })
}