const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.inlineReply(adm)
  }

  let user = message.mentions.users.first() || message.author || message.m
  let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 })
  let linkavatar = user.displayAvatarURL()

  let embed = new Discord.MessageEmbed()
    .setColor(`BLUE`)
    .setDescription(`[Baixar](${linkavatar}) avatar de ${user.username}`)
    .setImage(avatar)

  await message.inlineReply(embed).then(msg => {
    msg.react('❌')
    msg.react('📨')
    msg.delete({ timeout: 30000 })

    msg.awaitReactions((reaction, member) => {

      if (reaction.emoji.name === '📨') {
        member.send(embed)
      }

      if (message.author.id !== member.id) return

      if (reaction.emoji.name === '❌') {
        msg.delete()
      }

    })
  })
}