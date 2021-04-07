const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

  var list = [
    'https://imgur.com/l5xFcJ2.gif',
    'https://imgur.com/YoFsXOx.gif',
    'https://imgur.com/HNxV16F.gif',
    'https://imgur.com/6S5hxRr.gif',
    'https://imgur.com/MwOIxKg.gif',
    'https://imgur.com/1DV1Aix.gif',
    'https://imgur.com/HaPqlac.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]
  let user = message.mentions.users.first()

  if (!user) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const nouser = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Erroooou')
      .setDescription('`' + prefix + 'olhar @user`')
    return message.reply(nouser).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
  }

  if (user.id === '821471191578574888') {
    return message.channel.send('O que foi que eu fiz? o-o').then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
  }

  const embed = new Discord.MessageEmbed()
    .setColor('#000000')
    .setDescription(`${message.author} estou de olho em você ${user}`)
    .setImage(rand)
  return message.channel.send(embed)
}