const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
        .setColor("#DCDCDC")
        .setTitle('💖 Maya Family System')
        .setDescription('Você pode aumentar a sua familia, graça ao meu sistema interserver, você pode ter uma em vários servidores.')
        .addFields(
            {
                name: 'Comandos',
                value: '\n`-family1` `-family2` `-family3` `-family4` `-family5` Um para cada vaga no seu perfil.\n \n`-nofamily1` `-nofamily2` `-nofamily3` `-nofamily4` `-nofamily5` Um para cada vaga no perfil.'
            }
        )
        .setFooter(message.author.tag, message.author.displayAvatarURL())
    return message.inlineReply(embed)
}