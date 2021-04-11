const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

  var list = [
    'https://imgur.com/qERXcxZ.gif',
    'https://imgur.com/z8FmWuo.gif',
    'https://imgur.com/uzT4CTC.gif',
    'https://imgur.com/C4Lcets.gif',
    'https://imgur.com/UlMJxJP.gif',
    'https://imgur.com/osm4itQ.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]
  let user = message.mentions.users.first() || client.users.cache.get(args[0])

  if (!user) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const no = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Tente usar o comando correto')
      .setDescription('`' + prefix + 'implorar @user`')
    return message.channel.send(`${message.author}`, no)
  }

  if (user.id === '821471191578574888') {
    return message.channel.send('Porque imploras a mim?')
  }

  const embed = new Discord.MessageEmbed()
    .setColor('#000000')
    .setDescription(`${message.author} esta implorando ${user}`)
    .setImage(rand)
  return message.channel.send(embed)
}