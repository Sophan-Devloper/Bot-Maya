const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    

   const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setImage('https://imgur.com/8ee59mw.gif')

   await message.channel.send(embed).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
}

