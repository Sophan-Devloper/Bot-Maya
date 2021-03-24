const Canvacord = require("canvacord/src/Canvacord")
const { MessageAttachment } = require("discord.js")
const db = require('quick.db')

module.exports = {
    name: 'changemymind',
    description: "Sends a Customized Change My Mind meme",
    usage: "?changemymind <text>",

    run: async (client, message, args) => {
        message.delete()

        let text = args.join(" ")
        if (!text)
            return message.channel.send("Você esqueceu do texto.\n \n`-changemymind` Seu texto logo depois")

        let image = await Canvacord.changemymind(text)

        let ChangeMyMind = new MessageAttachment(image, "cmm.png")

        message.channel.send(ChangeMyMind)
    }
}