const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/0sQbStr.gif',
  'https://imgur.com/6Y5OnND.gif',
  'https://imgur.com/yjZCLpx.gif',
  'https://imgur.com/ymAPVpI.gif',
  'https://imgur.com/WqxrEhg.gif',
  'https://imgur.com/r04g2cj.gif',
  'https://imgur.com/bz1zkXQ.gif',
  'https://imgur.com/h9xSaJn.gif',
  'https://imgur.com/vJ6iLlH.gif',
  'https://imgur.com/lprVmaI.gif',
  'https://imgur.com/LAVnPlM.gif',
  'https://imgur.com/ntOXxqx.gif'
    ];

var rand = list[Math.floor(Math.random() * list.length)]
let user = message.mentions.users.first() || client.users.cache.get(args[0])

if (!user) 
  return message.reply('você esqueceu de marcar quem você quer morder.').then(msg => msg.delete({timeout: 5000}))

if (user.id === '763072871597604874')
    return message.channel.send('Paaara, não me morde não :cry:')

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`${message.author} mordeu ${user}`)
        .setImage(rand)
  await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}