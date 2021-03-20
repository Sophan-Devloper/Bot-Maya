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
      } catch (error) {
         console.log(error)
      }
      try {
         const role7 = message.guild.roles.cache.find(role => role.name === 'Muted')

         const roleembedcreate = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setTitle('Detalhes Especificos')
            .setDescription(`Enviando detalhes mais especificos para ${message.author} e para o dono do servidor...`)

         message.channel.send('Eu não encontrei nenhum cargo de Mute eficiente.').then(msg => msg.delete({ timeout: 5000 })).then(msg => msg.channel.send(
            'Criando cargo...'
         )).then(msg => msg.delete({ timeout: 5000 })).then(msg => msg.channel.send(
            `O cargo ${role7} foi criado com sucesso!`
         )).then(msg => msg.delete({ timeout: 3000 })).then(msg => msg.channel.send(
            'Configurando o cargo no servidor...'
         )).then(msg => msg.delete({ timeout: 5000 })).then(msg => msg.channel.send(
            `Negando permissões do cargo ${role7}...`
         )).then(msg => msg.delete({ timeout: 5000 })).then(msg => msg.channel.send(
            'Permissões Negadas:'
         )).then(msg => msg.delete({ timeout: 1000 })).then(msg => msg.channel.send(
            'Permissões Negadas:\n`Enviar mensagens de texto`'
         )).then(msg => msg.delete({ timeout: 1000 })).then(msg => msg.channel.send(
            'Permissões Negadas:\n`Enviar mensagens de texto`\n`Enviar mensagem TTS`'
         )).then(msg => msg.delete({ timeout: 1000 })).then(msg => msg.channel.send(
            'Permissões Negadas:\n`Enviar mensagens de texto`\n`Enviar mensagem TTS`\n`Conectar e falar em canais de voz`'
         )).then(msg => msg.delete({ timeout: 1000 })).then(msg => msg.channel.send(
            'Permissões Negadas:\n`Enviar mensagens de texto`\n`Enviar mensagem TTS`\n`Conectar e falar em canais de voz`\n`Reagir em mensagens com emojis`'
         )).then(msg => msg.delete({ timeout: 1000 })).then(msg => msg.channel.send(
            'Permissões Negadas:\n`Enviar mensagens de texto`\n`Enviar mensagem TTS`\n`Conectar e falar em canais de voz`\n`Reagir em mensagens com emojis`\n`Manusear mensagens e cargos`'
         )).then(msg => msg.delete({ timeout: 6000 })).then(msg => msg.channel.send(
            'Verificando erros na configuranção...'
         )).then(msg => msg.delete({ timeout: 2000 })).then(msg => msg.channel.send(
            'Nenhum erro encontrado.'
         )).then(msg => msg.delete({ timeout: 1500 })).then(msg => msg.channel.send(
            roleembedcreate
         )).then(msg => msg.delete({ timeout: 8000 })).then(msg => msg.channel.send(
            `Cargo criado e configurado com sucesso!`
         ))
      } catch (error) {
         console.log(error)
      }

      function msgembed() {
         if (message.guild.owner.id === message.author.id) {
            message.author.send(`EMBED DO MUTE DETALHADA`)
         }
         if (message.guild.owner.id != message.author.id) {
            message.author.send(`EMBED DO MUTE DETALHADA`)
            message.guild.owner.send(`EMBED DO MUTE DETALHADA`)
         }
      }
      setTimeout(msgembed, 44000)
   }
   if (!role) return

   const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
   if (!member)
      return message.channel.send("Comando Mute\n`-mute @user 10s/m/h razão`").then(msg => msg.delete({ timeout: 10000 }))

   const Raphy = member.id === '821471191578574888'
   if (Raphy)
      return message.channel.send("Eu não vou mutar eu mesma, sorry :/")

   if (!role.editable)
      return message.channel.send(`O cargo ${role} está acima do meu. Você pode subir meu cargo?`).then(msg => msg.delete({ timeout: 6000 }))

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
      reason = 'Razão não especificada pelo Moderador.'

   let avatar = member.user.displayAvatarURL({ format: 'png' })

   const muteembed = new Discord.MessageEmbed()
      .setAuthor(`Sistema de Mute - ${member.guild.name}`)
      .setColor('#8B0000')
      .addFields(
         {
            name: 'Usuário',
            value: `${member.user}`,
            inline: `true`
         },
         {
            name: 'Nome do usuário original',
            value: `${member.user.tag}`
         },
         {
            name: 'ID do usuário',
            value: member.id
         },
         {
            name: 'Moderador',
            value: message.author,
            inline: true
         },
         {
            name: 'Tempo do Mute',
            value: time,
            inline: true
         },
         {
            name: 'Motivo do Mute',
            value: reason
         },
      )
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp()

   const unmuteembed = new Discord.MessageEmbed()
      .setAuthor(`Sistema de Mute - ${member.guild.name}`)
      .setColor('#8B0000')
      .addFields(
         {
            name: 'Usuário destumado com sucesso!',
            value: member.user.tag,
            inline: true
         },
      )
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp()

   member.roles.add(role) // Ação Mute
   member.send(`Você foi mutado no servidor ${member.guild.name}.\n⠀\nVeja mais informações do mute no ${logchannel}`).then(msg => message.channel.send(
      `O Mute foi um sucesso! Estou enviando mais informações no ${logchannel}`
   )).then(msg => msg.delete({ timeout: 4000 })).then(msg => logchannel.send(muteembed))

   setTimeout(function () {
      member.roles.remove(role) //Ação Desmute
      logchannel.send(unmuteembed).then(msg => member.send(`Seu mute chegou ao fim no servidor ${member.guild.name}`))
   }, ms(time))

   module.exports.help = {
      name: "tempmute",
      aliases: ["tempmute"],
      description: "temp mute someone",
      usage: "tempmute user time reason",
      category: "moderator your server"
   }
}