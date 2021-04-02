const Canvacord = require("canvacord/src/Canvacord")
const Discord = require("discord.js")

module.exports = {
    name: 'slap',
    description: "Slap Someone, What else did you expect?",
    usage: '?slap <mention>',
    run: async (client, message, args) => {
        const member = message.mentions.users.first()
        const mentionedMemberAvatar = member.displayAvatarURL({ dynamic: false, format: "png" })

        if (!member) {
            let prefix = db.get(`prefix_${message.guild.id}`)
            if (prefix === null) prefix = "-"
            const n = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Siga o formato')
                .setDescription('`' + prefix + 'slaap @user`')

            return message.channel.send(n)
        }
        const messageAuthorAvatar = message.author.displayAvatarURL({ dynamic: false, format: "png" })
        let image = await Canvacord.slap(messageAuthorAvatar, mentionedMemberAvatar)
        let slap = new Discord.MessageAttachment(image, "slap.png")

        message.channel.send(slap)
    }
}