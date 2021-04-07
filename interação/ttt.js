const TicTacToe = require('discord-tictactoe');
const game = new TicTacToe({ language: 'pt' })

exports.run = async (client, message, args) => {
    game.handleMessage(message)
}