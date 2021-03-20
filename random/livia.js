const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    message.delete()
    message.channel.send('gay').then(msg => msg.delete({timeout: 500}))
}