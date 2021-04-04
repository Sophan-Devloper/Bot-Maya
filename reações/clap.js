const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    message.delete()

    var list = [
        'https://imgur.com/LVVGS8f.gif',
        'https://imgur.com/1gfMJ0g.gif',
        'https://imgur.com/5Bd9CSP.gif',
        'https://imgur.com/5Bd9CSP.gif',
        'https://imgur.com/2W8WpVO.gif',
        'https://imgur.com/trGqji4.gif',
        'https://imgur.com/cAROAx9.gif',
        'https://imgur.com/q4HSdKN.gif',
        'https://imgur.com/75hPNpP.gif',
        'https://imgur.com/TLu9P1c.gif',
        'https://imgur.com/KYqsOsT.gif'
    ]

    var gif = list[Math.floor(Math.random() * list.length)]
    let user = client.users.cache.get(args[0])

    const ClapEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription(`${message.author.username} aplaudiu isso!`)
        .setImage(gif)
    await message.channel.send(ClapEmbed).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
}