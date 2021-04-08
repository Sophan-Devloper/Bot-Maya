const Discord = require('discord.js')

exports.run = async (client, message, args) => {
   

  var list = [
    'https://imgur.com/AD3MbBi.jpg',
    'https://imgur.com/O3EIPHp.gif',
    'https://imgur.com/KWvtdg0.gif',
    'https://imgur.com/myQYmbX.gif',
    'https://imgur.com/dczujRe.gif',
    'https://imgur.com/frKhsH4.gif',
    'https://imgur.com/jM59Erm.gif',
    'https://imgur.com/EtijIBE.gif',
    'https://imgur.com/bxhK5RS.jpg',
    'https://imgur.com/c0IzCkQ.jpg',
    'https://imgur.com/suDzH8o.gif',
    'https://imgur.com/tdqU2ti.jpg',
    'https://imgur.com/zRXdWI1.gif',
    'https://imgur.com/xmaQyK4.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]
  let user = client.users.cache.get(args[0])

  const embed = new Discord.MessageEmbed()
    .setColor('#000000')
    .setDescription(`Filhotinhooo :hearts: :cat:`)
    .setImage(rand)
    .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())
  await message.channel.send(embed).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
}