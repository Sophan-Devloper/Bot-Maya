const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  message.delete()

  var list = [
    'https://imgur.com/HVDnnyE.gif',
    'https://imgur.com/79G3VWI.gif',
    'https://imgur.com/XVzZ00R.gif',
    'https://imgur.com/XVzZ00R.gif',
    'https://imgur.com/639Y4lK.gif',
    'https://imgur.com/9eqn94K.gif',
    'https://imgur.com/Zq0w4L3.gif',
    'https://imgur.com/JHvhrni.gif',
    'https://imgur.com/cz9UNLw.gif',
    'https://imgur.com/WF8kNUz.gif'
  ]

  var list1 = [
    'https://imgur.com/HVDnnyE.gif',
    'https://imgur.com/79G3VWI.gif',
    'https://imgur.com/XVzZ00R.gif',
    'https://imgur.com/XVzZ00R.gif',
    'https://imgur.com/639Y4lK.gif',
    'https://imgur.com/9eqn94K.gif',
    'https://imgur.com/Zq0w4L3.gif',
    'https://imgur.com/JHvhrni.gif',
    'https://imgur.com/cz9UNLw.gif',
    'https://imgur.com/WF8kNUz.gif'
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
      .setDescription('`' + prefix + 'love @user`')
    return message.reply(nouser).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
  }

  if (user.id === '821471191578574888') {
    return message.channel.send('Eu sou um robô, eu não consigo amar ninguém. (ainda)').then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
  }

  let avatar = message.author.displayAvatarURL({ format: 'png' })
  let avatar1 = user.displayAvatarURL({ format: 'png' })
  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author} ama você ${user}`, avatar)
    .setImage(rand)
    .setFooter('Clique em 🔁 para retribuir')

  const embed2 = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(user.username + ` também ama você ${message.author.username} `, avatar1)
    .setImage(rand1)

  await message.channel.send(embed).then(msg => {
    msg.react('🔁')
    msg.awaitReactions((reaction, user) => {
      if (message.mentions.users.first().id !== user.id) return

      if (reaction.emoji.name === '🔁') {
        message.channel.send(embed2)
      }
    })
  })
}