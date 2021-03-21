const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete()

  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.channel.send(`Hey ${message.author.username}, você não tem todo esse poder :v`).then(msg => msg.delete({ timeout: 5000 }))

  const deleteCount = parseInt(args[0], 10)
  if (!deleteCount)
    return message.channel.send('Poxa... Me fala um número').then(msg => msg.delete({ timeout: 5000 }))

  if (isNaN(deleteCount))
    return message.channel.send('Me fala um número entre 1~99, tá bom?').then(msg => msg.delete({ timeout: 6000 }))

  if (deleteCount < 1 || deleteCount > 99)
    return message.channel.send("Ei, o limite que o Discord permite excluir é entre 1~99 mensagens.").then(msg => msg.delete({ timeout: 6000 }))

  const fetched = await message.channel.messages.fetch({ limit: deleteCount + 1 })

  message.channel.bulkDelete(fetched)

  message.channel.send(`Prontinho, eu limpei ${deleteCount} mensagens.`).then(msg => msg.delete({ timeout: 5000 }))
}