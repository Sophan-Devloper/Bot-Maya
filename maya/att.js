const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const news = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('📌 Novas atualizações - Maya Package')
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription('Aqui você pode ver todas as minhas atualizações, tudo o que acontece comigo, vem para cá :hearts:')
        .addFields(
            {
                name: '📤 Fora do ar',
                value: 'changemymind, tictactoe, battleship, anime, esmola, loja'
            },
            {
                name: '📥 Novos Comandos',
                value: 'senpai, cal, imc, translate, levelsystem, random, affect, gay, lutar, votar, dailyxp, new, cobrar, crime, sacar, depositar, rp, setstatus, quiz, quiznaruto, advice, conselho, trig, servidores, roll, history, nota'
            },
            {
                name: '⚙️ Moderação',
                value: 'lockcommands, unlockcommands, sorteio, criarcomando, deletarcomando, autorole, clonechannel, kickvoice, move, lockdown, send, veja o resto em `' + prefix + 'config`'
            },
            {
                name: '📝 Tradução',
                value: '51 comandos suportam tradução - withdraw/sacar - invite/convidar - etc'
            },
            {
                name: '💠 Sistemas',
                value: 'AFK Global Command, Level/Economy atualizado para interservidor.'
            }
        )
    return message.channel.send(news)
}