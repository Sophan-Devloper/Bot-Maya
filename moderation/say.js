const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  message.delete()

  if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply("você não pode me usar para mandar mensagens.").then(msg => msg.delete({ timeout: 5000 }))

  if (!args[0])
    return message.channel.send('O que você quer que eu diga?')

  const sayMessage = args.join(' ')
  message.channel.send(sayMessage + `\n \n- *${message.author.username}*`)
}