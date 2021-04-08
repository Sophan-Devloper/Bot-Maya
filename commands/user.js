const Discord = require("discord.js")

exports.run = async (client, message, args) => {
 

  let user = message.mentions.users.first () || client.users.cache.get(args[0]) || message.author
  
await message.channel.send(`${user.tag}`).then(msg => msg.delete({timeout: 8000}))
}