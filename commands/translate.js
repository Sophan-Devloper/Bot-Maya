const Discord = require('discord.js')
const translate = require('@iamtraction/google-translate')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let googlepng = 'https://i.imgur.com/oZA4FaQ.png'
    let language = args[0]
    let text = args.slice(1).join(" ")

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const lan = new Discord.MessageEmbed()
        .setColor('#FF0000') // Red
        .setTitle('Siga o formato correto')
        .setDescription('`' + prefix + 'translate en/pt/fr/lt A frase que deseja traduzir`')

    if (!language)
        return message.channel.send(lan)

    if (language.length !== 2)
        return message.channel.send(lan)

    if (!text)
        return message.channel.send(lan)

    translate(args.slice(1).join(" "), { to: language }).then(res => {
        const translateEmbed = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setAuthor(`Google Tradutor`, googlepng)
            .setDescription("```css\n" + `${res.text}` + "\n```", false)
            .setColor("#6959CD")
        message.channel.send(translateEmbed)
    }).catch(err => {
        message.channel.send("Eu tive um problema com a tradução.\n`Tente novamente usando o padrão do comando, se o problema persistir, por favor, user o comando de `-sup`")
        console.log(err)
    })
}