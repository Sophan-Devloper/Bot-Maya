exports.run = async (client, message, args) => {

  const rody = message.author.id === ("451619591320371213")
  if (!rody) {
    message.delete()
    return message.channel.send('⚠️ Este comando está em criação.').then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
  }
}