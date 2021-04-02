const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  message.delete()

  var list = [
    'https://imgur.com/T1sDMLA.gif',
    'https://imgur.com/5niochn.gif',
    'https://imgur.com/GGfSu9s.gif',
    'https://imgur.com/LygOJ5M.gif',
    'https://imgur.com/HTlpSAQ.gif',
    'https://imgur.com/fS4E13N.gif',
    'https://imgur.com/8vPPdZr.gif',
    'https://imgur.com/lIZEcOn.gif',
  ]

  var list1 = [
    'https://imgur.com/T1sDMLA.gif',
    'https://imgur.com/5niochn.gif',
    'https://imgur.com/GGfSu9s.gif',
    'https://imgur.com/LygOJ5M.gif',
    'https://imgur.com/HTlpSAQ.gif',
    'https://imgur.com/fS4E13N.gif',
    'https://imgur.com/8vPPdZr.gif',
    'https://imgur.com/lIZEcOn.gif',
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
      .setDescription('`' + prefix + 'fight @user`')
    return message.reply(nouser).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
  }

  if (user.id === '821471191578574888') {
    return message.channel.send('Paaaaara! Não é pra me bater!!!! :cry:')
  }

  let avatar = message.author.displayAvatarURL({ format: 'png' })
  let avatar1 = user.displayAvatarURL({ format: 'png' })
  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(message.author.username + ` está brigando com ${user.username}`, avatar)
    .setImage(rand)
    .setFooter('Clique em 🔁 para retribuir')

  const embed2 = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(user.username + ` levou a sério a luta com ${message.author.username} `, avatar1)
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