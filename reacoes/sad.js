const Discord = require('discord.js')

exports.run = async (client, message, args) => {
   

  var list = [
    'https://imgur.com/gGRb7mi.gif',
    'https://imgur.com/b03s5vA.gif',
    'https://imgur.com/6rIIk0f.gif',
    'https://imgur.com/PMa4osv.gif',
    'https://imgur.com/JvMnmgd.gif',
    'https://imgur.com/thTxf8S.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]
  let user = client.users.cache.get(args[0])

  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author.username} está triste`)
    .setImage(rand)
  await message.channel.send(embed).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
}