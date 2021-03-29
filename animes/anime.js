const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    message.delete()

    const embed = new Discord.MessageEmbed()
        .setColor('#DCDCDC')
        .setTitle('Comandos de Animes')
        .setDescription('Oooi otaku :heart:\nEu também sou muito fã de animes, é sério!\n⠀')
        .addFields(
            {
                name: 'Indicações de Animes',
                value: '`-ind` +2000 Animes',
            },
            {
                name: 'Gifts Sword Art Online',
                value: '`-sao` +30 Animes',
            },
            {
                name: 'Quiz Naruto',
                value: '`-quiznaruto` +15 Perguntas (por enquanto)',
            }
        )
        .setFooter(message.author.tag, message.author.displayAvatarURL())

    message.channel.send(embed).then(msg => msg.delete({ timeout: 25000 })).catch(err => {return})
}