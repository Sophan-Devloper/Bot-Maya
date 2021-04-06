const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    message.delete()

    var list = [
        'https://i.pinimg.com/originals/78/72/6a/78726a6ec74ba506137966e9f9250bd1.gif',
        'https://i.pinimg.com/originals/b1/b8/94/b1b8947fbb9e61d279125f678ff263ab.gif',
    ]

    var gif = list[Math.floor(Math.random() * list.length)]

    const Itachi = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription('Meu senpai é o Itachi :heart:')
        .setImage(gif)
    await message.channel.send(Itachi).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
}