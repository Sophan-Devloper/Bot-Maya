const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#E27660')
    .setImage('https://imgur.com/O1rm4M1.png')
    return message.channel.send(embed)
}