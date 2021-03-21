const Discord = require('discord.js')
const ms = require("ms")
const confirm = require('./confirm.json')


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

    const item = confirm[Math.floor(Math.random() * confirm.length)]
    const filter = response => {
      return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase())
    }

    
    const startban = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle(`‼️ Sistema de Banimento - ALERTA ‼️`)
      .setDescription(`⠀`)
      .addFields(
        {
          name: `${message.author.username}, você está banindo ${member.user.username} do servidor.`,
          value: `⠀`
        }
      )
      .setFooter(`Você confirma este comando?`)
  
    message.channel.send(startban).then(() => {
      message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] }).then(collected => {

        function f1() {
          message.channel.send(`Banindo usuário...`).then(msg => msg.delete({ timeout: 4000 }))
          member.ban()
        }

        function f2() {
          message.channel.send(`Banimento efetuado com sucesso.`).then(msg => msg.delete({ timeout: 3000 }))
        }

        function f3() {
          message.channel.send(`Enviando relatório no canal ${logchannel}...`).then(msg => msg.delete({ timeout: 7500 }))

        }

        function f4() {
          logchannel.send(banEmbed)
        }

        function f5() {
          message.channel.send(`Relatório enviado.`).then(msg => msg.delete({ timeout: 10000 }))
        }

        setTimeout(f1, 1000 * 0,5)
        setTimeout(f2, 1000 * 4.5)
        setTimeout(f3, 1000 * 7.5)
        setTimeout(f4, 1000 * 14)
        setTimeout(f5, 1000 * 15)
      }).catch(collected => {
        const andban = new Discord.MessageEmbed()
          .setColor('#DCDCDC')
          .setAuthor(`Banimento Cancelado.`)
          .setFooter(`Nenhuma resposta de ${message.author.username}`)
        message.channel.send(andban).then(msg => msg.delete({ timeout: 6000 }))
      })
    })
  }
}