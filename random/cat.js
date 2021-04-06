const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  message.delete()

  var list = [
    'https://i.imgur.com/AD3MbBi.png',
    'https://i.imgur.com/O3EIPHp.gif',
    'https://i.imgur.com/U0iADj9.gif',
    'https://i.imgur.com/JTf2Mk6.gif',
    'https://i.imgur.com/ymg1iqy.gif',
    'https://i.imgur.com/0Y1b8Xv.gif',
    'https://i.imgur.com/KWvtdg0.gif',
    'https://i.imgur.com/aeR48HS.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]
  let user = client.users.cache.get(args[0])

  const embed = new Discord.MessageEmbed()
    .setColor('#000000')
    .setDescription(`Caaat :hearts: :cat:`)
    .setImage(rand)
  await message.channel.send(embed).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
}