const Discord = require("discord.js")
const ms = require("ms")
const db = require('quick.db')

exports.run = async (client, message, args) => {

   let prefix = db.get(`prefix_${message.guild.id}`)
   if (prefix === null) prefix = "-"

   let perms = message.member.hasPermission("MANAGE_ROLES")
   if (!perms) {
      const noperms = new Discord.MessageEmbed()
         .setColor('#FF0000')
         .setTitle('Permissão necessária: Manusear Roles (cargos)')
      return message.channel.send(noperms).then(msg => msg.delete({ timeout: 3000 })).catch(err => { return })
   }

   const logchannel = db.get(`logchannel_${message.guild.id}`)
   if (logchannel === null) {
      let prefix = db.get(`prefix_${message.guild.id}`)
      if (prefix === null) prefix = "-"

      const nolog = new Discord.MessageEmbed()
         .setColor('#FF0000')
         .setTitle('Não há Canal Log registrado.')
         .setDescription('`' + prefix + 'setlogchannel #CanalLog`')
      return message.channel.send(nolog).then(msg => msg.delete({ timeout: 120000 })).catch(err => { return })
   }

   if (!client.channels.cache.get(logchannel)) {
      let prefix = db.get(`prefix_${message.guild.id}`)
      if (prefix === null) prefix = "-"

      const nolog = new Discord.MessageEmbed()
         .setColor('#FF0000')
         .setTitle('Parece que o canal log foi excluido.')
         .setDescription('`' + prefix + 'setlogchannel #CanalLog`')
      return message.channel.send(nolog).then(msg => msg.delete({ timeout: 120000 })).catch(err => { return })
   }

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

         const criando = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('🔄 Criando e configurando cargo, espere...')

         const roleembedcreate = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setDescription(`🔄 Buscando erros...`)

         const criado = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Cargo criado e configurado com sucesso!')

         message.channel.send(criando).then(msg => msg.delete({ timeout: 8000 })).catch(err => { return }).then(msg => message.channel.send(roleembedcreate)).then(msg => msg.delete({ timeout: 4000 })).catch(err => { return }).then(msg => message.channel.send(criado))
      } catch (error) {
         console.log(error)
      }
   }
   if (!role) return

   const member = message.mentions.members.first()
   args[0] = member
   if (!args[0]) {
      const nomember = new Discord.MessageEmbed()
         .setColor('#FF0000')
         .setTitle('Favor, mencione o usuário.')
         .setDescription('`' + prefix + 'mute @user 10s/m/h Razão`')
      return message.channel.send(nomember).then(msg => msg.delete({ timeout: 60000 })).catch(err => { return })
   }

   if (db.get(`whitelist_${member.id}`)) {// Rodrigo Couto
      const banrody = new Discord.MessageEmbed()
         .setColor('GREEN')
         .setTitle(member.user.username + ' está na whitelist.')
      return message.channel.send(banrody).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
   }

   if (!role.editable) {
      const soberol = new Discord.MessageEmbed()
         .setColor('BLUE')
         .setTitle('Meu cargo não é alto o suficiente.')
         .addFields(
            {
               name: 'Suba meu cargo',
               value: '1 - Configurações do Servidor\n2 - Cargos\n3 - Procure meu cargo "Maya"\n4 - Arraste meu cargo para um dos primeiros\n5 - Salve as alterações e tente novamente.'
            }
         )

      const sobcarg = new Discord.MessageEmbed()
         .setColor('#FF0000')
         .setTitle('🔄 Um erro foi encontrado. Buscando solução...')

      setTimeout(function () {
         message.channel.send(soberol)
      }, 6000)
      return message.channel.send(sobcarg)

   }

   if (member.id === message.author.id) {
      const muteproprio = new Discord.MessageEmbed()
         .setColor('BLUE')
         .setTitle('Tem certeza que deseja mutar você mesmo?')

      return message.channel.send(muteproprio).then(msg => {
         msg.react('✅') // Check
         msg.react('❌') // X

         msg.awaitReactions((reaction, user) => {
            if (message.author.id !== user.id) return

            const troll = new Discord.MessageEmbed()
               .setColor('GREEN')
               .setTitle('Se você tem cargo para usar este comando, você não pode mutar você mesmo. 😗')

            if (reaction.emoji.name === '✅') { // home
               msg.delete()
               return message.channel.send(troll)
            }
            if (reaction.emoji.name === '❌') { // MPEmbed
               msg.delete()
            }
         })
      })
   }

   if (member.id === message.guild.owner.id) {
      const dono = new Discord.MessageEmbed()
         .setColor('#FF0000')
         .setTitle('Mutar o dono do servidor não é uma opção.')
      return message.channel.send(dono).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
   }

   if (member.hasPermission('ADMINISTRATOR')) {
      const unbannable = new Discord.MessageEmbed()
         .setColor('#FF0000')
         .setTitle('Esta pessoa tem um cargo maior que o meu.')
      return message.channel.send(unbannable).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
   }

   var time = args[1]
   if (!time) {
      const notime = new Discord.MessageEmbed()
         .setColor('#FF0000')
         .setTitle('Siga o padrão do comando!')
         .setDescription('`' + prefix + 'mute @user 5s/m/h Razão`')
         .setFooter('Deseja o ' + prefix + 'muteinfo' + '?')

      const embeddetail = new Discord.MessageEmbed()
         .setColor("BLUE")
         .setTitle('Comando Mute - Detalhes')
         .addFields(
            {
               name: '⌨️ Formato',
               value: '`' + prefix + 'mute @user 5s/m/h Razão`'
            },
            {
               name: '🔄 Atualize o Mute System',
               value: '1 - `' + prefix + 'delrole @Muted` Delete o cargo.\n2 - `' + prefix + 'mute` Ativa a configuração do cargo Mute.'
            },
            {
               name: '🆕 Novos canais de texto/voz',
               value: 'O Discord ainda não permite a auto atualização de roles.\nSempre que você criar um canal de texto/voz, atualize o mute da Maya para perfeito funcionamento.'
            },
            {
               name: '📑 Canal Log',
               value: 'Neste canal, mandarei todos os detalhes do mute. Você pode deixar este canal público ou privado alterando as permissões dele.\nClaro, não vá me privar dele, né?.'
            },
            {
               name: '⬆️ Maya Role',
               value: 'É extremamente importe que o meu cargo, "Maya" esteja acima de todas as outras roles, para que eu possa efetuar meus comandos com maestria.'
            }
         )
         .setTimestamp()

      return message.channel.send(notime).then(msg => {
         msg.react('✅') // Check
         msg.react('❌') // X

         msg.awaitReactions((reaction, user) => {
            if (message.author.id !== user.id) return

            if (reaction.emoji.name === '✅') { // Sim
               msg.delete()
               message.channel.send(embeddetail)
            }
            if (reaction.emoji.name === '❌') { // Não
               msg.delete()
            }
         })
      })
   } else if (time.length > 4) {
      const limitover = new Discord.MessageEmbed()
         .setColor('#FF0000')
         .setTitle('O tempo não pode passar de 4 digitos.')
      return message.channel.send(limitover).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
   }

   let reason = args.slice(2).join(" ")
   if (!reason)
      reason = `Razão não especificada por ${message.author.username}.`

   const muteembed = new Discord.MessageEmbed()
      .setAuthor(`Sistema de Mute - ${member.guild.name}`)
      .setColor('#8B0000')
      .addFields(
         {
            name: 'Usuário',
            value: member.user,
            inline: true
         },
         {
            name: 'Nome Original',
            value: member.user.tag
         },
         {
            name: 'ID do usuário',
            value: member.user.id
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

   if (member.roles.cache.has(role.id)) {
      const unbannable = new Discord.MessageEmbed()
         .setColor('BLUE')
         .setTitle(`Esta pessoa já está mutada. Deseja mutar ${member.user.username} novamente?`)

      message.channel.send(unbannable).then(msg => {
         msg.react('✅') // Check
         msg.react('❌') // X

         msg.awaitReactions((reaction, user) => {
            const logchannel = db.get(`logchannel_${member.guild.id}`)
            if (message.author.id !== user.id) return
            if (reaction.emoji.name === '✅') { // home
               msg.delete()

               member.roles.remove(role).then(x => x.roles.add(role))

               setTimeout(function () {
                  member.roles.remove(role) //Ação Desmute
                  client.channels.cache.get(logchannel).send(unmuteembed)
               }, ms(time))

               const rela = new Discord.MessageEmbed()
                  .setColor('GREEN')
                  .setTitle(`${member.user.username} foi remutado com sucesso.`)
                  .setDescription(`Mais informações em ${client.channels.cache.get(logchannel).name}`)

               setTimeout(function () {
                  client.channels.cache.get(logchannel).send(muteembed).catch(err => {
                     message.channel.send(err)
                  })
               }, 3500)
               return message.channel.send(rela)
            }
            if (reaction.emoji.name === '❌') { // MPEmbed
               msg.delete()
            }
         })
      })
   }

   const muteq = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setDescription(`Mutar ${member.user} por ${time}?`)

   if (!member.roles.cache.has(role.id)) {
      const logchannel = db.get(`logchannel_${member.guild.id}`)
      await message.channel.send(muteq).then(msg => {
         msg.react('✅') // Check
         msg.react('❌') // X

         msg.awaitReactions((reaction, user) => {
            if (message.author.id !== user.id) return

            if (reaction.emoji.name === '✅') { // Sim
               msg.delete()

               member.roles.add(role) // Ação Mute
               setTimeout(function () {
                  member.roles.remove(role) //Ação Desmute
                  client.channels.cache.get(logchannel).send(unmuteembed)
               }, ms(time))

               const rela = new Discord.MessageEmbed()
                  .setColor('GREEN')
                  .setTitle(`${member.user.username} foi mutado com sucesso.`)
                  .setDescription(`Mais informações em ${client.channels.cache.get(logchannel).name}`)

               message.channel.send(rela)
                  client.channels.cache.get(logchannel).send(muteembed)
            }
            if (reaction.emoji.name === '❌') { // MPEmbed
               msg.delete()
            }
         })
      })
   }
}