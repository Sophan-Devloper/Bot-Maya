const Discord = require('discord.js')
const ms = require("ms")


module.exports = {
  name: "Quiz",
  description: "Teste seu conhecimento!",
  category: "fun",

  run: async (bot, message, args) => {
    //module.exports.run = async (bot, client, message, args) => {
    message.delete()

    var reason = args.slice(1).join(" ")
    var member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let logchannel = message.guild.channels.cache.find(ch => ch.name === "log")
    let perms = message.member.hasPermission("BAN_MEMBERS")

    if (!perms)
      return message.channel.send(`Você não pode banir membros, que ousadia da sua parte.`).then(msg => msg.delete({ timeout: 4000 }))

    if (!logchannel)
      return message.channel.send('Eu não achei nenhum canal com o nome `log` \n⠀\nQuer que eu crie um?\n`-createchannel log`').then(msg => msg.delete({ timeout: 10000 }))

    if (!member)
      return message.channel.send('Você não mencionou ninguém.\n\n`-ban @user razão`').then(msg => msg.delete({ timeout: 5000 }))

    if (member.hasPermission('KICK_MEMBERS', 'BAN_MEMBERS'))
      return message.channel.send(`${member.user.username} é forte nesse servidor, eu não posso banir.`).then(msg => msg.delete({ timeout: 5000 }))

    if (member.id === '451619591320371213') // Rodrigo Couto
      return message.channel.send('Eu **JAMAIS** baniria meu criador!!!').then(msg => msg.delete({ timeout: 5000 }))

    if (member.id === '516026271529173004') // Rafael Couto
      return message.channel.send('Ele é o irmãozinho do meu criador, eu não posso banir ele O-O').then(msg => msg.delete({ timeout: 5000 }))

    if (member.id === '821471191578574888') // Raphy
      return message.channel.send('Você não quer me banir, pensa duas vezes po :cry:').then(msg => msg.delete({ timeout: 5000 }))

    if (member.id === message.author.id)
      return message.channel.send("É sério que você quer banir você mesmo? 😮").then(msg => msg.delete({ timeout: 5000 }))

    if (member.id === message.guild.owner.id)
      return message.channel.send("É sério que você quer banir o dono do servidor? 😱").then(msg => msg.delete({ timeout: 5000 }))

    if (!reason)
      reason = `${message.author.username} não especificou nenhuma razão.`

    const banEmbed = new Discord.MessageEmbed()
      .setTitle(`Sistema de Banimento - ${message.guild.name}`)
      .setColor('#FF1493')
      .addFields(
        {
          name: 'Usuário Banido',
          value: member.user,
          inline: true
        },
        {
          name: 'Nome da Conta',
          value: member.user.tag,
          inline: true
        },
        {
          name: 'ID do usuário',
          value: member.id
        },
        {
          name: 'Moderador',
          value: message.author.username
        },
        {
          name: 'Motivo',
          value: reason
        },
      )
      .setTimestamp()
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setFooter('Data')

    const startban = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setDescription(`Você deseja banir ${member.user.username} do servidor?`)

    await message.channel.send(startban).then(msg => {
      msg.react('✅') // Check
      msg.react('❌') // X

      msg.awaitReactions((reaction, user) => {
        if (message.author.id !== user.id) return

        if (reaction.emoji.name === '✅') { // home
          msg.delete()
          member.ban()
          message.channel.send(`Enviando relatório em ${logchannel}...`).then(msg => msg.delete({ timeout: 3000 }))
          logchannel.send(banEmbed)
        }
        if (reaction.emoji.name === '❌') { // RPEmbed
          msg.delete()
          msg.channel.send("Comando cancelado.").then(msg => msg.delete({ timeout: 4000 }))
        }
      })
    })
  }
}