const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

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
      .setDescription('`' + prefix + 'onegai @user`')
    return message.channel.send(`${message.author}`, no).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
  }

  if (user.id === '821471191578574888') {
    return message.channel.send('Porque imploras a mim?').then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
  }

  const embed = new Discord.MessageEmbed()
    .setColor('#000000')
    .setDescription(`${message.author} esta implorando ${user}`)
    .setImage(rand)
  return message.channel.send(embed)
}