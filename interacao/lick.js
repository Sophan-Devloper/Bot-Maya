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
      'https://imgur.com/ixqmPUG.gif',
      'https://imgur.com/fcQKlLL.gif',
      'https://imgur.com/WtIcBUB.gif',
      'https://imgur.com/XXPT5jN.gif',
      'https://imgur.com/lBhuZIZ.gif',
      'https://imgur.com/NaD26Am.gif'
   ]

   var list1 = [
      'https://imgur.com/ixqmPUG.gif',
      'https://imgur.com/fcQKlLL.gif',
      'https://imgur.com/WtIcBUB.gif',
      'https://imgur.com/XXPT5jN.gif',
      'https://imgur.com/lBhuZIZ.gif',
      'https://imgur.com/NaD26Am.gif'
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
         .setDescription('`' + prefix + 'lick @user`')
      return message.reply(nouser)
   }

   if (user.id === '821471191578574888') {
      return message.channel.send('Sai pervertido!')
   }

   let avatar = message.author.displayAvatarURL({ format: 'png' })
   let avatar1 = user.displayAvatarURL({ format: 'png' })
   const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setAuthor(message.author.username + ` está lambendo ${user.username}`, avatar)
      .setImage(rand)
      .setFooter('Clique em 🔁 para retribuir')

   const embed2 = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setAuthor(user.username + ` gostou e retribuiu a lambida de ${message.author.username}`, avatar1)
      .setImage(rand1)

   await message.channel.send(embed).then(msg => {
      msg.react('🔁')
      msg.awaitReactions((reaction, user) => {
         if (message.mentions.users.first().id !== user.id) return

         if (reaction.emoji.name === '🔁') { // Retribuiu
            reaction.users.remove()
            return message.channel.send(embed2)
         }
      })
   })
}