const Discord = require('discord.js')
const translate = require('@iamtraction/google-translate')

exports.run = async (client, message, args) => {

    let googlepng = 'https://i.imgur.com/oZA4FaQ.png'
    let language = args[0]
    let text = args.slice(1).join(" ")
    let question = args.join(" ")

    if (!language)
        return message.channel.send("Coloque a lingua que você deseja traduzir.\n \n`Exemplos`:\nInglês = en\nPortuguês = pt\nFrancês = fr\n...")

    if (language.length !== 2)
        return message.channel.send("Coloque a lingua que você deseja traduzir.\n \n`Exemplos`:\nInglês = en\nPortuguês = pt\nFrancês = fr\n...")

    if (!text)
        return message.channel.send('Você não me disse o que é para eu traduzir :/')

    translate(args.slice(1).join(' '), { to: language }).then(res => {
        const translateEmbed = new Discord.MessageEmbed()
            .setAuthor(`Google Tradutor`, googlepng)
            .setDescription("```css\n" + `${res.text}` + "\n```", false)
            .setColor("#6959CD")
        message.channel.send(translateEmbed)
    }).catch(err => {
        message.channel.send("Eu tive um problema com a tradução.\n`Tente novamente usando o padrão do comando, se o problema persistir, por favor, user o comando de `-sup`")
        console.log(err)
    })
}