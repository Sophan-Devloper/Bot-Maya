exports.run = async (client, message, args) => {
   

  await message.channel.send('https://discord.gg/JMvXDZHG4H').then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
}