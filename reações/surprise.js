const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
    'https://imgur.com/Yhw5dqh.gif',
    'https://imgur.com/P0imDeE.gif',
    'https://imgur.com/g8iZ4OC.gif',
    'https://imgur.com/MsSSfyX.gif',
    'https://imgur.com/6UmKNvm.gif',
    'https://imgur.com/5yOQhRf.gif',
    'https://imgur.com/WkHwHMt.gif'
]

var gifs = list[Math.floor(Math.random() * list.length)]
let user = client.users.cache.get(args[0])

const embed = new Discord.MessageEmbed()
        .setColor('#F4A460')
        .setDescription(`${message.author} ficou chocado!`)
        .setImage(gifs)
        .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())
await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}