const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

  var list = [
    'https://imgur.com/t7z3ahp.gif',
    'https://imgur.com/NYLxoNs.gif',
    'https://imgur.com/iRh8iXc.gif',
    'https://imgur.com/cdW9wbV.gif',
    'https://imgur.com/0UDpkEr.gif',
    'https://imgur.com/7mk656G.gif',
    'https://imgur.com/z9m6vfN.gif',
    'https://imgur.com/dEjgdqD.gif',
    'https://imgur.com/iuCM9BD.gif'
  ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = message.mentions.users.first() || client.users.cache.get(args[0])

if (!user)
return message.reply('marca a pessoa que você quer dar uns tiros -> `-shoot @pessoa`').then(msg => msg.delete({timeout: 5000}))

const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} Atirou em ${user}`)
        .setImage(rand)
        .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())
  await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}