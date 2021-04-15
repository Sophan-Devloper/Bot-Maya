const Canvacord = require("canvacord/src/Canvacord")
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.inlineReply(adm)
  }

  const member = message.mentions.users.first()
  const mentionedMemberAvatar = member.displayAvatarURL({ dynamic: false, format: "png" })

  if (!member) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"
    const n = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Siga o formato')
      .setDescription('`' + prefix + 'slaap @user`')

    return message.inlineReply(n)
  }

  if (member.id === message.author.id) {
    return message.inlineReply('Você não pode usar este comando com você mesmo.')
  }
  const messageAuthorAvatar = message.author.displayAvatarURL({ dynamic: false, format: "png" })
  let image = await Canvacord.slap(messageAuthorAvatar, mentionedMemberAvatar)
  let slap = new Discord.MessageAttachment(image, "slap.png")

  return message.inlineReply(slap)
}