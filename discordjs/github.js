const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    message.delete()

    var gitlink = "https://github.com/rodycouto/Maya-GitHub.git"
    var linksupport = "https://docs.google.com/forms/d/e/1FAIpQLSeEMnYYmlaVv_nG4PBdPD8CA6Q-MdBi-9KW_xVrqjs2MG5AqQ/viewform?usp=sf_link"
    var gitdance = "https://imgur.com/hd5bqo9.gif"
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

    message.channel.send(embed).then(m => m.delete({ timeout: 60000 }))
}