module.exports.run = async (client, message, args) => {
  message.delete()
  
  await message.channel.send('pong').then(msg => msg.delete({timeout: 1500})).then(msg => message.channel.send(`⏳ ${Math.round(client.ws.ping)}ms`)).then(msg => msg.delete({timeout: 3000}))
}