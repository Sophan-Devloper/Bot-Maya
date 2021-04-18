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
      .setTitle('❌ Nenhum canal de ideias/sugestões definido.')
      .setDescription('Graças ao sistema de organização da Maya, este é um dos comandos que requer um canal especifico para funcionamento.\n \nAs ideias e sugestões dos membros ficará em um canal para serem votadas pelos os outros membros. Bem... Se a administração do servidor quiser é claro.')
      .addFields(
        {
          name: 'Comando de Ativação',
          value: '`' + prefix + 'setideiachannel #canal`'
        },
        {
          name: 'Comando de Desativação',
          value: '`' + prefix + 'setideiachannel off`'
        }
      )
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
      .setColor('BLUE')
      .setTitle('💡 Comando Ideia/Sugestão')
      .setDescription('Use este comando para enviar sua ideia ao servidor, para que todos possam votar.\n \nMáximo: 300 letras\nMínimo: 10 letras')
      .addField('Comando', '`' + prefix + 'sugestao Sua ideia em diante`')
    return message.inlineReply(noideia)
  }

  if (content.length > 300) {
    const umk = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Sua ideia/sugestão não pode passar de 300 caracteres')
    return message.inlineReply(umk)

  }

  if (content.length < 10) {
    const umk = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Sua ideia/sugestão é curta demais, escreva mais do que 10 caracteres')
    return message.inlineReply(umk)

  } else {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const msg = await client.channels.cache.get(canal).send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setAuthor(`${message.author.tag} enviou sua ideia/sugestão`, avatar)
        .setDescription(content)
        .setTimestamp()
        .setFooter(`💡 ${prefix}ideia`)
    )

    await message.inlineReply(`✅ A sua ideia foi enviada com sucesso no canal ${client.channels.cache.get(canal)}`)

    const emojis = ["✅", "❌", "❔"]

    for (const i in emojis) {
      await msg.react(emojis[i])
    }
  }
}