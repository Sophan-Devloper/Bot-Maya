const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

   var list = [
      'https://imgur.com/LFZfUsJ.gif',
      'https://imgur.com/Yvhlp1r.gif',
      'https://imgur.com/TQ6FcAG.gif',
      'https://imgur.com/terWE4l.gif',
      'https://imgur.com/Bta6nGN.gif',
      'https://imgur.com/jIEUPVf.gif',
      'https://imgur.com/s2VwYxD.gif',
      'https://imgur.com/rc3lYTa.gif',
      'https://imgur.com/L9qnxnv.gif'
   ]

   var list1 = [
      'https://imgur.com/LFZfUsJ.gif',
      'https://imgur.com/Yvhlp1r.gif',
      'https://imgur.com/TQ6FcAG.gif',
      'https://imgur.com/terWE4l.gif',
      'https://imgur.com/Bta6nGN.gif',
      'https://imgur.com/jIEUPVf.gif',
      'https://imgur.com/s2VwYxD.gif',
      'https://imgur.com/rc3lYTa.gif',
      'https://imgur.com/L9qnxnv.gif'
   ]

   var rand = list[Math.floor(Math.random() * list.length)]
   var rand1 = list1[Math.floor(Math.random() * list1.length)]
   let user = message.mentions.users.first()

   if (!user) {
      let prefix = db.get(`prefix_${message.guild.id}`)
      if (prefix === null) prefix = "-"

      const nouser = new Discord.MessageEmbed()
         .setColor('#FF0000')
         .setTitle('Erroooou')
         .setDescription('`' + prefix + 'poke @user`')
      return message.reply(nouser).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
   }

   if (user.id === '821471191578574888') {
      return message.channel.send('Saai, eu não gosto que me cutuquem.').then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
   }

   let avatar = message.author.displayAvatarURL({ format: 'png' })
   let avatar1 = user.displayAvatarURL({ format: 'png' })
   const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setDescription(`${message.author} está te cutucando ${user}`, avatar)
      .setImage(rand)
      .setFooter('Clique em 🔁 para retribuir')

   const embed2 = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setDescription(`${user} também cutucou você ${message.author} `, avatar1)
      .setImage(rand1)

   await message.channel.send(embed).then(msg => {
      msg.react('🔁')
      msg.awaitReactions((reaction, user) => {
         if (message.mentions.users.first().id !== user.id) return

         if (reaction.emoji.name === '🔁') {
            return message.channel.send(embed2)
         }
      })
   })
}