const Discord = require('discord.js');

exports.run = async (client, message, args) => {
message.delete()

const Random = new Discord.MessageEmbed()
    .setImage('https://imgur.com/RcrfOc3.gif')

message.channel.send(`Porque está usando este comando ${message.author}?`).then(msg => msg.delete({timeout: 8000}))
await message.channel.send(Random).then(msg => msg.delete({timeout: 8000}))
}