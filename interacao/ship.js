const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

  let user = message.mentions.members.first()
  if (!user || message.author.id === user.id)
    return message.channel.send("Você não pode fazer um Ship com você mesmo. Tenta assim `-ship @user`")

  if (user.id === '763072871597604874')
    return message.channel.send("Foi maaal, eu não tenho a capacidade de amar ninguém. (ainda)")

  if (user.id === message.author.id) {
    return message.channel.send('Você não pode usar este comando com você mesmo.')
  }

  const love = Math.random() * 100
  const loveIndex = Math.floor(love / 10)
  const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex)
  const avatar = message.author.displayAvatarURL({ format: 'png' })

  const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, avatar)
    .setColor("RED")
    .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
    .addField(`${user.user.username} ama você em:`, `💟 ${Math.floor(love)}% \n${loveLevel}`)

  return message.channel.send(embed)
}