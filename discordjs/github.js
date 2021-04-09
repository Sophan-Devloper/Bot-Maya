const Discord = require("discord.js")
const moment = require('moment')

exports.run = async (client, message, args) => {
     
    var gitlink = "https://github.com/rodycouto/Maya-GitHub.git"
    var linksupport = "https://docs.google.com/forms/d/e/1FAIpQLSeEMnYYmlaVv_nG4PBdPD8CA6Q-MdBi-9KW_xVrqjs2MG5AqQ/viewform?usp=sf_link"
    var gitdance = "https://imgur.com/C78LrtY.gif"

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member || message.mentions.users.first()
    const db = require('quick.db')
    var level = await db.fetch(`level_${user.id}`)
    if (level < 10) {
        const block = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('🚫  Libere no level 10')
        return message.channel.send(block)
    }

    const embed = new Discord.MessageEmbed()
        .setColor('#DCDCDC')
        .setTitle('Repositório Maya no GitHub')
        .setDescription('Caso você queira acesso ao código fonte da Maya, ele está disponível no Github\n⠀⠀⠀⠀⠀⠀⠀⠀')
        .setThumbnail(gitdance)
        .addFields(
            {
                name: 'Github',
                value: `[Clique aqui](${gitlink})`,
                inline: true
            },
            {
                name: 'Programador',
                value: 'Rody#3756',
                inline: true
            },
            {
                name: 'Suporte Maya',
                value: `[Clique aqui](${linksupport})`,
                inline: true
            }
        )
        .setFooter('Apoio Maya - Developers')

    return message.channel.send(embed)
}