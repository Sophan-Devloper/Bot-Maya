const Discord = require("discord.js")
const db = require('quick.db')
const ms = require("ms")

module.exports.run = async (client, message, args) => {
   

  if (!message.member.permissions.has("MANAGE_CHANNELS")) {
    const perms = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Permissão necessária: Manusear Canais')
    return message.reply(perms).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
  }

  if (!args[0]) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const format = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Siga o formato correto')
      .setDescription('`' + prefix + 'sorteio 1s/m/h #CanalDoSorteio Prêmio`')
      .addFields(
        {
          name: 'Exemplo',
          value: '`' + prefix + 'sorteio 2h #Sorteios Cargo Mod`\n \nO sorteio acaba em 2 horas no canal #Sorteios, prêmio: Cargo Mod'
        }
      )
    return message.channel.send(format).then(msg => msg.delete({ timeout: 15000 })).catch(err => { return })
  }

  if (!args[0].endsWith("s") && !args[0].endsWith("m") && !args[0].endsWith("h")) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const format = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Siga o formato correto')
      .setDescription('`' + prefix + 'sorteio 1s/m/h #CanalDoSorteio Prêmio`')
      .addFields(
        {
          name: 'Exemplo',
          value: '`' + prefix + 'sorteio 2h #Sorteios Cargo Mod`\n \nO sorteio acaba em 2 horas no canal #Sorteios, prêmio: Cargo Mod'
        }
      )
    return message.channel.send(format).then(msg => msg.delete({ timeout: 15000 })).catch(err => { return })
  }

  if (args[0].length > 3) {
    const nop = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Tempo limite é de 99h')
    return message.channel.send(nop)
  }

  if (isNaN(args[0][0])) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const format = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Siga o formato correto')
      .setDescription('`' + prefix + 'sorteio 1s/m/h #CanalDoSorteio Prêmio`')
      .addFields(
        {
          name: 'Exemplo',
          value: '`' + prefix + 'sorteio 2h #Sorteios Cargo Mod`\n \nO sorteio acaba em 2 horas no canal #Sorteios, prêmio: Cargo Mod'
        }
      )
    return message.channel.send(format).then(msg => msg.delete({ timeout: 15000 })).catch(err => { return })
  }
  let time = isNaN(args[0][0])
  
  let channel = message.mentions.channels.first()
  if (!channel) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const format = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Siga o formato correto')
      .setDescription('`' + prefix + 'sorteio 1s/m/h #CanalDoSorteio Prêmio`')
      .addFields(
        {
          name: 'Exemplo',
          value: '`' + prefix + 'sorteio 2h #Sorteios Cargo Mod`\n \nO sorteio acaba em 2 horas no canal #Sorteios, prêmio: Cargo Mod'
        }
      )
    return message.channel.send(format).then(msg => msg.delete({ timeout: 15000 })).catch(err => { return })
  }

  let prize = args.slice(2).join(" ")
  if (!prize) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const format = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Siga o formato correto')
      .setDescription('`' + prefix + 'sorteio 1s/m/h #CanalDoSorteio Prêmio`')
      .addFields(
        {
          name: 'Exemplo',
          value: '`' + prefix + 'sorteio 2h #Sorteios Cargo Mod`\n \nO sorteio acaba em 2 horas no canal #Sorteios, prêmio: Cargo Mod'
        }
      )
    return message.channel.send(format).then(msg => msg.delete({ timeout: 15000 })).catch(err => { return })
  }

  let Embed = new Discord.MessageEmbed()
    .setTitle(prize)
    .setDescription(`Reaja ao :tada: para participar do sorteio\nAutor: ${message.author}`)
    .setThumbnail('https://imgur.com/mNgzqkU.gif')
    .setTimestamp(Date.now() + ms(args[0]))
    .setColor(`#067aff`)
  channel.send(`:tada: **SORTEIO** :tada:`)

  let m = await channel.send(Embed)
  m.react("🎉")

  const ok = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setDescription(`Sorteio criado em ${channel} com sucesso.`)
  message.channel.send(ok).then(msg => msg.delete({ timeout: 5000 }))

  setTimeout(() => {
    if (m.reactions.cache.get("🎉").count <= 1) {
      const cancel = new Discord.MessageEmbed()
        .setColor('##067aff')
        .setTitle('Sorteio cancelado por falta de participantes.')
      return channel.send(cancel)
    }

    let winner = m.reactions.cache.get("🎉").users.cache.filter((u) => !u.bot).random()
    let avatar = winner.displayAvatarURL({ format: 'png' })

    var winembed = new Discord.MessageEmbed()
      .setColor(`#067aff`)
      .setTitle(`Vencedor/a: ${winner.tag}`)
      .setDescription(`Parabéns ${winner}, você ganhou!\n \nPrêmio: ${prize}`)
      .setThumbnail(avatar)
    channel.send(":tada: ***Sorteio Acabou*** ")

    winner.send(`Parabéééééééns!! Você ganhou o sorteio em **${message.guild.name}**.\n \nVocê ganhou: **${prize}**.`).catch(err => { return })
    message.author.send(`${winner} foi o ganhador do sorteio em ${message.guild.name}.`).catch(err => { return })
    channel.send(winembed).catch(err => { return })
  }, ms(args[0]))
}