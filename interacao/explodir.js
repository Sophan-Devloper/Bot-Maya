const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.inlineReply(adm)
  }

  var list = [
    'https://imgur.com/gVpxrzK.gif',
    'https://imgur.com/Nemm1pQ.gif',
    'https://imgur.com/Uq9PWC2.gif',
    'https://imgur.com/hYQJMUE.gif',
    'https://imgur.com/XosXY1z.gif',
    'https://imgur.com/6YTvzGQ.gif',
    'https://imgur.com/uzx2f68.gif'
  ]

  var list1 = [
    'https://imgur.com/gVpxrzK.gif',
    'https://imgur.com/Nemm1pQ.gif',
    'https://imgur.com/Uq9PWC2.gif',
    'https://imgur.com/hYQJMUE.gif',
    'https://imgur.com/XosXY1z.gif',
    'https://imgur.com/6YTvzGQ.gif',
    'https://imgur.com/uzx2f68.gif'
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
      .setDescription('`' + prefix + 'explodir @user`')
    return message.reply(nouser)
  }

  if (user.id === '821471191578574888') {
    return message.inlineReply('Paaara, não é pra me explodir :cry:')
  }

  if (user.id === message.author.id) {
    return message.inlineReply('Você não pode usar este comando com você mesmo.')
  }

  let avatar = message.author.displayAvatarURL({ format: 'png' })
  let avatar1 = user.displayAvatarURL({ format: 'png' })
  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(message.author.username + ` explodiu ${user.username}`, avatar)
    .setImage(rand)
    .setFooter('Clique em 🔁 para retribuir')

  const embed2 = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(user.username + ` explodiu ${message.author.username} de volta`, avatar1)
    .setImage(rand1)

  await message.inlineReply(embed).then(msg => {
    msg.react('🔁')
    msg.awaitReactions((reaction, user) => {
      if (message.mentions.users.first().id !== user.id) return

      if (reaction.emoji.name === '🔁') {
        return message.inlineReply(embed2)
      }
    })
  })
}