const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.inlineReply(adm)
  }

  var list = [
    'https://imgur.com/ysAPqlq.gif',
    'https://imgur.com/RiGAeVi.gif',
    'https://imgur.com/u22MvjV.gif',
    'https://imgur.com/sApDtmL.gif',
    'https://imgur.com/SaWl9WZ.gif',
    'https://imgur.com/IBemNsf.gif',
    'https://imgur.com/IYERy6u.gif',
    'https://imgur.com/KrwTEcA.gif',
    'https://imgur.com/eKnsdcY.gif',
    'https://imgur.com/VRGyeYO.gif',
    'https://imgur.com/wt3RiFP.gif',
    'https://imgur.com/3ejDAKF.gif',
    'https://imgur.com/QRuxGIo.gif',
    'https://imgur.com/RaF6UGK.gif',
    'https://imgur.com/fevJuY7.gif',
    'https://imgur.com/7xsA4aN.gif',
    'https://imgur.com/ctLc73q.gif'
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