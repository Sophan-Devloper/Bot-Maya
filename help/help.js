const Discord = require('discord.js')

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run(client, message, args) {
        message.delete()

        var list1 = [
            'https://imgur.com/KyjyfRg.gif',
            'https://imgur.com/KyjyfRg.gif'
        ]

        var rand = list1[Math.floor(Math.random() * list1.length)]
        var linkgames = 'https://discord.gg/mx8eMx6'

        const HelpEmbed = new Discord.MessageEmbed()
            .setColor('#CD853F')
            .setTitle('📃 Centralzinha de Ajuda Interativa 📃')
            .setURL('https://discord.gg/mx8eMx6')
            .addFields(
                {
                    name: 'Emojis da Centralzinha',
                    value: '🏛️  Esta Página \n⭐  Raphy Points \n💍  Casamento/Family \n💿  Sistema de Música\n⚙️  Comandos Adminitrativos \n💞  Thank You \n💬  Central de Suporte \n🎮  Link de Games \n📺  Animes \n🧤  Comandos Genéricos \n🪅  Comandos Emocionais \n👥  Interações \n❌  Apague o canal Ajuda\n⠀'
                },
                {
                    name: '**NEW** | Quiz Game & Botinfo',
                    value: '📝 `-quiz` & 📃 `-botinfo`'
                },
            )
            .addField('Navegue através dos Emojis', 'Caso esteja com problemas, acesse o Suporte')
            .setThumbnail('https://imgur.com/mvjbQEF.gif')
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        const Family = new Discord.MessageEmbed()
            .setColor('#CD853F')
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
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        const Reação = new Discord.MessageEmbed()
            .setColor('#CD853F')
            .setTitle('Comandos de reações :hearts:')
            .setURL('https://discord.gg/mx8eMx6')
            .setDescription(`${message.author}, mostre a todos como você se sente.`)
            .addFields(
                { name: 'Comandos Disponiveis', value: '`-cry` Chorar as vezes faz bem. \n`-dance` Dance Dance \n`-fury` Mostre sua furia! \n`-happy` Feliiiz \n`-sleep` que soninhoo \n`-smile` Está feliz? Sorria! \n`-tired` que cansaço! \n`-surprise` Mas o que é isso? \n`-clap` Aplaudir é legal \n`-thin` Oque eu faço \n`-die` Morreu \n`-facepalm` Decepcionado(a) \n`-glare` Olhar Pistola \n`-pout` Fazendo Bico \n`-purr` Gostando \n`-sad` Triste ' },
            )
            .addField('Não se procupe, mais comandos estão sendo adicionados', 'Work, work, work!')
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        const Interação = new Discord.MessageEmbed()
            .setColor('#CD853F')
            .setTitle('Comandos de Interação :hearts:')
            .setURL('https://discord.gg/mx8eMx6')
            .setDescription(`${message.author}, marque a pessoa que você deseja interagir.`)
            .addFields(
                {
                    name: 'Comandos Disponiveis',
                    value: '`-baka @user` Chame de Baka! \n`-bite @user` Mordidinha \n`-dedo @user` Educação \n`-greet @user` Comprimento \n`-hit @user` Briga, briga, briga! \n`-hug @user` Abraçar é tão boom \n`-kill @user` Mate! \n`-kiss @user` Hmmm, beijo é? \n`-onegai @user` Porfavoor \n`-pat @user` Cariiiinho \n`-rob @user` Roubar é tão feio... \n`-slap @user` Tapããão \n`-love @user` Mande seu amor secretamente \n`-ery @user` Deboche \n`-lick @user` Peroriin \n`-suck @user` Chupada \n`-highfive @user` Toca Aqui \n`-poke @user` Cutucadinha \n`-shoot @user` Atire para matar \n`-shrug @user` Fazer oque ne  \n`-stare @user` Olhar fixo \n`-stomp @user` Pise em alguem'
                },
            )
            .addField('Não se procupe, mais comandos estão sendo adicionados', 'Work, work, work!')
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        const Administrativo = new Discord.MessageEmbed()
            .setColor('#CD853F')
            .setTitle('Comandos Administrativos')
            .setURL('https://discord.gg/mx8eMx6')
            .addFields(
                {
                    name: 'Todos Comandos Disponiveis',
                    value: '`-addrole` Dê cargos \n`-removerole` Remova Cargos \n`-anunciar` Publique informações de um jeito lindo \n`-clear` Limpe as mensagens! \n`-say` Diga algo atráves de mim \n`-setnick @user` Mude o nickname dos membros \n`-slowmode` Ative o modo lento \n`-dm @user` Mande mensagens no privado através de mim \n`-sorteio` Faça sorteios \n`-kick @user` \n`-ban @user` \n`-unban @user`\n`-mute @user`\n`-unmute @user` \n`-warn` Dê Warns \n`-warns` Confira seus Warns \n`-resetwarns` `-rwarns` Reset warns de membros \n`-createchannel` Crie canais de texto \n`-createvoice` Crie canais de voz \n`-lockdown` Trave o servidor em caso de emergência \n`-setprefix` (Manutenção)'
                },
            )
            .addField('Não se procupe, mais comandos estão sendo adicionados', 'Work, work, work!')
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        const AnimeEmbed = new Discord.MessageEmbed()
            .setColor('#CD853F')
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
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        const Support = new Discord.MessageEmbed()
            .setColor('#CD853F')
            .setAuthor("Se você precisa de ajuda com a Raphy, você está no lugar certo.")
            .setTitle('Central de Suporte')
            .setURL('https://forms.gle/vtJ5qBqFDd9rL5JU8')
            .setImage('https://imgur.com/KyjyfRg.gif')
            .setFooter(message.author.username, message.author.displayAvatarURL())

        const Games = new Discord.MessageEmbed()
            .setColor('#CD853F')
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
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        const Random = new Discord.MessageEmbed()
            .setColor('#CD853F')
            .setTitle('Comandos de Categoria Random')
            .setURL('https://discord.gg/mx8eMx6')
            .addFields(
                {
                    name: 'Comandos Divertidos',
                    value: '`-quiz` Você é inteligente? \n`-quiznaruto` Você sabe tudo sobre Naruto? \n`-ascii` Escreva de uma forma diferenciada \n`-ecchi` Que ousadia... \n`-boom` Exploda tudo \n`-cat` Foto de um gatinho fofo \n`-clima Sua Cidade` Olhar o clima é importante \n`-coinflip cara/coroa` Você tem sorte? \n`-explosion` Exploooosion \n`-feet` Pézinho \n`-frase` Frases lindas \n`-jokenpo` Você é bom? \n`-loli` Loli? \n`-puppy` Filhotinhooos \n`-run` Cooorree \n`-stonks` `-notstonks`'
                },
            )
            .addField('Mais e mais comandos estão sendo adicionados', 'Work, work, work!')
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        const Thanks = new Discord.MessageEmbed()
            .setColor('#CD853F')
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
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        const Music = new Discord.MessageEmbed()
            .setColor('#CD853F')
            .setTitle(':gear: Centralzinha de Comandos :gear:')
            .setThumbnail('https://imgur.com/BJUej6y.gif')
            .addFields(
                {
                    name: 'Comandos Gerais',
                    value: '`-play` Peça uma música\n`-pause` Pause, né?\n`-resume` Despausa a música\n`-skip` Pule de música\n`-autoplay` Desative ou ative o autoplay\n`-invite` Me convide pro seu servidor\n`-queue` Veja a playlist\n`-volume 0~100` Escolha o volume do bot\n`-stop` Pare tudo\n`-disconnect/-dc` Me tira da call.\n*Mais comandos estão sendo adicionados.*'
                },
                {
                    name: 'Filter Mode',
                    value: '`-3d`\n`-bassboost`\n`-echo`\n`-karaoke`\n`-nigtcore`\n`-vaporwave`\n`-flanger`\n`-gate`\n`-haas`\n`-reverse`\n`-mcompand`\n`-phaser`\n`-tremolo`\n`-surround`\n`-earwax`'
                }
            )
            .setFooter(message.author.username, message.author.displayAvatarURL())

        const RPEmbed = new Discord.MessageEmbed()
            .setColor('#CD853F')
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
            .setFooter(message.author.tag, message.author.displayAvatarURL()).setFooter(message.author.tag, message.author.displayAvatarURL())

        const CommandEmbed = new Discord.MessageEmbed()
            .setColor('#CD853F')
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
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        const Quiz = new Discord.MessageEmbed()
            .setColor('#CD853F')
            .setTitle('📝 Quiz Game 📝')
            .setURL('https://discord.gg/mx8eMx6')
            .addFields(
                {
                    name: 'Como jogar? E siiimples.',
                    value: 'Digte `-quiz`, você terá apenas 15 segundos para responder a pergunta.\nSe alguém responder primeiro que você, você perde 😅'
                },
            )
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        const supportembed = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setTitle('💬 Clique aqui para acessar a Central de Suporte 💬')
            .addFields(
                {
                    name: 'Discord Server',
                    value: 'https://discord.gg/mx8eMx6',
                    inline: true
                },
                {
                    name: 'Desenvolvedor',
                    value: 'Rody#3756',
                    inline: true
                }
            )
            .setURL('https://forms.gle/vtJ5qBqFDd9rL5JU8')
            .setImage('https://imgur.com/KyjyfRg.gif')
            .setFooter(message.author.username, message.author.displayAvatarURL())

        await message.channel.send(HelpEmbed).then(msg => {
            msg.react('🏛️') // home  1
            msg.react('⭐') // rpsystem 2
            msg.react('💍') // Family 3
            msg.react('💿') // music 4
            msg.react('⚙️') // Adminis 5
            msg.react('💞') // thanks 6 
            msg.react('💬') // Support 7
            msg.react('🎮') // Games 8
            msg.react('📺') // Anime 9 
            msg.react('🧤') // commandEmbed 10
            msg.react('🪅') // Reação 11
            msg.react('👥') // interação 12
            msg.react('📝') // quiz 14
            msg.react('📃') // botinfo 15
            msg.react('❌') // Delete 16
            //  msg.react('❌') // 17
            //  msg.react('❌') // 18
            //  msg.react('❌') // 19
            //  msg.react('❌') // 20 // LIMITE

            msg.awaitReactions((reaction, user) => {
                if (message.author.id !== user.id) return;

                if (reaction.emoji.name === '🏛️') { // home
                    reaction.users.remove(user)
                    msg.edit(HelpEmbed)
                }
                if (reaction.emoji.name === '⭐') { // RPEmbed
                    reaction.users.remove(user)
                    msg.edit(RPEmbed)
                }
                if (reaction.emoji.name === '💍') { // family
                    reaction.users.remove(user)
                    msg.edit(Family)
                }
                if (reaction.emoji.name === '💿') { // msc
                    reaction.users.remove(user)
                    msg.edit(Music)
                }
                if (reaction.emoji.name === '⚙️') { // adm
                    reaction.users.remove(user)
                    msg.edit(Administrativo)
                }
                if (reaction.emoji.name === '💞') { // thanks
                    reaction.users.remove(user)
                    msg.edit(Thanks)
                }
                if (reaction.emoji.name === '💬') { // support
                    reaction.users.remove(user)
                    msg.edit(Support)
                }
                if (reaction.emoji.name === '🎮') { // Games
                    reaction.users.remove(user)
                    msg.edit(Games)
                }
                if (reaction.emoji.name === '📺') { // Anime
                    reaction.users.remove(user)
                    msg.edit(AnimeEmbed)
                }
                if (reaction.emoji.name === '🧤') { // comandos
                    reaction.users.remove(user)
                    msg.edit(CommandEmbed)
                }
                if (reaction.emoji.name === '🪅') { // reação
                    reaction.users.remove(user)
                    msg.edit(Reação)
                }
                if (reaction.emoji.name === '👥') { // Interação
                    reaction.users.remove(user)
                    msg.edit(Interação)
                }
                if (reaction.emoji.name === '📝') { // quiz
                    reaction.users.remove(user)
                    msg.edit(Quiz)
                }
                if (reaction.emoji.name === '📃') { // botinfo
                    msg.delete()
                    const botinfo = new Discord.MessageEmbed()
                        .setThumbnail(client.user.displayAvatarURL())
                        .setTitle('📃 Centralzinha de Informações 📃')
                        .setColor('#DCDCDC')
                        .setDescription('Meu nome é Raphy. Eu fui criada para ser uma bot de diversão e admnistração. Porém tenho alguns recursos além disso. Sou capaz de substituir vááários bots. Minha missão é ser a bot mais completa de todas.')
                        .addFields(
                            {
                                name: 'Páginas da Centralzinha',
                                value: '📃 Essa página aqui\n⚙️ Informações Técnicas\n❤️ Colaboradores\n💬 Suporte\n❌ Apaga a Central de Informações'
                            }
                        )
                        .setFooter(message.author.tag, message.author.displayAvatarURL())

                    const embed2 = new Discord.MessageEmbed()
                        .setThumbnail(client.user.displayAvatarURL())
                        .setTitle('⚙️ Centralzinha Tecnica ⚙️')
                        .setColor("#DCDCDC")
                        .addFields(
                            {
                                name: 'Informações Técinas',
                                value: (`🌐 Servidores: ${client.guilds.cache.size}\n💬 Canais: ${client.channels.cache.size}\n🫂 Usuários: ${client.users.cache.size}\n⏳ Ping Atual: ${Math.round(client.ws.ping)}ms\n🕛 Criada em: 15/10/2020\n💡 Idealizada por: Rafaella#???? \n:gear: Criada por: Rody#3756\n🖌️ Design: Rody & Rafaella\n🖊️ Coop: Gowther#9233\n📡 Host: Replit.com\n🇩 Discord.js Version: 12.3.1\n🇯 Linguagem: 100% JavaScript\n💠 Raphy Version: 2.1.1`)
                            }
                        )
                        .setFooter(message.author.tag, message.author.displayAvatarURL())

                    const embed3 = new Discord.MessageEmbed()
                        .setColor('#DCDCDC')
                        .setThumbnail(client.user.displayAvatarURL())
                        .setTitle(':hearts:Eu só digo OBRIGADA a todos que deram suas ideias!:hearts:')
                        .setURL('https://forms.gle/vtJ5qBqFDd9rL5JU8')
                        .addFields(
                            {
                                name: ':gear: Developers :gear:',
                                value: '`Rody#3756` & `Gowther#9233`'
                            },
                            {
                                name: '🖌️ Designers 🖌️',
                                value: '`Rody#3756` | `Gowther#9233` | `Rafaella#????`'
                            },
                            {
                                name: ':handshake: Colaboradores :handshake:',
                                value: "𝑅𝑈 𝑀𝑖𝑛𝑒?#2790 | Comandos de Administração\nLucas - Luquisquiss#4643 | `-frase`\nJoão da Cilada#7041 | `-love`\nGiacometti#4849 | `-feet`\nCoiny#9056 | Ideias no Painel Interativo\nCALORIES#2822 | Music System Helper"
                            },
                            {
                                name: ':star2:Especiais:star2:',
                                value: 'MakolPedro#8508 | +30 Bugs Reportados'
                            },
                        )
                        .setImage('https://imgur.com/DNVIReM.gif')
                        .setFooter(message.author.tag, message.author.displayAvatarURL())

                    message.channel.send(botinfo).then(msg => {
                        msg.react('🏛️') // Home
                        msg.react('📃') // 1º Embed
                        msg.react('⚙️') // 2º Embed
                        msg.react('❤️') // Thankss
                        msg.react('💬') // Support
                        msg.react('❌') // Delete

                        msg.awaitReactions((reaction, user) => {
                            if (message.author.id !== user.id) return

                            if (reaction.emoji.name === '🏛️') { // home
                                msg.delete()
                                message.channel.send(HelpEmbed).then(msg => {
                                    msg.react('🏛️') // home  1
                                    msg.react('⭐') // rpsystem 2
                                    msg.react('💍') // Family 3
                                    msg.react('💿') // music 4
                                    msg.react('⚙️') // Adminis 5
                                    msg.react('💞') // thanks 6 
                                    msg.react('💬') // Support 7
                                    msg.react('🎮') // Games 8
                                    msg.react('📺') // Anime 9 
                                    msg.react('🧤') // commandEmbed 10
                                    msg.react('🪅') // Reação 11
                                    msg.react('👥') // interação 12
                                    msg.react('📝') // quiz 13
                                    msg.react('❌') // Delete 14

                                    msg.awaitReactions((reaction, user) => {
                                        if (message.author.id !== user.id) return;

                                        if (reaction.emoji.name === '🏛️') { // home
                                            reaction.users.remove(user)
                                            msg.edit(HelpEmbed)
                                        }
                                        if (reaction.emoji.name === '⭐') { // RPEmbed
                                            reaction.users.remove(user)
                                            msg.edit(RPEmbed)
                                        }
                                        if (reaction.emoji.name === '💍') { // family
                                            reaction.users.remove(user)
                                            msg.edit(Family)
                                        }
                                        if (reaction.emoji.name === '💿') { // msc
                                            reaction.users.remove(user)
                                            msg.edit(Music)
                                        }
                                        if (reaction.emoji.name === '⚙️') { // adm
                                            reaction.users.remove(user)
                                            msg.edit(Administrativo)
                                        }
                                        if (reaction.emoji.name === '💞') { // thanks
                                            reaction.users.remove(user)
                                            msg.edit(Thanks)
                                        }
                                        if (reaction.emoji.name === '💢') { // support
                                            reaction.users.remove(user)
                                            msg.edit(Support)
                                        }
                                        if (reaction.emoji.name === '🎮') { // Games
                                            reaction.users.remove(user)
                                            msg.edit(Games)
                                        }
                                        if (reaction.emoji.name === '📺') { // Anime
                                            reaction.users.remove(user)
                                            msg.edit(AnimeEmbed)
                                        }
                                        if (reaction.emoji.name === '🧤') { // comandos
                                            reaction.users.remove(user)
                                            msg.edit(CommandEmbed)
                                        }
                                        if (reaction.emoji.name === '🪅') { // reação
                                            reaction.users.remove(user)
                                            msg.edit(Reação)
                                        }
                                        if (reaction.emoji.name === '👥') { // Interação
                                            reaction.users.remove(user)
                                            msg.edit(Interação)
                                        }
                                        if (reaction.emoji.name === '📝') { // quiz
                                            reaction.users.remove(user)
                                            msg.edit(Quiz)
                                        }
                                        if (reaction.emoji.name === '❌') { // Delete
                                            msg.delete()
                                        }
                                    })

                                })
                            }
                            if (reaction.emoji.name === '📃') { // 1º Embed - Principal
                                reaction.users.remove(user)
                                msg.edit(botinfo)
                            }
                            if (reaction.emoji.name === '⚙️') { // 2º Embed - Técnico
                                reaction.users.remove(user)
                                msg.edit(embed2)
                            }
                            if (reaction.emoji.name === '❤️') { // 4º Embed - Support
                                reaction.users.remove(user)
                                msg.edit(embed3)
                            }
                            if (reaction.emoji.name === '💬') { // 3º Embed - Thanks
                                reaction.users.remove(user)
                                msg.edit(supportembed)
                            }
                            if (reaction.emoji.name === '❌') { // Delete
                                msg.delete()
                            }
                        })
                    })

                }
            })
        })
    }
}