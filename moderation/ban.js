const Discord = require('discord.js')

module.exports = {
  name: "ban",
  category: "moderation",
  run: async (client, message, args) => {
    message.delete()

    let reason = args.slice(1).join(" ")
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let logchannel = message.guild.channels.cache.find(ch => ch.name === "log")

    try {
      (!message.guild.me.hasPermission("BAN_MEMBERS"))
      return message.channel.send('Hey! Eu não tenho permissão para banir ninguém.').catch(e)//.then(msg => msg.delete({ timeout: 5000 }))
    } catch (e) {
      console.log(e)
    }

    if (!logchannel)
      return message.channel.send('Eu não achei nenhum canal com o nome `log` \n⠀\nCopie e cole isso para eu criar um pra você \n`-createchannel log`').then(msg => msg.delete({ timeout: 10000 }))

    if (!message.member.hasPermission('BAN_MEMBERS'))
      return message.channel.send(`Você não pode banir membros, que ousadia da sua parte. Você não tem as permissões necessárias`).then(msg => msg.delete({ timeout: 4000 }))

    if (!args[0])
      return message.channel.send('Você não mencionou ninguém, tenta assim -> `-ban @user razão`.').then(msg => msg.delete({ timeout: 5000 }))

    if (member.id === '451619591320371213') // Rodrigo Couto
      return message.channel.send('Eu **JAMAIS** baniria meu criador!!!').then(msg => msg.delete({ timeout: 5000 }))

    if (member.id === '516026271529173004') // Rafael Couto
      return message.channel.send('Ele é o irmão do meu criador, eu não posso banir ele O-O').then(msg => msg.delete({ timeout: 5000 }))

    if (member.id === '763072871597604874') // Raphy
      return message.channel.send('Você não quer me banir, pensa duas vezes po :cry:').then(msg => msg.delete({ timeout: 5000 }))

    if (member.id === message.author.id)
      return message.channel.send("É sério que você quer banir você mesmo? -_-").then(msg => msg.delete({ timeout: 5000 }))

    if (member.id === message.guild.owner.id)
      return message.channel.send("É sério que você quer banir o dono do servidor? -_-''").then(msg => msg.delete({ timeout: 5000 }))

    if (!reason)
      return message.channel.send("Você esqueceu da Razão -> `-ban @user razão`").then(msg => msg.delete({ timeout: 5000 }))

    let avatar = member.user.displayAvatarURL({ format: 'png' })

    const banEmbed = new Discord.MessageEmbed()
      .setTitle(`Sistema de Banimento - ${message.guild.name}`)
      .setColor('#FF1493')
      .addFields(
        {
          name: 'Usuário Banido',
          value: member.user.username
        },
        {
          name: 'Nome da Conta',
          value: member.user.tag
        },
        {
          name: 'ID do usuário',
          value: member.id
        },
        {
          name: 'Moderador',
          value: message.author
        },
        {
          name: 'Motivo',
          value: reason
        },
      )
      .setTimestamp()
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setFooter('Data:')

    try {
      await member.ban()
      await message.channel.send(`O Ban foi um sucesso! Estou mandando mais informações no ${logchannel}`).then(msg => msg.delete({ timeout: 5000 })).then(msg => logchannel.send(banEmbed))
    }
    catch (e) {
      return message.channel.send(`Eu não achei ninguém com esse nome que você mencionou.`).then(msg => msg.delete({ timeout: 4000 }))
    }
  }
}