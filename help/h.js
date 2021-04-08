const Discord = require('discord.js')

exports.run = async (client, message, args) => {
     

    var helpgit = 'https://github.com/rodycouto/MayaCommands/blob/main/README.md'
    var linksupport = 'https://forms.gle/vtJ5qBqFDd9rL5JU8'
    var linkservidor = 'https://discord.gg/mx8eMx6'

    const newhelp = new Discord.MessageEmbed()
        .setColor('#CD853F')
        .setTitle('⭐ Centralzinha de Ajuda da Maya ⭐')
        .setDescription(`:tools: [Comandos](${helpgit}) | ☎️ [Suporte](${linksupport}) | 🧩 [Meu servidor](${linkservidor})`)

    return message.channel.send(newhelp)
}