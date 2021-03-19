const figlet = require('figlet')

module.exports = {
    name: "ascii",
    description: "Converts text to ascii",

    async run (client, message, args){
      message.delete()

        if(!args[0]) 
            return message.channel.send('Ei, o que é para colocar em ASCII? (Escreva um texto pequeno, uma ou duas palavras)').then(msg => msg.delete({timeout: 5000}))

        msg = args.join(" ")
        figlet.text(msg, function (err, data){
            if(err){console.dir(err)}

            message.channel.send('```' + data + '```').then(msg => msg.delete({timeout: 5000}))
        })}}