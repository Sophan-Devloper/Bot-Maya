
const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    message.delete()

    var linkgit = 'https://github.com/rodycouto/MayaCommands/blob/main/Exemplos/comojogarbj.md'

    const help = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('♠️ ♥️ 21 Pontos - Blackjack ♣️ ♦️')
        .setDescription(`Olhe tudo sobe o Blackjack [cliquando aqui](${linkgit})`)
    return message.channel.send(help).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })

}