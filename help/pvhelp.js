const Discord = require('discord.js')

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){
message.delete()
      
    var list1 = [
      'https://imgur.com/KyjyfRg.gif',
      'https://imgur.com/KyjyfRg.gif'
    ]

    var rand = list1[Math.floor(Math.random() * list1.length)]
    var linkgames = 'https://discord.gg/mx8eMx6'
    var linksugest = 'https://forms.gle/2hHDjVqECn4fahcx7'

      const HelpEmbed = new Discord.MessageEmbed()
      .setColor('#6A5ACD')        
      .setTitle('Bem-vindo a Minha Nova Central de Ajuda :hearts:')
      .setURL('https://discord.gg/mx8eMx6')        
      .setDescription(`Olhe tudo atráves dos Emojis :leaves:`)
      .addFields(
         {
           name: 'Resumo dos Emojis', 
           value: '🏛️  Esta Página \n⭐  Raphy Points \n💍  Casamento/Family \n💿  Music \n⚙️  Comandos Adminitrativos \n💢  Bug? \n🎮  Link de Games \n📺  Animes \n🧤  Comandos Genéricos \n🪅  Comandos Emocionais \n👥  Interações \n🖲️  Alguns comandos Random \n📲  Me dá sugestões? \n💞  Thank You \n❌  Apague o canal Ajuda'
         },
         {
           name: ':hearts:Muito obrigada!:hearts:',
           value: '`-thanks` `-mk` `-sugest` `-bug`'
         },
         {
           name: '<:StarPoint:766794021128765469>RPoints<:StarPoint:766794021128765469>',
           value: '`-rpoints` `-rp`'
         },
       )
      .addField('Navegue entre as páginas do Help clicando nos Emojis abaixo', 'Quer o Help no PV? -pvhelp')
      .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())

      const Family = new Discord.MessageEmbed()
      .setColor('#6A5ACD')        
      .setTitle(':ring: Casamento/Family :ring:')
      .setURL('https://discord.gg/mx8eMx6')
      .addFields(
         {
           name: 'Casamento', 
           value: '`-marry @user` Se case com alguém\n`-divorce` Se divorcie \n`-adote @user` Adote alguém \n`-noadote` Quebre a adoção '
         },
         {
           name: 'Perfil Pessoal',
           value: '`-profile` `-perfil`'
         },
         )
      .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())

      const Reação = new Discord.MessageEmbed()
         .setColor('#6A5ACD')        
         .setTitle('Comandos de reações :hearts:')
         .setURL('https://discord.gg/mx8eMx6')        
         .setDescription(`${message.author}, mostre a todos como você se sente.`)
         .addFields(
            {name: 'Comandos Disponiveis', value: '`-cry` Chorar as vezes faz bem. \n`-dance` Dance Dance \n`-fury` Mostre sua furia! \n`-happy` Feliiiz \n`-sleep` que soninhoo \n`-smile` Está feliz? Sorria! \n`-tired` que cansaço! \n`-surprise` Mas o que é isso? \n`-clap` Aplaudir é legal \n`-thin` Oque eu faço \n`-die` Morreu \n`-facepalm` Decepcionado(a) \n`-glare` Olhar Pistola \n`-pout` Fazendo Bico \n`-purr` Gostando \n`-sad` Triste '},
                    )
         .addField('Não se procupe, mais comandos estão sendo adicionados', 'Work, work, work!')
         .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())

      const Interação = new Discord.MessageEmbed()
         .setColor('#6A5ACD')        
         .setTitle('Comandos de Interação :hearts:')
         .setURL('https://discord.gg/mx8eMx6')        
         .setDescription(`${message.author}, marque a pessoa que você deseja interagir.`)
         .addFields(
            {name: 'Comandos Disponiveis', 
            value: '`-baka @user` Chame de Baka! \n`-bite @user` Mordidinha \n`-dedo @user` Educação \n`-greet @user` Comprimento \n`-hit @user` Briga, briga, briga! \n`-hug @user` Abraçar é tão boom \n`-kill @user` Mate! \n`-kiss @user` Hmmm, beijo é? \n`-onegai @user` Porfavoor \n`-pat @user` Cariiiinho \n`-rob @user` Roubar é tão feio... \n`-slap @user` Tapããão \n`-love @user` Mande seu amor secretamente \n`-ery @user` Deboche \n`-lick @user` Peroriin \n`-suck @user` Chupada \n`-highfive @user` Toca Aqui \n`-poke @user` Cutucadinha \n`-shoot @user` Atire para matar \n`-shrug @user` Fazer oque ne  \n`-stare @user` Olhar fixo \n`-stomp @user` Pise em alguem'
            },
                    )
         .addField('Não se procupe, mais comandos estão sendo adicionados', 'Work, work, work!')
         .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())

      const Administrativo = new Discord.MessageEmbed()
         .setColor('#6A5ACD')        
         .setTitle('Comandos Administrativos')
         .setURL('https://discord.gg/mx8eMx6')        
         .addFields(
              {
                  name: 'Todos Comandos Disponiveis', 
                  value: '`-addrole` Dê cargos \n`-removerole` Remova Cargos \n`-anunciar` Publique informações de um jeito lindo \n`-clear` Limpe as mensagens! \n`-say` Diga algo atráves de mim \n`-setnick @user` Mude o nickname dos membros \n`-slowmode` Ative o modo lento \n`-dm @user` Mande mensagens no privado através de mim \n`-sorteio` Faça sorteios \n`-kick @user` \n`-ban @user` \n`-unban @user`\n`-mute @user`\n`-unmute @user` \n`-warn` Dê Warns \n`-warns` Confira seus Warns \n`-resetwarns` `-rwarns` Reset warns de membros \n`-createchannel` Crie canais de texto \n`-createvoice` Crie canais de voz \n`-lockdown` Trave o servidor em caso de emergência \n`-setprefix` (Manutenção)'
              },
              )
         .addField('Não se procupe, mais comandos estão sendo adicionados', 'Work, work, work!')
         .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())

      const AnimeEmbed = new Discord.MessageEmbed()
         .setColor('#6A5ACD')        
         .setTitle('Comandos de Animes :hearts:')
         .setURL('https://discord.gg/mx8eMx6')
         .addFields(
            {
              name: 'Comandos de Animes', 
              value: '`-animes2020` Lista de novos animes em 2020',
            },
            {
              name: 'Aceita uma indicação?',
              value: '`-ind`'
            },
            {
               name: 'Fotos de Animes',
               value: '`-sao` Sword Art Online'
            }
            )
         .addField('Não se procupe, mais comandos estão sendo adicionados', 'Work, work, work!')
         .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())

        const Bug = new Discord.MessageEmbed()
         .setColor('#FF0000')
         .setTitle('Central de Reporte')
         .setURL('https://forms.gle/v7n4Neju16f4pb3KA')
         .setDescription('Reporte Bugs da Raphy :hearts: \n⠀⠀⠀')
         .setImage('https://imgur.com/dTYqukt.gif')     
         .addField('Google Formulário', 'https://forms.gle/v7n4Neju16f4pb3KA')
         .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())

        const Games = new Discord.MessageEmbed()
         .setColor('#6A5ACD')        
         .setTitle('Lista de Games')
         .setURL('https://discord.gg/mx8eMx6')            
         .addFields(
              {
                name: 'Games', 
                value: '`-amongus`\n`-brawlhalla`\n`-brawlstars`\n`-clashroyale` `-clash`\n`-counterstrike` `-cs`\n`-ddtank`\n`-freefire` `-ff`\n`-gartic`\n`-genshinimpact` `-genshin`\n`-gta`\n`-habbo`\n`-leagueoflegends` `-lol`\n`-summoners` `-sumwar`\n`-mario`\n`-mobilelegends` `-mbl`\n`-minecraft`\n`-paladins`\n`-rocketleague`\n`-transformice` `-tfm`\n`-uno`\n`-valorant`'
              },
              {
                name: 'Mande mais games',
                value: `[Meu Servidor](${linkgames})`
              },
                    )
         .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())

        const Random = new Discord.MessageEmbed()
         .setColor('#6A5ACD')
         .setTitle('Comandos de Categoria Random')
         .setURL('https://discord.gg/mx8eMx6')
         .addFields(
            {
              name: 'Comandos Divertidos', 
              value: '`-quiz` Você é inteligente? \n`-quiznaruto` Você sabe tudo sobre Naruto? \n`-ascii` Escreva de uma forma diferenciada \n`-ecchi` Que ousadia... \n`-boom` Exploda tudo \n`-cat` Foto de um gatinho fofo \n`-clima Sua Cidade` Olhar o clima é importante \n`-coinflip cara/coroa` Você tem sorte? \n`-explosion` Exploooosion \n`-feet` Pézinho \n`-frase` Frases lindas \n`-jokenpo` Você é bom? \n`-loli` Loli? \n`-puppy` Filhotinhooos \n`-run` Cooorree \n`-stonks` `-notstonks`'},
               )
         .addField('Mais e mais comandos estão sendo adicionados', 'Work, work, work!')
         .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())
        
        const Sugest = new Discord.MessageEmbed()
         .setColor('#6A5ACD')        
         .setTitle(':hearts:Dê sua Sugestão:hearts:')
         .setURL('https://forms.gle/2hHDjVqECn4fahcx7')
         .addFields(
          {
            name: 'Acesse o formulário Google e dê sua sugestão:leaves:',
            value: `[Formulário Google](${linksugest})`
          },
        )
        .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())

        const Thanks = new Discord.MessageEmbed()
         .setColor('#6A5ACD')        
         .setTitle(':hearts:Eu só digo OBRIGADA a todos que deram suas ideias!:hearts:')
         .setURL('https://discord.gg/mx8eMx6')    
         .addFields(
            {
                name: ':gear: Developers', 
                value: '`Rody#0002` & `Gowther#9233`'
            },
            {
                 name: ':handshake: Colaboradores :handshake:',
                 value: "𝑅𝑈 𝑀𝑖𝑛𝑒?#2790 | `Comandos de Administração` \nCafézinho#6093 | `-oi` \nLucas - Luquisquiss#4643 | `-frase` \nJoão da Cilada#7041 | `-love` \nGiacometti#4849 | `-feet` \nCoiny#9056 | `New Help Window`"
            },
            {
                 name: ':star2:Especiais:star2:',
                 value: 'MakolPedro#8508 \n`-Games` & `-Quiz`|30+ Bugs Reportados'
            },
            )
         .setImage('https://imgur.com/DNVIReM.gif')
         .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())

        const Music = new Discord.MessageEmbed()
         .setColor('#6A5ACD')        
         .setTitle(':cd:Sistema de Música Raphy!:cd:')
         .setURL('https://discord.gg/mx8eMx6')    
         .addFields(
            {
                name: 'Comandos', 
                value: '`-music`'
            },
            {
                 name: 'Em Criação',
                 value: "Meu banco de dados está muito grande para a Host atual, em breve estará tudo disponível."
            },
            )
            .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())

        const RPEmbed = new Discord.MessageEmbed()
        .setColor('GREEN')        
        .setTitle('<:StarPoint:766794021128765469>Sistema Raphy Points BETA<:StarPoint:766794021128765469>')
        .setURL('https://discord.gg/mx8eMx6')        
        .addFields(
            {
                  name: 'Veja seus RPoints', 
                  value: "`-balance` \n`-bal` \nAdicione *@user* para ver os RP's de outra pessoa"
            },
            {
                name: 'Ganhe RPoints!',
                value: '`-work` Trabalhe e ganhe até 100<:StarPoint:766794021128765469> \n`-daily` Pegue 500<:StarPoint:766794021128765469> todos os dias'
            },
            {
              name: 'Ranking',
              value: 'O código do Ranking ainda está sendo escrito.'
            },
            {
                name: 'Loteria',
                value: '`-lotery` Ganhe até 2000<:StarPoint:766794021128765469> se tiver sorte'
            },
            )
            .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())

        const CommandEmbed = new Discord.MessageEmbed()
        .setColor('#6A5ACD')
        .setTitle('Comandos da Raphy')
        .setURL('https://discord.gg/mx8eMx6')
        .addFields(
            {
              name: 'Covid-19', 
              value: '`-covid` Informações mundiais sobre a COVID'
            },
            {
              name: 'Servidor',
              value: '`-invite` `-inv` Me coloque no seu servidor \n`-ideia` Mande ideias pro seu Servidor \n`-report` Reporte coisas pra Staff do Servidor \n`-serverinfo` Informações do Servidor'
            },
            {
              name: 'Raphy',
              value: '`-clima` Veja o clima da sua cidade \n`-ping` Pong! \n`-uptime` Tempo que eu estou acordada \n`-botinfo` Informações sobre mim'
            },
            {
              name: 'Usuário',
              value: '`-avatar @user` Veja a foto de perfil \n`-spotify @user` `-spot @user` Veja a música que alguém está escutando \n`-user @user` Veja o nome de usúario de alguém \n`-userinfo @user` Veja informações detalhadas de alguém'
            })        
        .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())

