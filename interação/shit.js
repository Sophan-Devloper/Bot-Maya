canvacord = require('canvacord');
const Canvacord = require('canvacord/src/Canvacord');
const { MessageAttachment, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'shit',
    description: "\"Eww. Pisei na merda.\" You get it now?",
    usage: "?shit <mention>",
    run: async(client, message, args) => {
        const member = message.mentions.users.first()
        const mentionedMemberAvatar = member.displayAvatarURL({dynamic: false, format: "png"})

        if(!member) {
            const shitError = new MessageEmbed()
            .setDescription(`Marca alguém poxa kkkkk esse comando não é legal com você mesmo`)
            .setColor("RED")
            return message.channel.send(shitError)
        }

        let image = await Canvacord.shit(mentionedMemberAvatar)

        let shit = new MessageAttachment(image, "shit.png")

        message.channel.send(shit)
    }
}