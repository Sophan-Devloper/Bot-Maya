const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

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

  if (!user) {
    return message.reply('Hey, quem você quer chamar de baka? `-baka @user`')
  }

  if (user.id === message.author.id) {
    return message.channel.send('Você não pode usar este comando com você mesmo.')
  }

  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(`${message.author.username} chamou ${user.username} de baka`, avatar)
    .setImage(rand)
  await message.channel.send(embed)
}