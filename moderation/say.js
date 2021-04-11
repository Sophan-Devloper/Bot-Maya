const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  message.delete()

  const rody = message.author.id === ("451619591320371213")
  if (rody) {
    const sayMessage = args.join(' ')
    return message.channel.send(sayMessage)
  }

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Manusear Mensagens" para utilizar esta função.')
    return message.author.send(adm).catch(err => { return })
  }

  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    const noperms = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Permissão Necessária: Manusear Mensagens')
    return message.channel.send(noperms)
  }

  if (!args[0]) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const format = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Siga o formato correto')
      .setDescription('`' + prefix + 'say Alguma coisa`')
    return message.channel.send(format)
  }

  const sayMessage = args.join(' ')
  message.channel.send(sayMessage + `\n \n- *Mensagem por: ${message.author}*`)
}