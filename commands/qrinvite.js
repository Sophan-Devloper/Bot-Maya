const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete()
    
    var qr = 'https://imgur.com/BK9YXGA.png'
    var embed = new Discord.MessageEmbed()
        .setColor('#D8901B')
        .setImage(qr)
    await message.channel.send(embed)
}