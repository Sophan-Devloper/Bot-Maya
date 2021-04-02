const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  message.delete()

  var list = [
    'https://imgur.com/2lacG7l.gif',
    'https://imgur.com/UWbKpx8.gif',
    'https://imgur.com/4ssddEQ.gif',
    'https://imgur.com/2k0MFIr.gif',
    'https://imgur.com/nPr3s5D.gif',
    'https://imgur.com/LUypjw3.gif',
    'https://imgur.com/F3cjr3n.gif',
    'https://imgur.com/NNOz81F.gif',
    'https://imgur.com/cqIJIh4.gif',
    'https://imgur.com/5OQMI1m.gif',
    'https://imgur.com/48c0jVX.gif',
    'https://imgur.com/Iq9eZ5o.gif'
  ]

  var list1 = [
    'https://imgur.com/2lacG7l.gif',
    'https://imgur.com/UWbKpx8.gif',
    'https://imgur.com/4ssddEQ.gif',
    'https://imgur.com/2k0MFIr.gif',
    'https://imgur.com/nPr3s5D.gif',
    'https://imgur.com/LUypjw3.gif',
    'https://imgur.com/F3cjr3n.gif',
    'https://imgur.com/NNOz81F.gif',
    'https://imgur.com/cqIJIh4.gif',
    'https://imgur.com/5OQMI1m.gif',
    'https://imgur.com/48c0jVX.gif',
    'https://imgur.com/Iq9eZ5o.gif'
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
      .setDescription('`' + prefix + 'pat @user`')
    return message.reply(nouser).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
  }

  if (user.id === '821471191578574888') {
    return message.channel.send('Agradeço o carinho, mas não vou retribuir desta vez, estou com sono').then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
  }

  let avatar = message.author.displayAvatarURL({ format: 'png' })
  let avatar1 = user.displayAvatarURL({ format: 'png' })
  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author} está te dando carinho ${user}`, avatar)
    .setImage(rand)
    .setFooter('Clique em 🔁 para retribuir')

  const embed2 = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${user} também acariciou você ${message.author} `, avatar1)
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