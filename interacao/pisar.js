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
    'https://imgur.com/McsRAGI.gif',
    'https://imgur.com/NhcfGAT.gif',
    'https://imgur.com/f6C1Mk7.gif',
    'https://imgur.com/nOVO5KC.gif',
    'https://imgur.com/E0zrKGs.gif',
    'https://imgur.com/lFTlLWk.gif',
    'https://imgur.com/7SNkffw.gif'
  ]

  var list1 = [
    'https://imgur.com/McsRAGI.gif',
    'https://imgur.com/NhcfGAT.gif',
    'https://imgur.com/f6C1Mk7.gif',
    'https://imgur.com/nOVO5KC.gif',
    'https://imgur.com/E0zrKGs.gif',
    'https://imgur.com/lFTlLWk.gif',
    'https://imgur.com/7SNkffw.gif'
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
      .setDescription('`' + prefix + 'pisar @user`')
    return message.reply(nouser)
  }

  if (user.id === '821471191578574888') {
    return message.channel.send('Poxa, não pisa em mim')
  }

  if (user.id === message.author.id) {
    return message.channel.send('Você não pode usar este comando com você mesmo.')
  }

  let avatar = message.author.displayAvatarURL({ format: 'png' })
  let avatar1 = user.displayAvatarURL({ format: 'png' })
  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author} está pisando em você ${user}`, avatar)
    .setImage(rand)
    .setFooter('Clique em 🔁 para retribuir')

  const embed2 = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${user} devolveu as pisadas ${message.author} `, avatar1)
    .setImage(rand1)

  await message.channel.send(embed).then(msg => {
    msg.react('🔁')
    msg.awaitReactions((reaction, user) => {
      if (message.mentions.users.first().id !== user.id) return

      if (reaction.emoji.name === '🔁') {
        return message.channel.send(embed2)
      }
    })
  })
}