const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  var list = [
    'https://imgur.com/RMxwAN7.gif',
    'https://imgur.com/I6bM3F2.gif',
    'https://imgur.com/7AN8gxW.gif',
    'https://imgur.com/JYAnfnN.gif',
    'https://imgur.com/zVyWqbV.gif',
    'https://imgur.com/xQogwUe.gif',
    'https://imgur.com/1mtbsEI.gif'
  ]

  let avatar = message.author.displayAvatarURL({ format: 'png' })
  var rand = list[Math.floor(Math.random() * list.length)]
  let user = message.mentions.users.first() || client.users.cache.get(args[0])

  if (!user)
    return message.reply('Hey, quem você quer chamar de baka? `-baka @user`').then(msg => msg.delete({ timeout: 5000 }))

  if (user === message.author)
    return message.reply("você não pode chamar você mesmo de baka >.< `-baka @user`").then(msg => msg.delete({ timeout: 5000 }))

  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(`${message.author.username} chamou ${user.username} de baka`, avatar)
    .setImage(rand)
  await message.channel.send(embed)
}