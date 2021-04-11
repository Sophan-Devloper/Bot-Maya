exports.run = async (client, message, args) => {
   message.delete()
   return message.channel.send('Em breve').then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
}