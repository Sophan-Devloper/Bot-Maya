const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/jVL0mbR.gif',
  'https://imgur.com/TRHBCon.gif'
   ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = client.users.cache.get(args[0])

const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setImage(rand)
        .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())

await message.channel.send(embed).then(msg => msg.delete({timeout: 5000}))
}