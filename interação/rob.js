const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  message.delete()

  var list = [
    'https://imgur.com/hVscHek.gif',
    'https://imgur.com/2TSylJL.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]
  let user = message.mentions.users.first()

  if (!user) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const nouser = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Erroooou')
      .setDescription('`' + prefix + 'rob @user`')
    return message.reply(nouser).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
  }

  if (user.id === '821471191578574888') {
    return message.channel.send('Saai, eu não é para me roubar').then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
  }

  const embed = new Discord.MessageEmbed()
    .setColor('#000000')
    .setDescription(`${message.author} roubou ${user} e saiu correndo`)
    .setImage(rand)
  await message.channel.send(embed)
}