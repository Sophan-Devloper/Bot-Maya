const Discord = require('discord.js')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

   var list = [
      'https://imgur.com/qPzrtI3.gif',
      'https://imgur.com/DA1TD46.gif'
   ]

   var rand = list[Math.floor(Math.random() * list.length)]

   const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setImage(rand)
   await message.channel.send(embed)
}