const Discord = require('discord.js')

module.exports = {
  name: "unmute",
  category: "moderation",

  run: async (client, message, args) => {
      
    let logchannel = message.guild.channels.cache.find(ch=>ch.name==="log")
    if (!logchannel)
      return message.channel.send('Eu não achei nenhum canal com o nome `log` \n⠀\nCopie e cole isso para eu criar um pra você \n`-createchannel log`').then(msg => msg.delete({timeout: 7000}))

    if (!message.member.hasPermission("MANAGE_ROLES")) 
      return message.channel.send("Ops.. Você não pode usar esse comando não, sorry...").then(msg => msg.delete({timeout: 7000}))

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) 
      return message.channel.send("Eu não tenho permissão suficiente, me dá Adm?").then(msg => msg.delete({timeout: 7000}))

    const user = message.mentions.members.first();
    if (!user) 
      return message.channel.send("Vai ser dificil eu desmutar alguém que você não marcou :/").then(msg => msg.delete({timeout: 7000}))

    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    if (user.roles.cache.has(muterole))
      return message.channel.send("Essa pessoa não está mutada. Acho que você está usando substâncias duvidosas...").then(msg => msg.delete({timeout: 7000}))

    user.roles.remove(muterole)
    let unmuteembed = new Discord.MessageEmbed()
          .setTitle(`Sistema de Mute ${user.guild.name}`)
          .setColor('RED')
          .addFields(
            {
              name: 'Usuário Desmutado',
              value: user
            },
            {
              name: 'Moderador',
              value: message.author.username
            },
          )
          .setTimestamp()
    await message.channel.send(`${user.user.username} foi desmutado com sucesso! Estou enviando mais informações no ${logchannel}`).then(msg => msg.delete({timeout: 5000})).then(msg => logchannel.send(unmuteembed))
    user.send(`Você saiu do mute <3 \n \nServidor: ${message.guild.name} \nModerador: ${message.author}`)
}}