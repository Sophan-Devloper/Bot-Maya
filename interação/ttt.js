const TicTacToe = require('discord-tictactoe')
const game = new TicTacToe({ language: 'pt' })

exports.run = async (client, message, args) => {

    var user = message.mentions.bot
    if (user) {
        const nouser = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Bots não jogam.')
        return message.channel.send(nouser)
    } else {
        game.handleMessage(message)
    }
}