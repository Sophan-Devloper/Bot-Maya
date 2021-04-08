const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
  let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 })
  let linkavatar = user.displayAvatarURL()

  let embed = new Discord.MessageEmbed()
    .setColor(`#DCDCDC`)
    .setDescription(`[Baixar](${linkavatar}) avatar de ${user.username}`)
    .setImage(avatar)
    .setFooter(message.author.tag, message.author.displayAvatarURL())

  await message.channel.send(embed).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
}