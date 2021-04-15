exports.run = async (client, message, args) => {
  await message.inlineReply(`⏳ ${Math.round(client.ws.ping)}ms`)
}