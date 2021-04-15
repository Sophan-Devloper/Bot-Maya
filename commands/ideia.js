const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso das permissões "Manusear Canais" e "Adicionar Reações" para utilizar esta função.')
    return message.inlineReply(adm)
  }

  if (!message.guild.me.hasPermission("ADD_REACTIONS")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso das permissões "Manusear Canais" e "Adicionar Reações" para utilizar esta função.')
    return message.inlineReply(adm)
  }

  var canal = db.get(`ideiachannel_${message.guild.id}`)
  if (canal === null) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const nochannel = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Nenhum canal de ideias/sugestões definido.')
      .setDescription('`' + prefix + 'setideiachannel #canal`')
    return message.inlineReply(nochannel)
  }

  if (!client.channels.cache.get(canal)) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const nochanel = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Parece que o canal de ideias/sugestões foi excluido.')
      .setDescription('`' + prefix + 'setideiachannel #canal`')
    return message.inlineReply(nochanel)
  }

  const content = args.join(" ")

  let avatar = message.author.displayAvatarURL({ format: 'png' })

  if (!args[0]) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const noideia = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Por favor, siga o formato correto')
      .setDescription('Use este comando para enviar sua ideia ao servidor, para que todos possam votar.')
      .addField('⠀', '`' + prefix + 'ideia Sua ideia em diante`')
    return message.reply(noideia)
  }

  if (content.length > 300) {
    const umk = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Sua ideia não pode passar de 500 caracteres')
    return message.inlineReply(umk)

  } else {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const msg = await client.channels.cache.get(canal).send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setAuthor(`${message.author.tag} enviou uma ideia`, avatar)
        .setDescription(content)
        .setTimestamp()
        .setFooter(`${prefix}ideia`)
    )

    await message.channel.send(`${message.author}, a sua ideia foi enviada com sucesso no canal ${client.channels.cache.get(canal)}`)

    const emojis = ["✅", "❌", "❔"]

    for (const i in emojis) {
      await msg.react(emojis[i])
    }
  }
}