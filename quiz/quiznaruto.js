const Discord = require('discord.js')
const quiz = require('./naruto.json')

exports.run = async (client, message, args) => {
    const item = quiz[Math.floor(Math.random() * quiz.length)]
    const filter = response => {
        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase())
    }

    const pergunta = new Discord.MessageEmbed()
        .setColor('#DCDCDC')
        .setTitle(item.question)
        .setFooter('Responda em até 15 segundos.')

    const quiztime = new Discord.MessageEmbed()
        .setColor('GRAY')
        .setTitle(`MAYA QUIZ TIME!`)
        .setDescription('Prepare-se! Você tem apenas 15 segundos. ~Dattebayo')

    message.channel.send(quiztime).then(msg => msg.delete({ timeout: 5000 })).then(msg => message.channel.send(pergunta)).then(() => {
        message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
            .then(collected => {
                const resposta = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle(`${collected.first().author.username} acertou a pergunta!`)
                message.channel.send(resposta)
            })
            .catch(collected => {
                const timeover = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle(`Ninguém acertou!`)
                    .setDescription('Que pena, o tempo acabou e ninguém acertou.')
                message.channel.send(timeover)
            })
    })
}