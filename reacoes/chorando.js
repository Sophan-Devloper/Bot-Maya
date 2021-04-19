const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.inlineReply(adm)
  }

  var list = [
    'https://imgur.com/I18iVJC.gif',
    'https://imgur.com/CwUSjuy.gif',
    'https://imgur.com/xsyIxxf.gif',
    'https://imgur.com/7Yffi3x.gif',
    'https://imgur.com/pls8egF.gif',
    'https://imgur.com/UjIb9DT.gif',
    'https://imgur.com/PcU00J4.gif',
    'https://imgur.com/Dm6n95I.gif',
    'https://imgur.com/KZtIoTd.gif',
    'https://imgur.com/BAaoe5w.gif',
    'https://imgur.com/bOK3DE5.gif',
    'https://imgur.com/J5GpZn0.gif',
    'https://imgur.com/vpFFvnP.gif',
    'https://imgur.com/tmHIJOM.gif',
    'https://imgur.com/XrRALez.gif',
    'https://imgur.com/Frhp0AN.gif',
    'https://imgur.com/9yIWXKH.gif',
    'https://imgur.com/oy1x3vY.gif'
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