module.exports.run = async (client, message, args) => {
  await message.channel.send(`⏳ ${Math.round(client.ws.ping)}ms`)
}