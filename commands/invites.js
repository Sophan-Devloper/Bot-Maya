const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {

    message.guild.fetchInvites().then((invites) => {
        const inviteCounter = {}

        invites.forEach((invite => {
            const { uses, inviter } = invite
            const { username, discriminator } = inviter

            const name = `${inviter}`

            inviteCounter[name] = (inviteCounter[name] || 0) + uses
        }))

        let replyText = new MessageEmbed()
            .setTitle(`📩 Convites ${message.guild.name}`)
            .setDescription(` \n`)
            .setColor("BLUE")
            .setFooter('Apareceu o ID? O membro saiu do servidor')

        const sortedInvites = Object.keys(inviteCounter).sort((a, b) => inviteCounter[b] - inviteCounter[a])

        if (sortedInvites.length > 5) sortedInvites.length = 5
        else if (sortedInvites.length > 5) sortedInvites.length = sortedInvites.length


        for (const invite of sortedInvites) {
            const count = inviteCounter[invite]
            replyText.description += `\n${invite} convidou ${count} membro(s).`
        }
        message.channel.send(replyText)
    })
}