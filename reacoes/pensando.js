const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.inlineReply(adm)
  }

  var list = [
    'https://imgur.com/CWhbgUi.gif',
    'https://imgur.com/NcPs1vb.gif',
    'https://imgur.com/4PdAqQb.gif',
    'https://imgur.com/a0m7XtQ.gif',
    'https://imgur.com/txn2gYq.gif',
    'https://imgur.com/b1QJPMT.gif',
    'https://imgur.com/AYTiN3X.gif',
    'https://imgur.com/lj2yGDC.gif',
    'https://imgur.com/GEMICFG.gif',
    'https://imgur.com/h42MSIR.gif',
    'https://imgur.com/191ip4V.gif',
    'https://imgur.com/t4oqtRB.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]
  var texto = args.join(" ")
  if (!texto) texto = `${message.author}`

  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${texto}`)
    .setImage(rand)
    .setFooter('Auto delete em 1 minuto.')

  await message.inlineReply(embed).then(msg => {
    msg.react('🔄').catch(err => { return }) // 1º Embed
    msg.react('❌').catch(err => { return })
    msg.delete({ timeout: 60000 }).catch(err => { return })

    msg.awaitReactions((reaction, user) => {
      if (message.author.id !== user.id) return;

      if (reaction.emoji.name === '🔄') { // 1º Embed - Principal
        reaction.users.remove(user)

        const embed = new Discord.MessageEmbed()
          .setColor('BLUE')
          .setDescription(`${texto}`)
          .setImage(list[Math.floor(Math.random() * list.length)])
          .setFooter('Auto delete em 1 minuto.')
        msg.edit(embed)
      }
      if (reaction.emoji.name === '❌') {
        msg.delete()
      }
    })
  })
}