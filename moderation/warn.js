const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Manusear Cargos" para utilizar esta função.')
    return message.channel.send(adm)
  }

  if (!message.member.hasPermission(["MANAGE_ROLES"])) {
    const perms = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Permissão Necessária: Manusear Cargos')
    return message.channel.send(perms)
  }

  let logchannel = db.get(`logchannel_${message.guild.id}`)
  if (logchannel === null) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const nolog = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Não há Canal Log registrado.')
      .setDescription('`' + prefix + 'setlogchannel #CanalLog`')
    return message.channel.send(nolog)
  }

  if (!client.channels.cache.get(logchannel)) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const nolog1 = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Parece que o canal log foi excluido.')
      .setDescription('`' + prefix + 'setlogchannel #CanalLog`')
    return message.channel.send(nolog1)
  }

  const user = message.mentions.members.first()
  if (!user) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const nouser = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Siga o formato correto')
      .setDescription('`' + prefix + 'warn @user Razão (opcional)`')
    return message.channel.send(nouser)
  }

  if (db.get(`whitelist_${user.id}`)) {// Rodrigo Couto
    const banrody = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle(user.user.username + ' está na whitelist.')
    return message.channel.send(banrody)
  }

  if (message.mentions.users.first().bot) {
    const nobot = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Bots não podem receber warns.')
    return message.channel.send(nobot)
  }

  if (message.author.id === user.id) {
    const autowarn = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Auto warn não é uma opção.')
    return message.channel.send(autowarn)
  }

  if (user.id === message.guild.owner.id) {
    const owner = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Warn no dono do servidor não é uma opção.')
    return message.channel.send(owner)
  }

  let reason = args.slice(1).join(" ")
  if (!reason) { reason = `${message.author.username} não especificou nenhuma razão` }

  let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
  if (warnings === 5) {
    const limit = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle(`Limite de warns atingido`)
      .setDescription(`${user} atingiu 4 warns. Está na hora de uma punição maior. Mute? Kick? Ban?`)
    return message.channel.send(limit)
  }

  if (warnings === null) {
    db.set(`warnings_${message.guild.id}_${user.id}`, 1)
    const newwarn = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('Alerta de Aviso')
      .setDescription(`Você recebeu um aviso no servidor ${message.guild.name}\n \nRazão: ${reason}`)
    user.send(newwarn).catch(err => { return })

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    let msg1 = new Discord.MessageEmbed()
      .setTitle(`Sistema de Avisos ${message.guild.name}`)
      .setColor('GRAY')
      .addFields(
        {
          name: 'Usuário',
          value: user.user.tag
        },
        {
          name: 'Moderador',
          value: message.author
        },
        {
          name: 'Motivo',
          value: reason
        },
        {
          name: 'Warnings',
          value: warnings
        },
      )
      .setTimestamp()
      .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))

    const sucess = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setDescription(`Warn adicionado! Estou enviando mais informações no ${client.channels.cache.get(logchannel)}.`)

    message.channel.send(sucess)
    client.channels.cache.get(logchannel).send(msg1)

  } else if (warnings !== null) {
    db.add(`warnings_${message.guild.id}_${user.id}`, 1)
    const newwarn = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('Alerta de Aviso')
      .setDescription(`Você recebeu um aviso no servidor ${message.guild.name}\n \nRazão: ${reason}`)
    user.send(newwarn).catch(err => { return })

    let msg2 = new Discord.MessageEmbed()
      .setTitle(`Sistema de Avisos ${message.guild.name}`)
      .setColor('GRAY')
      .addFields(
        {
          name: 'Usuário',
          value: user.user.tag
        },
        {
          name: 'Moderador',
          value: message.author
        },
        {
          name: 'Motivo',
          value: reason
        },
        {
          name: 'Warnings',
          value: warnings
        },
      )
      .setTimestamp()
      .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))

    const sucess = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setDescription(`O Warn foi um sucesso! Estou enviando mais informações no ${client.channels.cache.get(logchannel)}.`)

    message.channel.send(sucess)
    client.channels.cache.get(logchannel).send(msg2)
  }
}