const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

    var helpgit = 'https://github.com/rodycouto/MayaCommands/blob/main/README.md'
    var linksupport = 'https://forms.gle/vtJ5qBqFDd9rL5JU8'
    var linkservidor = 'https://discord.gg/mx8eMx6'
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    const newhelp = new Discord.MessageEmbed()
        .setColor('#CD853F')
        .setTitle('⭐ Centralzinha de Ajuda da Maya ⭐')
        .setDescription(`:tools: [Comandos](${helpgit}) | ☎️ [Suporte](${linksupport}) | 🧩 [Meu servidor](${linkservidor})`)
        .setFooter(`New System: ${prefix}afkhelp | ${prefix}new`)

    return message.channel.send(`${message.author}`, newhelp)
}