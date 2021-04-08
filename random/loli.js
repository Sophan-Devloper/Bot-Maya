const Discord = require('discord.js')

exports.run = async (client, message, args) => {
     

    const Random = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setImage('https://imgur.com/RcrfOc3.gif')

    return message.channel.send(`Porque está usando este comando ${message.author}?`, Random)
}