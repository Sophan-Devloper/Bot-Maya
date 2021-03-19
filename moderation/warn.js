const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "warn",
  category: "moderation",
  usage: "warn <@mention> <reason>",
  description: "Warn anyone who do not obey the rules",

  run: async (client, message, args) => {
    message.delete()
    
    if(!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("Você não é da Moderação, não use este comando, é perigoso.").then(msg => msg.delete({timeout: 5000}))

    let logchannel = message.guild.channels.cache.find(ch=>ch.name==="log")
    if (!logchannel) 
      return message.channel.send('Eu não achei nenhum canal com o nome `log` \n⠀\nCopie e cole isso para eu criar um pra você \n`-createchannel log`').then(msg => msg.delete({timeout: 10000}))

    const user = message.mentions.members.first()
    if(!user)
      return message.channel.send("Você não mencionou a pessoa -> `-warn @user razão`").then(msg => msg.delete({timeout: 5000}))

    if(member.id === '451619591320371213')
      return message.channel.send("É claro que eu não vou dar Warn no meu criador!!!").then(msg => msg.delete({timeout: 5000}))
    
    if(message.mentions.users.first().bot)
      return message.channel.send("Você não pode dar warn em bots").then(msg => msg.delete({timeout: 5000}))
    
    if(message.author.id === user.id)
      return message.channel.send("Como assim?? Você não pode dar Warn em você mesmo!").then(msg => msg.delete({timeout: 5000}))
    
    if(user.id === message.guild.owner.id) 
      return message.channel.send("É sério que você quer dar um aviso no criador do servidor? -_-").then(msg => msg.delete({timeout: 5000}))
    
    const reason = args.slice(1).join(" ")
    if(!reason)
      return message.channel.send("Você esqueceu da Razão => `-warn @user razão`").then(msg => msg.delete({timeout: 5000}))
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    if(warnings === 5)
      return message.channel.send(`${message.mentions.users.first().username} já atingiu o limite de 5 Warns. Sujero uma punição maior, que tal mute?`).then(msg => msg.delete({timeout: 5000}))

    if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`Você recebeu um aviso. \n⠀\nServidor:**${message.guild.name}** \nRazão: ${reason}`)

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`) 
    let msg1 = new Discord.MessageEmbed()
            .setTitle(`Sistema de Avisos ${message.guild.name}`)
            .setColor('#FF1493')
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
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
      await message.channel.send(`O Warn foi um sucesso! Estou enviando mais informações no ${logchannel}.`).then(msg => msg.delete({timeout: 5000})).then(msg => logchannel.send(msg1))

    } else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(`Você recebeu um aviso. \n⠀\nServidor: ${message.guild.name} \nRazão: ${reason}`)
       
        let msg2 = new Discord.MessageEmbed()
        .setTitle(`Sistema de Avisos ${message.guild.name}`)
        .setColor('#FF1493')
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
        .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
        await message.channel.send(`O Warn foi um sucesso! Estou enviando mais informações no ${logchannel}.`).then(msg => msg.delete({timeout: 5000})).then(msg => logchannel.send(msg2))
   }}}