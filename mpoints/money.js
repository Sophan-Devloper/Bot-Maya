const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  let user = message.mentions.members.first() || message.member

  if (!args[0] === user) user === message.author

  let bal = await db.get(`money_${user.id}`)
  if (bal === null) bal = 0

  let bank = db.get(`bank_${user.id}`)
  if (bank === null) bank = 0

  const embed = new Discord.MessageEmbed()
    .setColor('#efff00')
    .setAuthor(`Finanças de ${user.user.tag}`, user.user.displayAvatarURL())
    .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
    .setDescription(`Pessoas podem roubar dinheiro da carteira\nMantenha seu dinheiro no banco`)
    .addFields(
      {
        name: '💸 Carteira:',
        value: `<:StarPoint:766794021128765469>${bal}`,
        inline: true
      },
      {
        name: '🏦 Banco:',
        value: `<:StarPoint:766794021128765469>${bank}`,
        inline: true
      }
    )
  message.channel.send(embed)
}