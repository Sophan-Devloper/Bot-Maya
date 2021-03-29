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
        .setColor('BLUE')
        .setImage(rand)

await message.channel.send(embed).then(msg => msg.delete({timeout: 6000}))
}