
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
     

   return message.channel.send('Em breve').then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
}