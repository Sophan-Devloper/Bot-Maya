const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

  var list = [
    'https://imgur.com/SA5DXP6.gif',
    'https://imgur.com/szr4sfd.gif',
    'https://imgur.com/nmHzWIX.gif',
    'https://imgur.com/145Sc4Z.gif'
  ]

  var list1 = [
    'https://imgur.com/SA5DXP6.gif',
    'https://imgur.com/szr4sfd.gif',
    'https://imgur.com/nmHzWIX.gif',
    'https://imgur.com/145Sc4Z.gif'
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
      .setDescription('`' + prefix + 'dedo @user`')
    return message.reply(nouser)
  }

  if (user.id === '821471191578574888') {
    return message.channel.send('Paaara, não me mostra o dedo :cry:')
  }

  if (user.id === message.author.id) {
    return message.channel.send('Você não pode usar este comando com você mesmo.')
  }

  let avatar = message.author.displayAvatarURL({ format: 'png' })
  let avatar1 = user.displayAvatarURL({ format: 'png' })
  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(message.author.username + ` está mostrando o dedo para ${user.username}`, avatar)
    .setImage(rand)
    .setFooter('Clique em 🔁 para retribuir')

  const embed2 = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(user.username + ` retribuiu o dedo para ${message.author.username}`, avatar1)
    .setImage(rand1)

  await message.channel.send(embed).then(msg => {
    msg.react('🔁')
    msg.awaitReactions((reaction, user) => {
      if (message.mentions.users.first().id !== user.id) return

      if (reaction.emoji.name === '🔁') { // Retribuiu
        reaction.users.remove()
       return message.channel.send(embed2)
      }
    })
  })
}