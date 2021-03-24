const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/ox15B5R.gif',
  'https://imgur.com/vpv5tE0.gif',
  'https://imgur.com/JpMuTSR.gif',
  'https://imgur.com/95fpU14.gif',
  'https://imgur.com/bldOqvZ.gif',
  'https://imgur.com/KMkPmla.gif',
  'https://imgur.com/lq36NgR.gif',
  'https://imgur.com/arQzBcL.gif',
  'https://imgur.com/JoLapZ3.gif',
  'https://imgur.com/Jz4722z.gif'
     ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = message.mentions.users.first() || client.users.cache.get(args[0])

if (!user)
return message.reply('tenta assim`-highfive @user`').then(msg => msg.delete({timeout: 5000}))

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} mandou um Toca Aqui para  ${user}`)
        .setImage(rand)
   
    await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}