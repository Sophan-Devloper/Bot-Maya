const Discord = require('discord.js')

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
    return message.channel.send('O que você quer que eu diga?').then(msg => msg.delete({ timeout: 6000 })).catch(err => { return })
  }

  const sayMessage = args.join(' ')
  message.channel.send(sayMessage + `\n \n- *${message.author.username}*`)
}