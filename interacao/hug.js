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
    'https://imgur.com/uXL0iTg.gif',
    'https://imgur.com/U8W2LSy.gif',
    'https://imgur.com/Y0rsWyI.gif',
    'https://imgur.com/QTTHhp1.gif',
    'https://imgur.com/hI6bUlY.gif',
    'https://imgur.com/e1ofXDH.gif',
    'https://imgur.com/Zhw4mwC.gif',
    'https://imgur.com/mJousjU.gif',
    'https://imgur.com/cZWWATV.gif',
    'https://imgur.com/LPftvE0.gif',
    'https://imgur.com/dwxp3zn.gif',
    'https://imgur.com/hpddahS.gif',
    'https://imgur.com/LHBOVKM.gif',
    'https://imgur.com/Fkchj2G.gif',
    'https://imgur.com/ao4wesH.gif'
  ]

  var list1 = [
    'https://imgur.com/uXL0iTg.gif',
    'https://imgur.com/U8W2LSy.gif',
    'https://imgur.com/Y0rsWyI.gif',
    'https://imgur.com/QTTHhp1.gif',
    'https://imgur.com/hI6bUlY.gif',
    'https://imgur.com/e1ofXDH.gif',
    'https://imgur.com/Zhw4mwC.gif',
    'https://imgur.com/mJousjU.gif',
    'https://imgur.com/cZWWATV.gif',
    'https://imgur.com/LPftvE0.gif',
    'https://imgur.com/dwxp3zn.gif',
    'https://imgur.com/hpddahS.gif',
    'https://imgur.com/LHBOVKM.gif',
    'https://imgur.com/Fkchj2G.gif',
    'https://imgur.com/ao4wesH.gif'
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
      .setDescription('`' + prefix + 'hug @user`')
    return message.channel.send(nouser)
  }

  if (user.id === '821471191578574888') {
    let avatar = message.author.displayAvatarURL({ format: 'png' })
    const embed1 = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setAuthor(message.author.username + ` está abraçando ${user.username}`, avatar)
      .setImage(rand)
    message.channel.send(embed1)
    return message.channel.send('Que abraço fofinho')
  }

  let avatar = message.author.displayAvatarURL({ format: 'png' })
  let avatar1 = user.displayAvatarURL({ format: 'png' })

  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(message.author.username + ` está abraçando ${user.username}`, avatar)
    .setImage(rand)
    .setFooter('Clique em 🔁 para retribuir')


  const embed2 = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(message.author.username + ` retribuiu o abraço de ${user.username}`, avatar1)
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