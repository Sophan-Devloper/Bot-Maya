const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  message.delete()

  var list = [
    'https://imgur.com/CPTozLv.gif',
    'https://imgur.com/5aq8D6c.gif',
    'https://imgur.com/XP3GFfT.gif',
    'https://imgur.com/79xL32Q.gif',
    'https://imgur.com/KFs6dKC.gif',
    'https://imgur.com/5U8gQ4n.gif',
    'https://imgur.com/EpBlqOx.gif',
    'https://imgur.com/HUC8k8C.gif',
    'https://imgur.com/vS1plk0.gif',
    'https://imgur.com/FqOuFTy.gif',
    'https://imgur.com/g8BxzSC.gif',
    'https://imgur.com/c51iZqH.gif',
    'https://imgur.com/8R75YyG.gif',
    'https://imgur.com/CqSNKyj.gif'
  ]

  var list1 = [
    'https://imgur.com/CPTozLv.gif',
    'https://imgur.com/5aq8D6c.gif',
    'https://imgur.com/XP3GFfT.gif',
    'https://imgur.com/79xL32Q.gif',
    'https://imgur.com/KFs6dKC.gif',
    'https://imgur.com/5U8gQ4n.gif',
    'https://imgur.com/EpBlqOx.gif',
    'https://imgur.com/HUC8k8C.gif',
    'https://imgur.com/vS1plk0.gif',
    'https://imgur.com/FqOuFTy.gif',
    'https://imgur.com/g8BxzSC.gif',
    'https://imgur.com/c51iZqH.gif',
    'https://imgur.com/8R75YyG.gif',
    'https://imgur.com/CqSNKyj.gif'
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
      .setDescription('`' + prefix + 'greet @user`')
    return message.reply(nouser).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
  }

  if (user.id === '821471191578574888') {
    let avatar = message.author.displayAvatarURL({ format: 'png' })
    const embed1 = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setAuthor(message.author.username + ` está comprimentando ${user.username}`, avatar)
      .setImage(rand)

    const embed3 = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setDescription(`Olá ${message.author.username}`)
      .setImage(rand1)
    message.channel.send(embed1)
    return message.channel.send(embed3)
  }

  let avatar = message.author.displayAvatarURL({ format: 'png' })
  let avatar1 = user.displayAvatarURL({ format: 'png' })
  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(message.author.username + ` está comprimentando ${user.username}`, avatar)
    .setImage(rand)
    .setFooter('Clique em 🔁 para retribuir')

  const embed2 = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(user.username + ` comprimentou ${message.author.username} de volta`, avatar1)
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