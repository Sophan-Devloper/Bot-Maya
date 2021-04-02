const db = require("quick.db")
const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    message.delete()

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    const help = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('♠️ ♥️ 21 Pontos - Blackjack ♣️ ♦️')
        .setDescription('O Blackjack é um jogo simple.\nSeu objetivo é atingir 21 pontos na soma das cartas, se passar disso, você perde.')
        .addFields(
            {
                name: '♦️ Como apostar?',
                value: 'Digite `' + prefix + 'bj` ou `' + prefix + 'blackjack` seguido do valor que você deseja apostar. Exemplo: `' + prefix + 'blackjack 150`.\nVale lembrar que o valor deve estar na sua carteira. Se estiver no banco, basta `' + prefix + 'sacar` o valor.'
            },
            {
                name: '♣️ Como jogar?',
                value: 'No início, você e eu começaremos com 2 cartas, você começa jogando. Lembrando que o objetivo é atingir 21 pontos na soma das cartas. Se você achar que precisa comprar mais cartas, você digita `C`, se quiser finalizar, digite `F`'
            },
            {
                name: '♥️ Cartas',
                value: 'No baralho há 52 cartas, sendo 13 de cada naipe diferente. Os pontos são somados pelo número de cada carta, as cartas `J`, `Q`, `K` valem 10 pontos cada. Sendo assim, se você tiver 15 pontos e comprar um `J`, você fica com 25 pontos e perde o jogo. Cuidado na compra das cartas.'
            },
            {
                name: '♠️ Vitória e Derrota',
                value: 'Vitória: Você recebe o dobro do valor apostado.\nDerrota: O valor apostado vai para o meu banco.'
            }
        )
    return message.channel.send(help)
}