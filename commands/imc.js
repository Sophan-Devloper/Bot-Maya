const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async (client, message, args) => {

    const weight = args[0]
    const height = args[1]

    if (!args[1]) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) { prefix = "-" }

        const imcError = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'imc Peso Altura`' + '\n \n**Atenção**\nPeso em **Kilogramas** e Altura em **Centimentros**\n \n')
            .addFields(
                {
                    name: 'Exemplo',
                    value: `${prefix}imc 70 65`
                },
                {
                    name: 'Exemplo 2',
                    value: `${prefix}imc 78.8 185`
                }
            )

        return message.channel.send(imcError)
    }

    if (isNaN(args[0])) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) { prefix = "-" }

        const imcError = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'imc Peso Altura)`' + '\n \nAtenção: Peso em **Kilogramas** e **Altura** em centimentros')
            .addFields(
                {
                    name: 'Exemplo',
                    value: `${prefix}imc 70 65`
                },
                {
                    name: 'Exemplo 2',
                    value: `${prefix}imc 78.8 185`
                }
            )

        return message.channel.send(imcError)
    }

    if (isNaN(args[1])) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) { prefix = "-" }

        const imcError = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'imc Peso Altura`' + '\n \nAtenção: Peso em **Kilogramas** e **Altura** em centimentros')
            .addFields(
                {
                    name: 'Exemplo',
                    value: `${prefix}imc 70 65`
                },
                {
                    name: 'Exemplo 2',
                    value: `${prefix}imc 78.8 185`
                }
            )

        return message.channel.send(imcError)
    }

    const imc = (weight / ((height * height) / 10000)).toFixed(2)

    let category;
    if (imc < 18.5) category = "Abaixo do peso"
    if (imc > 24.9) category = "Acima do peso"
    if (imc > 30) category = "Obesidade"
    if (imc < 24.9 && imc > 18.5) category = "Padrão"

    const embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle(`📉 ${message.author.username}\'s IMC`)
        .addField('Peso', weight)
        .addField('Altura', height)
        .addField('IMC', imc)
        .addField('Categoria', category)

    await message.channel.send(embed)
}