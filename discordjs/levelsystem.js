const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    message.delete()

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member || message.mentions.users.first()
    const db = require('quick.db')
    var level = await db.fetch(`level_${user.id}`)
    if (level < 15) {
        const block = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('🚫  Libere no level 15')
        return message.channel.send(block).then(msg => msg.delete({ timeout: 4000 }))
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
        message.channel.send("```js    function xp(message) {\n if (message) {\n  let xp = db.add(`xp_${message.author.id}`, 2)\n let level = Math.floor(0.5 * Math.sqrt(xp))\n let lvl = db.get(`level_${message.author.id}`) || db.set(`level_${message.author.id}`, 1)\n if (level > lvl) {\n let newLevel = db.set(`level_${message.author.id}`, level)\n let xpchannel = db.get(`xpchannel_${message.guild.id}`)\n if (xpchannel === null) { return }\n \n if (!db.get(`xpchannel_${message.guild.id}`)) { return }\n if (client.channels.cache.get(xpchannel)) {\n const newlevel = new Discord.MessageEmbed()\n .setColor('GREEN')\n .setDescription(`:tada: ${message.author}, você subiu para o level ${newLevel}!`)\n client.channels.cache.get(xpchannel).send(newlevel)\n }\n }\n }\n }```")
    }

    message.channel.send(embed)
    setTimeout(code, 1000)
}