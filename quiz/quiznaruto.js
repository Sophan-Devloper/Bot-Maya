const Discord = require('discord.js')
const quiz = require('./naruto.json')

module.exports = {
  name: "Quiz",
  description: "Teste seu conhecimento!",
  category: "fun",

  run: async (bot, message, args) => {

    const item = quiz[Math.floor(Math.random() * quiz.length)]
    const filter = response => {
      return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase())
    }

    const pergunta = new Discord.MessageEmbed()
      .setColor('#DCDCDC')
      .setTitle(item.question)
      .setFooter('15 segundos.')

    const quiztime = new Discord.MessageEmbed()
      .setColor('#DCDCDC')
      .setTitle(`MAYA QUIZ TIME!`)
      .setDescription('Prepare-se! Você tem apenas 15 segundos.')

    message.channel.send(quiztime).then(msg => msg.delete({ timeout: 5000 })).then(msg => msg.channel.send(pergunta)).then(() => {
      message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
        .then(collected => {
          const resposta = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setTitle(`${collected.first().author.username} acertou a pergunta!`)
          message.channel.send(resposta)
        })
        .catch(collected => {
          const timeover = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(`Ninguém acertou!`)
          msg.delete()
          message.channel.send(timeover)
        })
    })
  }
}