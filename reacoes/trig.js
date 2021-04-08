const Discord = require('discord.js')
const canvacord = require('canvacord')

module.exports.run = async (client, message, args) => {
     

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' })
    let image = await canvacord.Canvas.trigger(avatar)
    let attachment = new Discord.MessageAttachment(image, "triggered.gif")
    message.channel.send(attachment).then(msg => msg.delete({timeout: 10000})).catch(err => { return })
}