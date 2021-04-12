const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    var star = '<:estrelinha:831161441847345202>'

    const loja = new Discord.MessageEmbed()
        .setColor('YELLOW')
        .setTitle('🏪 Lojinha Maya 24h')
        .setDescription('Aqui na Lojinha Maya, você pode comprar várias coisas para ter acesso a comandos e e funções incriveis.')
        .addFields(
            {
                name: 'Itens Disponiveis',
                value: '🎣 `Vara de Pesca` 5.000 <:estrelinha:831161441847345202>MPoints\n🔫 `Arma` 100.000 <:estrelinha:831161441847345202>MPoints\n🪱 `Isca` 10 <:estrelinha:831161441847345202>\n⛏️ `Picareta` 350 <:estrelinha:831161441847345202>MPoints'
            }
        )
        .setFooter(`${prefix}buy Item`)
    return message.channel.send(loja)
}