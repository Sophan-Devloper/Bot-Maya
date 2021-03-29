const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'imc',
    description: "Calcule seu imc",
    usage: "imc <peso> <altura>",
    aliases: [],
    run: async (client, message, args) => {

        const weight = args[0]
        const height = args[1]

        if (!args[0])
            return message.channel.send('Indice de Massa Corporal\n Por favor, me diga seu peso e altura para que eu possa te dizer o seu IMC\n \nExemplo: `imc Peso Altura`').then(msg => msg.delete({ timeout: 7000 })).catch(err => { return })
        if (!args[1]) {
            const imcError = new MessageEmbed()
                .setDescription('Você tem que colocar seu peso e altura. Siga este formato.\
\n\n(Format: imc Peso Altura)\n\nObs: Peso é em Kilogramas, exemplo: 75.5, 80\n\nAltura é em centimentros, exemplo: 170, 175')
                .setColor("BLUE")

            return message.channel.send(imcError).then(msg => msg.delete({ timeout: 7000})).catch(err => { return })
        }

        const imc = (weight / ((height * height) / 10000)).toFixed(2);

        let category;
        if (imc < 18.5) category = "Abaixo do peso"
        if (imc > 24.9) category = "Acima do peso"
        if (imc > 30) category = "Obesidade"
        if (imc < 24.9 && imc > 18.5) category = "Padrão"

        const embed = new MessageEmbed()
            .setTitle(`${message.author.username}\'s IMC`)
            .addField('Peso', weight)
            .addField('Altura', height)
            .addField('IMC', imc)
            .addField('Categoria', category)
            .setColor("#DCDCDC")

        message.channel.send(embed)
    }
}