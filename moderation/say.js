const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
  message.delete()

  let perms = message.member.hasPermission("MANAGE_MESSAGES")
  if (!perms) {
    const noperms = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Permissão Necessária: Manusear Mensagens')
    return message.channel.send(noperms).then(message => message.delete({ timeout: 5000 })).catch(err => { return })
  }

  if (!args[0]) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const format = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Siga o formato correto')
      .setDescription('`' + prefix + 'say Alguma coisa`')
    return message.channel.send(format).then(msg => msg.delete({ timeout: 6000 })).catch(err => { return })
  }

  const rody = message.author.id === ("451619591320371213")
  if (rody) {
    const sayMessage = args.join(' ')
    return message.channel.send(sayMessage)
  }

  const sayMessage = args.join(' ')
  message.channel.send(sayMessage + `\n \n- *Mensagem por: ${message.author}*`)
}