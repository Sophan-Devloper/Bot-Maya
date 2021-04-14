const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    var star = '<:estrelinha:831161441847345202>'
    var loli = '<:Loli:831571527744356422>'

    const loja = new Discord.MessageEmbed()
        .setColor('YELLOW')
        .setTitle('🏪 Lojinha Maya 24h')
        .setDescription('Aqui na Lojinha Maya, você pode comprar várias coisas para ter acesso a comandos e funções incriveis.')
        .addFields(
            {
                name: 'Itens Disponiveis',
                value: '🎣 `Vara de Pesca` 5.000 <:estrelinha:831161441847345202>MPoints\n🔫 `Arma` 100.000 <:estrelinha:831161441847345202>MPoints\n⛏️ `Picareta` 350 <:estrelinha:831161441847345202>MPoints\n🪓 `Machado` 400 <:estrelinha:831161441847345202>MPoints\n🪱 `Isca` 10 <:estrelinha:831161441847345202>\n🥤 `Água` 10 <:estrelinha:831161441847345202>MPoints'
            },
            {
                name: 'Itens Especiais',
                value: '<:Loli:831571527744356422> Loli\n🔪 Faca\n<:fossil:831859111578173450> Fossil\n🦣 Mamute'
            },
            {
                name: 'Itens Coletaveis',
                value: '🍤 `Camarões` - Baú do Tesouro (Pesca)\n🐟 `Peixes` - Baú do Tesouro (Pesca)\n🪵 `Madeira` - Florestamento\n🦴 `Ossos` Mineração\n🪨 `Minérios` - Mineração\n💎 `Diamantes` - Mineração'
            }
        )
        .setFooter(`${prefix}buy Item`)
    return message.channel.send(loja)
}