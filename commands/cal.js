const Discord = require('discord.js')
const math = require('mathjs')

exports.run = async (client, message, args) => {

    if (!args[0]) {
        const noargs = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Formato suportado')
            .setDescription('`Adição: 10 + 10`\n`Divisão: 10 / 10`\n`Subtração: 10 - 10`\n`Multiplicação: 10 * 10`')
        return message.channel.send(noargs)
    }

    let resp
    try {
        resp = math.evaluate(args.join(" "))
    } catch (e) {
        const noargs = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Por favor, diga uma conta válida')
            .setDescription('Exemplo: 10 + 10\nExemplo: 10 / 10\nExemplo: 10 - 10\nExemplo: 10 * 10')
        return message.channel.send(noargs)
    }

    const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .addField('Conta', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Resultado', `\`\`\`css\n${resp}\`\`\``)
    return message.channel.send(embed)
}