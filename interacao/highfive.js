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

  var list1 = [
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
  var rand1 = list1[Math.floor(Math.random() * list1.length)]
  let user = message.mentions.users.first()

  if (!user) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const nouser = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Erroooou')
      .setDescription('`' + prefix + 'highfive @user`')
    return message.channel.send(nouser)
  }

  if (user.id === '821471191578574888') {
     
    const embed1 = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setDescription(`${message.author.username} & ${user.username} mandaram um HIGHFIVE!`)
      .setImage(rand)
    return message.channel.send(embed1)
  }

  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`Highfive ${user}?`)
    .setFooter('Clique em 🔁 para aceitar o highfive')

  const embed2 = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author.username} & ${user.username} mandaram um HIGHFIVE!`)
    .setImage(rand1)

  await message.channel.send(embed).then(msg => {
    msg.react('🔁')
    msg.awaitReactions((reaction, user) => {
      if (message.mentions.users.first().id !== user.id) return

      if (reaction.emoji.name === '🔁') {
        msg.delete()
        return message.channel.send(embed2)
      }
    })
  })
}