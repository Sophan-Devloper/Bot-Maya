const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    

   var list = [
      'https://imgur.com/qPzrtI3.gif',
      'https://imgur.com/DA1TD46.gif'
   ]

   var rand = list[Math.floor(Math.random() * list.length)]

   const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setImage(rand)
   await message.channel.send(embed).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
}