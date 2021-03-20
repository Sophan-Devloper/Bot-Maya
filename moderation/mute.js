   const Discord = require("discord.js")
   const ms = require("ms")

   module.exports.run = async (client, message, args) => {
      message.delete()

      let perms = message.member.hasPermission("MANAGE_ROLES")
      if (!perms)
         return message.channel.send("Você não tem permissão suficiente pra esse comando, que tal chamar um Mod ou Adm?").then(msg => msg.delete({ timeout: 3000 }))

      let logchannel = message.guild.channels.cache.find(ch => ch.name === "log")
      if (!logchannel)
         return message.channel.send('Eu não achei nenhum canal com o nome `log` \n⠀\nCopie e cole isso para eu criar um pra você \n⠀\n`-createchannel log`').then(msg => msg.delete({ timeout: 8000 }))

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
            const embeddetail = new Discord.MessageEmbed()
               .setColor("#DCDCDC")
               .setTitle('Comando Mute - Detalhes')
               .addFields(
                  {
                     name: ':gear: Desenvolvedor da Raphy :gear:',
                     value: 'Olá, meu nome é Rodrigo, desenvolvedor da Raphy. O sistema de Mute da Raphy utiliza o sistema de Permissões liberada pelo Discord da biblioteca Discord.js.\nNo resumo... Quem for mutado pela Raphy, não vai conseguir falar em nenhum canal de texto e de voz no servidor inteiro.\nCom a otimização da Raphy, você não precisa configurar um cargo Mute em cada canal de texto/voz manualmente, a Raphy faz isso sozinha pra você.'
                  },
                  {
                     name: '🔄 Atualize o Mute System',
                     value: '1 - `-delrole @Muted` Delete o cargo.\n2 - `-mute` Ativa a configuração do cargo Mute.'
                  },
                  {
                     name: '🆕 Novos canais de texto/voz',
                     value: 'O Discord ainda não permite a auto atualização de roles.\nSempre que você criar um canal de texto/voz, atualize o mute da Raphy para perfeito funcionamento.'
                  },
                  {
                     name: '📑 Canal Log',
                     value: 'Neste canal, mandarei todos os detalhes do mute. Você pode deixar este canal público ou privado alterando as permissões dele.\nClaro, não vá me privar dele, né?.'
                  },
                  {
                     name: '⬆️ Raphy Role',
                     value: 'É extremamente importe que o meu cargo, "Raphy" esteja acima de todas as outras roles, para que eu possa efetuar meus comandos com maestria.'
                  },
               )

            if (message.guild.owner.id === message.author.id) {
               message.author.send(embeddetail)
            }
            if (message.guild.owner.id != message.author.id) {
               message.author.send(embeddetail)
               message.guild.owner.send(embeddetail)
            }
         }
         setTimeout(msgembed, 44000)
      }
      if (!role) return

      const mutebotton = 'https://imgur.com/jdFJK4b.gif'
      const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

      const nomember = new Discord.MessageEmbed()
         .setColor('#DCDCDC')
         .setTitle('🔇 Comando Mute')
         .setDescription('Mute um usuário por um tempo determinado.')
         .setThumbnail(mutebotton)
         .addFields(
            {
               name: '📜 Detalhes',
               value: '`-mute` Comando de ativação\n`@user` Marque a pessoa que será mutada\n`1, 2, 3...` Tempo (s - segundo | m - minutos | h - horas)\n`razão` Escreva o motivo do mute, se quiser.'
            },
            {
               name: '❕ Comando',
               value: '`-mute @user 10s/m/h razão`'
            },
            {
               name: 'ℹ️ Mais informações',
               value: '`-muteinfo` Se quer mais informações'
            }
         )
         .setFooter(message.author.tag, message.author.displayAvatarURL())
      if (!member)
         return message.channel.send(nomember).then(msg => msg.delete({ timeout: 60000 }))

      const Raphy = member.id === '821471191578574888'
      if (Raphy)
         return message.channel.send("Eu não vou mutar eu mesma, que ousadia da sua parte!").then(msg => msg.delete({ timeout: 5000 }))

      function soberole() {
         const soberol = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setTitle(`Meu cargo é menor que o cargo Muted`)
            .addFields(
               {
                  name: 'Suba meu cargo',
                  value: '1 - Configurações do Servidor\n2 - Cargos\n3 - Procure meu cargo "Raphy"\n4 - Arraste meu cargo para um dos primeiros\n5 - Salve as alterações e pronto.'
               },
               {
                  name: 'Crie um novo cargo',
                  value: 'Se preferir, delete o cargo "Muted" e escreva `-mute` no chat que eu faço o resto'
               }
            )
         message.author.send(soberol)
      }
      if (!role.editable)
         return message.channel.send(`O cargo ${role} está acima do meu. Você pode subir meu cargo?\nVou te enviar umas dicas no privado :p`).then(msg => (setTimeout(soberole, 4000)))

      if (member.id === message.guild.owner.id)
         return message.channel.send('Queeee??? Você quer mutar o dono do servidor? O-O').then(msg => msg.delete({ timeout: 5000 }))

      if (!member.bannable)
         return message.channel.send('Essa pessoa tem algum cargo maior que o meu :cry:').then(msg => msg.delete({ timeout: 5000 }))

      if (member.id === message.author.id)
         return message.channel.send('Queeee??? Você tentou mutar você mesmo? Não faça isso!').then(msg => msg.delete({ timeout: 5000 }))

      if (member.roles.cache.has(role.id)) {
         return message.channel.send(`${member.user.username} já está mutado. Mas se você quiser atualizar o mute, você pode usar o comando ` + '`-remute @user`').then(msg => msg.delete({ timeout: 8000 }))
      }

      let time = args[1]
      if (!time)
         return message.channel.send('Você não me disse quanto tempo é o mute.\nEscolha o número e coloque na frente do número (s/m/h)\n \n`-muteinfo`').then(msg => msg.delete({ timeout: 8000 }))

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