let author = message.author.id            
await message.channel.send("Estou enviando o Sistema de Ajuda no seu Privado").then(msg => msg.delete({timeout: 4000})).then(msg => message.author.send(HelpEmbed)).then(msg => {
      msg.react('🏛️') // home
      msg.react('⭐') // rpsystem
      msg.react('💍') // Family
      msg.react('💿') // music
      msg.react('⚙️') // Adminis
      msg.react('💞') // thanks
      msg.react('💢') // bug
      msg.react('🎮') // Games
      msg.react('📺') // Anime
      msg.react('🧤') // commandEmbed
      msg.react('🪅') // Reação
      msg.react('👥') // interação
      msg.react('🖲️') // Random
      msg.react('📲') // Sugest
      msg.react('❌') // Delete

      msg.awaitReactions((reaction, user) => {
        if (message.author.id !== user.id) return;

        if (reaction.emoji.name === '🏛️') { // home
          msg.edit(HelpEmbed)
        }
        if (reaction.emoji.name === '⭐') { // RPEmbed
          msg.edit(RPEmbed)
        }
        if (reaction.emoji.name === '💍') { // family
          msg.edit(Family)
        }
        if (reaction.emoji.name === '💿') { // msc
          msg.edit(Music)
        }
        if (reaction.emoji.name === '⚙️') { // adm
          msg.edit(Administrativo)
        }
        if (reaction.emoji.name === '💞') { // thanks
          msg.edit(Thanks)
        }
        if (reaction.emoji.name === '💢') { // bug
          msg.edit(Bug)
        }
        if (reaction.emoji.name === '🎮') { // Games
            msg.edit(Games)
        }
        if (reaction.emoji.name === '📺') { // Anime
            msg.edit(AnimeEmbed)
        }
        if (reaction.emoji.name === '🧤') { // comandos
            msg.edit(CommandEmbed)
        }
        if (reaction.emoji.name === '🪅') { // reação
            msg.edit(Reação)
        }
        if (reaction.emoji.name === '👥') { // Interação
            msg.edit(Interação)
        }
        if (reaction.emoji.name === '🖲️') { // Random
            msg.edit(Random)
        }
        if (reaction.emoji.name === '📲') { // Sugest
            msg.edit(Sugest)
        }
        if (reaction.emoji.name === '❌') { // Delete
            msg.delete()
        }})})}}