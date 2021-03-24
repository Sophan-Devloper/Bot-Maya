const db = require('quick.db')
const Discord = require('discord.js')

module.exports = {
  name: "bal",
  description: "bleh",

  async run(client, message, args) {
    message.delete()

    let user = message.mentions.members.first() || message.member || message.mentions.users.first() || message.author
    let bal = await db.fetch(`money_${message.author.id}_${user.id}`);
    if (bal === null) bal = 0

    const embed = new Discord.MessageEmbed()
      .setTitle('<:StarPoint:766794021128765469>Sistema de Pontos - Balance<:StarPoint:766794021128765469>')
      .setColor('#efff00')
      .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
      .addFields(
        {
          name: 'Usuário',
          value: user,
          inline: true
        },
        {
          name: '<:StarPoint:766794021128765469>Maya Points',
          value: `${bal}<:StarPoint:766794021128765469>MPoints`,
          inline: true
        }
      )
      .setFooter('Maya Points BETA')
    message.channel.send(embed).then(msg => msg.delete({ timeout: 10000 }))
  }
}