const Canvacord = require("canvacord/src/Canvacord")
const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async (client, message, args) => {
    message.delete()

    let text = args.join(" ")
    if (!text) {
        const notext = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'changemymind Seu texto em diante`')
        return message.channel.send(notext)
    }

    let image = await Canvacord.changemymind(text)
    let ChangeMyMind = new Discord.MessageAttachment(image, "cmm.png")
    return message.channel.send(ChangeMyMind)
}
