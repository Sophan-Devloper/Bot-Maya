const Discord = require('discord.js')
const db = require('quick.db')

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
  ]

  var list1 = [
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
  ]

  var rand = list[Math.floor(Math.random() * list.length)]
  var rand1 = list1[Math.floor(Math.random() * list1.length)]
  let user = message.mentions.users.first()

  if (!user) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const nouser = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Erroooou')
      .setDescription('`' + prefix + 'bite @user`')
    return message.reply(nouser).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
  }

  if (user.id === '821471191578574888')
    return message.channel.send('Paaara, não me morde não :cry:').then(msg => msg.delete({ timeout: 7000 })).catch(err => { return })

  let avatar = message.author.displayAvatarURL({ format: 'png' })
  let avatar1 = user.displayAvatarURL({ format: 'png' })
  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(message.author.username + ` está mordendo ${user.username}`, avatar)
    .setImage(rand)
    .setFooter('Clique em 🔁 para retribuir')

  const embed2 = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(user.username + ` retribuiu a mordida de ${message.author.username}`, avatar1)
    .setImage(rand1)

  await message.channel.send(embed).then(msg => {
    msg.react('🔁')
    msg.awaitReactions((reaction, user) => {
      if (message.mentions.users.first().id !== user.id) return

      if (reaction.emoji.name === '🔁') {
        reaction.users.remove()
        message.channel.send(embed2)
      }
    })
  })
}