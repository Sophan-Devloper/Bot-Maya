const Discord = require('discord.js')
const canvacord = require('canvacord')

exports.run = async (client, message, args) => {

    let user = message.mentions.users.first() ||  message.author
    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' })
    let image = await canvacord.Canvas.trigger(avatar)
    let attachment = new Discord.MessageAttachment(image, "triggered.gif")
    return message.channel.send(attachment)
}