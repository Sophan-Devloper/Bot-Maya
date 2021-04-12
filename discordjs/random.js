const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member || message.mentions.users.first()
    var level = await db.fetch(`level_${user.id}`)
    if (level < 5) {
        const block = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('🚫  Libere no level 5')
        return message.channel.send(block)
    }

    var linkserver = 'https://discord.gg/YpFWgJuuUV'
    const embed = new Discord.MessageEmbed()
        .setColor('#1e3ddf')
        .setTitle('BETA - Dicas da Maya - Random  Result')
        .setDescription('Consiga um resultado randomico (aleatório) dentro de um array')
        .addFields(
            {
                name: 'Como usar',
                value: 'Só implantar o código abaixo do seu array\ntroque o nome **ARRAY** pelo nome do seu Array',
                inline: true
            },
            {
                name: 'Quer um support?',
                value: `[Clique aqui](${linkserver})`,
                inline: true
            }
        )
        .setFooter('Apoio Maya - Developers')

    function code() {
        message.channel.send("```js\n var resultado = ARRAY[Math.floor(Math.random() * ARRAY.length)]\n```")
    }

    message.channel.send(embed)
    setTimeout(code, 1000)
}