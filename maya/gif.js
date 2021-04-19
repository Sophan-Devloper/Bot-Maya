const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    const canal = client.channels.cache.get('830982931937624114')

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    let tema = args[0]
    let link = args[1]

    var noargs = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('📢 Envie Gifs')
        .setDescription('Por causa de tantos comandos e TANTOS gifs, ficou ruim para apenas uma pessoa pegar todos os gifs, então, este comando foi feito.\n \nEnvie gifs pra Maya! Só seguir os requisitos.')
        .addField('Requisitos', '**NADA** pornografico ou de cunho criminoso.\nLink do imigur\nFale para qual tema você quer que eu coloque seu gif')
        .addField('Comando exemplo', '`' + prefix + 'gif Naruto https://imgur.com/D5KT1S`')
        .setFooter('O Gif será enviado para o meu servidor, você pode encontra-lo no comando ' + prefix + 'help')

    var formato = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Por favor, siga o formato correto')
        .setDescription('`' + prefix + 'gif Naruto LinkDoImigur`\n' + '`' + prefix + 'gif Naruto https://imgur.com/D5KT1S`')

    var newgif = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('📢 Novo Gif')
        .addField('Enviado por', message.author, true)
        .addField('Servidor', message.guild.name, true)
        .addField('Tema', tema)
        .addField('Link do Gif', link)

    if (!tema) { return message.inlineReply(noargs) }
    if (!link) { return message.inlineReply(formato) }
    if (args[2]) { return message.inlineReply(formato) }

    canal.send(newgif)
    return message.inlineReply('Gif enviado com sucesso!')
}