const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.inlineReply(adm)
  }

  var list1 = [
    'https://imgur.com/iclUiUN.gif',
    'https://imgur.com/II1bakc.gif',
    'https://imgur.com/MzAjNdv.gif',
    'https://imgur.com/eKcWCgS.gif',
    'https://imgur.com/uobBW9K.gif',
    'https://imgur.com/VrETTlv.gif',
    'https://imgur.com/FozOXkB.gif',
    'https://imgur.com/7GhTplD.gif',
    'https://imgur.com/B6UKulT.gif',
    'https://imgur.com/6i5zWCx.gif',
    'https://imgur.com/Uow8no2.gif',
    'https://imgur.com/uuabzNk.gif',
    'https://imgur.com/EwQPLZI.gif',
    'https://imgur.com/I159BUo.gif',
    'https://imgur.com/8YZFU1Z.gif',
    'https://imgur.com/agdhkfE.gif',
    'https://imgur.com/hJGrpyU.gif',
    'https://imgur.com/uPtDEh6.gif',
    'https://imgur.com/pDScNqs.gif',
    'https://imgur.com/gWIm5bK.gif',
    'https://imgur.com/1IuyOxK.gif',
    'https://imgur.com/gsong8x.gif',
    'https://imgur.com/4Pw0uxb.gif'
  ]

  var rand1 = list1[Math.floor(Math.random() * list1.length)]
  let user = message.mentions.users.first()

  if (!user) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const nouser = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Erroooou')
      .setDescription('`' + prefix + 'beijo @user`')
    return message.reply(nouser)
  }

  if (user.id === '821471191578574888') {
    return message.inlineReply('Aiin, eu sou timida')
  }

  if (user.id === message.author.id) {
    return message.inlineReply('Você não pode usar este comando com você mesmo.')
  }

  let avatar1 = user.displayAvatarURL({ format: 'png' })
  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${user}, aceita beijar ${message.author.username}?`,)
    .setFooter('Clique em 🔁 para aceitar')

  const embed2 = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(user.username + ` aceitou o beijo de ${message.author.username}`, avatar1)
    .setImage(rand1)

  await message.inlineReply(embed).then(msg => {
    msg.react('🔁')
    msg.awaitReactions((reaction, user) => {
      if (message.mentions.users.first().id !== user.id) return

      if (reaction.emoji.name === '🔁') { // Retribuiu
        msg.delete()
        return message.inlineReply(embed2)
      }
    })
  })
}