const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/QK8cwtR.gif',
  'https://imgur.com/oJkRMdJ.gif',
  'https://imgur.com/29dAyoP.gif',
  'https://imgur.com/WynaI9R.gif',
  'https://imgur.com/0pPidWf.gif',
  'https://imgur.com/jWfVX9M.gif',
  'https://imgur.com/3fbA1AK.gif',
  'https://imgur.com/LwlQ4TQ.gif',
  'https://imgur.com/FO56cRi.gif',
  'https://imgur.com/oeDg5RU.gif',
  'https://imgur.com/dHSDVHL.gif',
  'https://imgur.com/cx30ip7.gif',
  'https://imgur.com/IatiaHU.gif',
  'https://imgur.com/UMhVcKN.gif',
  'https://imgur.com/Q7UWMMr.gif',
  'https://imgur.com/zC5hHs1.gif',
  'https://imgur.com/dNrvVjS.gif',
  'https://imgur.com/rEceQOt.gif'
      ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = client.users.cache.get(args[0])

const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author.username} está sorrindo`)
        .setImage(rand)
     await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}