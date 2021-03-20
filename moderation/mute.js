const Discord = require("discord.js")
const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   message.delete()

   let perms = message.member.hasPermission("MANAGE_ROLES")
   if (!perms)
      return message.channel.send("Você não tem permissão suficiente pra esse comando, que tal chamar um Mod ou Adm?").then(msg => msg.delete({ timeout: 3000 }))

   let logchannel = message.guild.channels.cache.find(ch => ch.name === "log")
   if (!logchannel)
      return message.channel.send('Eu não achei nenhum canal com o nome `log` \n⠀\nCopie e cole isso para eu criar um pra você \n`-createchannel log`').then(msg => msg.delete({ timeout: 8000 }))


   const role = message.guild.roles.cache.find(role => role.name === 'Muted')
   if (!role) {
      try {

         let muterole = await message.guild.roles.create({
            data: {
               name: 'Muted',
               permissions: []
            }
         })
         message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
            await channel.createOverwrite(muterole, {
               SEND_MESSAGES: false,
               ADD_REACTIONS: false,
               SPEAK: false,
               SEND_TTS_MESSAGES: false,
               MANAGE_MESSAGES: false,
               CONNECT: false,
               MANAGE_ROLES: false
            })
         })

         const rol = ('Muted')
         message.channel.send('Eu não encontrei nenhum cargo de Mute eficiente.').then(msg => msg.delete({ timeout: 5000 })).then(msg => msg.channel.send(
            'Criando cargo...'
         )).then(msg => msg.delete({ timeout: 5000 })).then(msg => msg.channel.send(
            `O cargo ${rol} foi criado com sucesso!`
         )).then(msg => msg.delete({ timeout: 3000 })).then(msg => msg.channel.send(
            'Configurando o cargo no servidor...'
         )).then(msg => msg.delete({ timeout: 5000 })).then(msg => msg.channel.send(
            `Negando permissões do cargo ${rol}...`
         )).then(msg => msg.delete({ timeout: 5000 })).then(msg => msg.channel.send(
            'Permissões Negadas:'
         )).then(msg => msg.delete({ timeout: 2000 })).then(msg => msg.channel.send(
            'Permissões Negadas:\n`Enviar mensagens de texto`'
         )).then(msg => msg.delete({ timeout: 2000 })).then(msg => msg.channel.send(
            'Permissões Negadas:\n`Enviar mensagens de texto`\n`Enviar mensagem TTS`'
         )).then(msg => msg.delete({ timeout: 2000 })).then(msg => msg.channel.send(
            'Permissões Negadas:\n`Enviar mensagens de texto`\n`Enviar mensagem TTS`\n`Conectar e falar em canais de voz`'
         )).then(msg => msg.delete({ timeout: 2000 })).then(msg => msg.channel.send(
            'Permissões Negadas:\n`Enviar mensagens de texto`\n`Enviar mensagem TTS`\n`Conectar e falar em canais de voz`\n`Reagir em mensagens com emojis`'
         )).then(msg => msg.delete({ timeout: 2000 })).then(msg => msg.channel.send(
            'Permissões Negadas:\n`Enviar mensagens de texto`\n`Enviar mensagem TTS`\n`Conectar e falar em canais de voz`\n`Reagir em mensagens com emojis`\n`Manusear mensagens e cargos`'
         )).then(msg => msg.delete({ timeout: 4000 })).then(msg => msg.channel.send(
            `Cargo criado e configurado com sucesso!`
         )).then(msg => msg.channel.send(
            `Enviando detalhes mais especificos para ${message.author} e para o dono do servidor com todos os detalhes do Comando Mute...`
         )).then(msg => msg.delete({ timeout: 8000 })).then(msg => message.guild.owner.send && message.author.send(
            `EMBED DO MUTE DETALHADA`
         ))
      } catch (error) {
         console.log(error)
      }
   }
   if (!role) return

   const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
   if (!member)
      return message.channel.send("Tenta assim `-mute @user 10s/m/h razão`").then(msg => msg.delete({ timeout: 10000 }))

   const Raphy = member.id === '821471191578574888'
   if (Raphy)
      return message.channel.send("Eu não vou mutar eu mesma, sorry :/")

   if (!member.bannable)
      return message.channel.send('Essa pessoa tem mais poder do que eu... Me sinto fraca :cry:').then(msg => msg.delete({ timeout: 5000 }))

   if (member.id === message.author.id)
      return message.channel.send('Queeee??? Você tentou mutar você mesmo? Não faça isso!').then(msg => msg.delete({ timeout: 5000 }))

   if (member.id === message.guild.owner.id)
      return message.channel.send('Queeee??? Você quer mutar o dono do servidor? O-O').then(msg => msg.delete({ timeout: 5000 }))

   if (!member)
      return message.channel.send("Tenta assim `-mute @user 10s/m/h razão`").then(msg => msg.delete({ timeout: 10000 }))

   if (member.roles.cache.has(role))
      return message.channel.send("Este usuário já está banido.").then(msg => msg.delete({ timeout: 5000 }))

   let time = args[1]
   if (!time)
      return message.channel.send('Você não me disse quanto tempo é o mute.').then(msg => msg.delete({ timeout: 3000 }))

   let reason = args.slice(2).join(" ")
   if (!reason)
      return message.channel.send('Me fala a razão do mute, rapidinho.').then(msg => msg.delete({ timeout: 3000 }))

   let avatar = member.user.displayAvatarURL({ format: 'png' })

   const muteembed = new Discord.MessageEmbed()
      .setTitle("Usuário Mutado")
      .setAuthor(member.user.tag, avatar)
      .setColor('#8B0000')
      .addFields(
         {
            name: 'Usuário',
            value: member.user.tag
         },
         {
            name: 'Moderador',
            value: message.author,
            inline: true
         },
         {
            name: 'Tempo',
            value: time,
            inline: true
         },
         {
            name: 'Motivo',
            value: reason
         },
      )
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp()

   const unmuteembed = new Discord.MessageEmbed()
      .setTitle("Usuário desmutado")
      .setAuthor(member.user.tag, avatar)
      .setColor('#8B0000')
      .addFields(
         {
            name: 'Usuário',
            value: member.user.tag,
            inline: true
         },
         {
            name: 'Ficou mutado por',
            value: time,
            inline: true
         },
      )
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp()

   const guild = client.guilds.get(guild.id)
   const role1 = guild.roles.find("name", "Muted")
   member.roles.add(role1) // Ação Mute
   member.send(`Você foi mutado no servidor ${member.guild.name}. Veja mais informações do mute no ${logchannel}`).then(msg => message.channel.send(`O Mute foi um sucesso! Estou enviando mais informações no ${logchannel}`)).then(msg => msg.delete({ timeout: 5000 })).then(msg => logchannel.send(muteembed))

   setTimeout(function () {
      member.roles.remove(role1) //Ação Desmute
      logchannel.send(unmuteembed).then(msg => member.send(`Você acaba de sair do Mute no ${member.guild.name}`))
   }, ms(time))

   module.exports.help = {
      name: "tempmute",
      aliases: ["tempmute"],
      description: "temp mute someone",
      usage: "tempmute user time reason",
      category: "moderator your server"
   }
}