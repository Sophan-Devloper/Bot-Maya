const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member || message.mentions.users.first()
    const db = require('quick.db')
    var level = await db.fetch(`level_${user.id}`)
    if (level < 15) {
        const block = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('🚫  Libere no level 15')
        return message.channel.send(block)
    }

    var linkserver = 'https://discord.gg/mx8eMx6'
    const embed = new Discord.MessageEmbed()
        .setColor('#1e3ddf')
        .setTitle('BETA - Dicas da Maya - CommandFile')
        .setDescription('Permite você usar comandos em outras pastas e diminuir o tamanho do index')
        .addFields(
            {
                name: 'Como usar',
                value: 'Coloque este código no index.',
                inline: true
            },
            {
                name: 'Quer um support?',
                value: `[Clique aqui](${linkserver})`,
                inline: true
            }
        )
        .setFooter('Apoio Maya - Developers')

    function code() {
        message.channel.send("```js\n    try {\n      const commandFile = require(`./NOME DA PASTA AQUI/${command}.js`)\n      commandFile.run(client, message, args)\n    } catch (err) { }\n```")
    }

    message.channel.send(embed)
    setTimeout(code, 1000)
}