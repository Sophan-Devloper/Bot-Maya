const Discord = require("discord.js")
const ms = require("ms")

module.exports = {
  name: "giveaway",
  description: "Create a simple giveaway",
  usage: "<time> <channel> <prize>",
  category: "fun",

  run: async (bot, message, args) => {
    message.delete()

    if (!message.member.permissions.has("MANAGE_CHANNELS"))
      return message.reply("Ooops, apenas a Staff do Servidor pode fazer sorteios.").then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })

    if (!args[0])
      return message.channel.send('Comando Sorteio `-sorteio 1s/m/h/d #CanalDoSorteio Prêmio`\n\nSegundos/Minutos/Horas/Dias').then(msg => msg.delete({ timeout: 15000 })).catch(err => { return })

    if (
      !args[0].endsWith("s") &&
      !args[0].endsWith("m") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("d")
    )
      return message.channel.send(`Me diga qual o tempo do sorteio, por favor. Ex: 10s/m/h/d \n\nSegundos/Minutos/Horas/Dias`).then(msg => msg.delete({ timeout: 15000 })).catch(err => { return })

    if (isNaN(args[0][0]))
      return message.channel.send('Isso não é um número! Digite `-sorteio`, por favor.').then(msg => msg.delete({ timeout: 15000 })).catch(err => { return })
    let time = isNaN(args[0][0])

    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send('Eu não achei o canal do sorteio. Por favor, me diga.').then(msg => msg.delete({ timeout: 15000 })).catch(err => { return })

    let prize = args.slice(2).join(" ")
    if (!prize)
      return message.channel.send(`Hey, qual é o prêmio?`)

    let Embed = new Discord.MessageEmbed()
      .setTitle(`Sorteios ${message.guild.name}`)
      .addFields(
        {
          name: 'Prêmio',
          value: prize,
        },
        {
          name: 'Sorteio por',
          value: message.author,
        },
      )
      .setThumbnail('https://imgur.com/GYv2cuh.gif')
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`YELLOW`)
      .setFooter('Resultado')
    channel.send(':tada::tada: 🥳Novo Sorteio🥳 :tada::tada:')
    let m = await channel.send(Embed)
    m.react("🎉").then(msg => channel.send(`Tempo do Sorteio: ${args[0]}`)).then(msg => message.channel.send(`Eu criei o sorteio no canal: ${channel}, assim como foi pedido.`)).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })

    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`)
        return message.channel.send(`Não teve participantes suficiente. Eu tomei a liberdade de encerrar o sorteio...`)
      }

      let winner = m.reactions.cache.get("🎉").users.cache.filter((u) => !u.bot).random()
      let avatar = winner.displayAvatarURL({ format: 'png' })

      var winembed = new Discord.MessageEmbed()
        .setColor(`YELLOW`)
        .addFields(
          {
            name: 'Vencedor/a',
            value: winner
          },
          {
            name: 'Prêmio',
            value: prize
          },
        )
        .setImage('https://imgur.com/DUPKAd1.png')
        .setThumbnail(avatar)
      channel.send(winembed).then(msg => channel.send(`Parabéééns ${winner}`)).then(msg => winner.send(`Parabéééééééns!! Você ganhou o sorteio no Servidor **${message.guild.name}**.\n \nVocê ganhou: **${prize}**.`))
    }, ms(args[0]))
  }
}