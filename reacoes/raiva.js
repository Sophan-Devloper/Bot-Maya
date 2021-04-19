const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.inlineReply(adm)
  }

  var list = [
    'https://imgur.com/zo4Tkvo.gif',
    'https://imgur.com/tzceUKQ.gif',
    'https://imgur.com/pG8q63o.gif',
    'https://imgur.com/YWMSyc6.gif',
    'https://imgur.com/fvDmIUg.gif',
    'https://imgur.com/hLqp0Bi.gif',
    'https://imgur.com/N2i2CP5.gif',
    'https://imgur.com/8s4uSWY.gif',
    'https://imgur.com/b3PnHrI.gif',
    'https://imgur.com/aCPrqSh.gif',
    'https://imgur.com/mK3jMnb.gif',
    'https://imgur.com/KKq3cal.gif',
    'https://imgur.com/ZSxProk.gif'
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