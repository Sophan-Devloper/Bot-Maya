exports.run = (client, message, args) => {
message.channel()

  if (!message.member.hasPermission("MANAGE_CHANNELS")) {

    message.channel.send('Você não tem permissão para usar este comando.').then(msg => msg.delete({ timeout: 5000 }))
    return
  }

  let channel = message.guild.channels.cache.find(c => c.name === args[0]) || message.guild.channels.cache.get(args[0]) || message.mentions.channels.first()
  if (!channel) channel = message.channel;

  let check = channel.permissionsFor(message.guild.id)
  if (!check.has("SEND_MESSAGES")) {
    channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: true,
    }).then(() => {message.channel.send(`${message.author.username} abriu o canal!`)})
  }

  if (check.has("SEND_MESSAGES")) {
    channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false,
    }).then(() => {message.channel.send(`${message.author.username} fechou o canal!`)})
  }

  if (channel.type === "voice" || channel.type === "category") return message.channel.send("Isso é um canal de voz, não posso fechar ele. Recomendo usar o comando Mute.").then(msg => msg.delete({timeout: 5000}))

  channel.updateOverwrite(message.guild.id, {
    SEND_MESSAGES: false,
  }).then(() => {
    message.channel.send('FECHADO!')
  })
}

module.exports.help = {
  name: "lockchannel",
  usage: 'Lock a channel down.',
}