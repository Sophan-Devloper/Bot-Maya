const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  message.delete()

  var list = [
    'https://imgur.com/IWcnsVz.gif',
    'https://imgur.com/ykbbyeG.gif',
    'https://imgur.com/DvXtkrp.gif',
    'https://imgur.com/kZMw9e4.gif',
    'https://imgur.com/i7EekNZ.gif',
    'https://imgur.com/WSnxFkU.gif',
    'https://imgur.com/s2DQLD8.gif',
    'https://imgur.com/vTkab7F.gif',
    'https://imgur.com/C4qS1qo.gif',
    'https://imgur.com/gI9MghR.gif',
    'https://imgur.com/paJ4r0p.gif',
    'https://imgur.com/573Tfb5.gif',
    'https://imgur.com/WzrDVfM.gif',
    'https://imgur.com/Y64wzy2.gif',
    'https://imgur.com/GRiBslM.gif',
    'https://imgur.com/F0SU5zn.gif',
    'https://imgur.com/ohWzmna.gif',
    'https://imgur.com/rVtUmUB.gif',
    'https://imgur.com/LLeYBYJ.gif',
    'https://imgur.com/LolnknH.gif',
    'https://imgur.com/YFf97jp.gif',
    'https://imgur.com/UQzU1kl.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]

  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author.username} esta fazendo biquinho.`)
    .setImage(rand)
  await message.channel.send(embed).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
}