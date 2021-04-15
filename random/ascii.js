const figlet = require('figlet')

exports.run = async (client, message, args) => {

    if (!args[0]) {
        return message.inlineReply('Ei, o que é para colocar em ASCII? (Escreva um texto pequeno, uma ou duas palavras)')
    }

    if (args[4]) {
        return message.inlineReply('No máximo 4 palavras, por favor. Pelo bem nos nossos olhos')
    }

    msg = args.join(" ")
    figlet.text(msg, function (err, data) {
        if (err) { console.dir(err) }

       await message.inlineReply('```' + data + '```')
    })
}