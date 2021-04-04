const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    message.delete()

    var helpgit = 'https://github.com/rodycouto/MayaCommands/blob/main/README.md'
    var linksupport = 'https://forms.gle/vtJ5qBqFDd9rL5JU8'
    var linkservidor = 'https://discord.gg/mx8eMx6'
    var linkcovid = 'https://www.google.com/search?q=coronavirus&oq=coronavirus&aqs=chrome..69i64j0i433j0i131i433l3j69i60l3.3560j0j9&sourceid=chrome&ie=UTF-8#wptab=s:H4sIAAAAAAAAAONgVuLVT9c3NMwySk6OL8zJecTozS3w8sc9YSmnSWtOXmO04eIKzsgvd80rySypFNLjYoOyVLgEpVB1ajBI8XOhCvHsYuL2SE3MKckILkksKV7EKptaDGQcXltckpmcWKyQkq-QnF-Un5dYdnhtUWkxAPmw1DmNAAAA'

    var list = [
        'uma bot estilosa e com um sonho de assistir tudo o que a Netflix tem.',
        'queria comer um sorvete, tem um aí?',
        'um dia eu vou ir pra lua, acredita?',
        'estava pensando aqui... Será que a lua pensa que a gente é a lua igual a gente vê a lua?',
        'tô com um soooono, faz um tempão que eu não durmo'
    ]

    var rand = list[Math.floor(Math.random() * list.length)]

    const newhelp = new Discord.MessageEmbed()
        .setColor('#FCACDf')
        .setThumbnail('https://imgur.com/mvjbQEF.gif')
        .setTitle('⭐ Centralzinha de Ajuda da Maya ⭐')
        .setDescription(`Oooi ${message.author}. Eu sou a Maya, ${rand}\n \nVocê pode ver tudo o que eu tenho nas informações abaixo.`)
        .addFields(
            {
                name: '🛠️ Quer ver meus comandos?',
                value: `[Lista de Comandos](${helpgit})`
            },
            {
                name: '☎️ Você precisa falar com meu suporte?',
                value: `[Central de Suporte](${linksupport})`
            },
            {
                name: '🧩 Não é nenhuma das opções?',
                value: `[Entre no meu servidor](${linkservidor})`
            }
        )
        .addField('Previna-se contra a COVID-19!', `[Informações sobre a pandemia](${linkcovid})`)
        .setFooter(message.author.tag, message.author.displayAvatarURL())

    return message.channel.send(newhelp)
}