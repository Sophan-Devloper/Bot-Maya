const canvacord = require('canvacord/src/Canvacord')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    const member = message.mentions.users.first() || message.author;
    const memberAvatar = member.displayAvatarURL({ dynamic: false, format: 'png' })

    const image = await canvacord.affect(memberAvatar)
    const affect = new Discord.MessageAttachment(image, 'affect.png')
    return message.channel.send(`${message.author}`, affect)
}