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
        var linksupport = 'https://forms.gle/vtJ5qBqFDd9rL5JU8'
        var linkservidor = 'https://discord.gg/mx8eMx6'
        var linkcovid = 'https://www.google.com/search?q=coronavirus&oq=coronavirus&aqs=chrome..69i64j0i433j0i131i433l3j69i60l3.3560j0j9&sourceid=chrome&ie=UTF-8#wptab=s:H4sIAAAAAAAAAONgVuLVT9c3NMwySk6OL8zJecTozS3w8sc9YSmnSWtOXmO04eIKzsgvd80rySypFNLjYoOyVLgEpVB1ajBI8XOhCvHsYuL2SE3MKckILkksKV7EKptaDGQcXltckpmcWKyQkq-QnF-Un5dYdnhtUWkxAPmw1DmNAAAA'

        const HelpEmbed = new Discord.MessageEmbed()
            .setColor('#CD853F')
            .setTitle('📃 Centralzinha de Ajuda Interativa 📃')
            .setURL('https://discord.gg/mx8eMx6')
            .setDescription('\n⠀\nEsta é a minha Centralzinha de Ajuda, você pode encontrar tudo o que eu posso fazer neste painel. Veja todos os comandos atráves do *Emojis da Centralzinha*. Os emojis lá embaixo serve para você se locomover pelo painel sem ter que ficar digitando um milhão de comandos.\n⠀')
            .addFields(
                {
                    name: 'Emojis da Centralzinha',
                    value: '🏛️  Esta Página \n⭐  Raphy Points \n💍  Casamento/Family \n💿  Sistema de Música\n⚙️  Comandos Adminitrativos \n💞  Thank You \n💬  Central de Suporte \n🎮  Link de Games \n📺  Animes \n🧤  Comandos Genéricos \n🪅  Comandos Emocionais \n👥  Interações \n❌  Apague o canal Ajuda\n**NEW FEATURES**\n📝 Game Quiz\n 📃 Minhas Informações\n⠀⠀'
                },
            )
            .addField(`Previna-se contra a COVID-19, use máscara!`, `[Saiba mais](${linkcovid})`)
            .setThumbnail('https://imgur.com/mvjbQEF.gif')
            .setFooter(`${message.author.tag} Navegue através dos emojis`, message.author.displayAvatarURL())

        const RPEmbed = new Discord.MessageEmbed()
            .setColor('#CD853F')
            .setTitle('<:StarPoint:766794021128765469> Sistema Raphy Points <:StarPoint:766794021128765469> BETA')
            .setURL('https://discord.gg/mx8eMx6')
            .setDescription('Ainda na versão beta, este é meu sistema de economia atual. Consiga dinheiro por enquanto, em breve a nossa lojinha vai estar acessível para todo mundo')
            .addFields(
                {
                    name: '<:topreach:766846960569155584> Veja seus RPoints',
                    value: "`-balance` | `-bal` | `-rp` | `-bal @user`"
                },
                {
                    name: '<:topreach:766846960569155584> Ganhe RPoints!',
                    value: '`-work` Trabalhe e ganhe até 100<:StarPoint:766794021128765469> \n`-daily` Pegue 500<:StarPoint:766794021128765469> todos os dias\n`-lotery` Ganhe até 2000<:StarPoint:766794021128765469> (se tiver sorte)'
                },
                {
                    name: '<:topreach:766846960569155584> Loja',
                    value: '`-loja` | `-store` Em construção'
                },
                {
                    name: '<:topreach:766846960569155584> Ranking',
                    value: '`-rankingrp` Em Construção'
                },
                {
                    name: ":gear: Developer's Commands",
                    value: "`-addrp @user` Adiciona RP's\n`-removerp @user` Remove RP's\n`-resetrp @user` Tira todos os RP's\n`-resetall` Reseta o banco de dados Raphy Points."
                },
            )
            .setFooter(message.author.tag, message.author.displayAvatarURL()).setFooter(message.author.tag, message.author.displayAvatarURL())

        const Family = new Discord.MessageEmbed()
            .setColor('#CD853F')
            .setTitle(':ring: Casamento/Family :ring: BETA')
            .setURL('https://discord.gg/mx8eMx6')
            .setDescription('Não fique sozinho no mundo, case-se com alguém ou entre/crie uma familia.')
            .addFields(
                {
                    name: 'Comandos de Ativação',
                    value: '`-marry @user` Se case com alguém\n`-divorce` Se divorcie \n`-adote @user` Adote alguém \n`-noadote` Quebre a adoção '
                },
                {
                    name: 'Sistema de Perfil',
                    value: '`-profile` | `-perfil` | `-perfil @user`'
                },
            )
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        const Music = new Discord.MessageEmbed()
            .setColor('#CD853F')
            .setTitle('🎶: Centralzinha de Comandos 🎶')
            .setThumbnail('https://imgur.com/BJUej6y.gif')
            .setDescription('A vida sem música é completamente sem graça!')
            .addFields(
                {
                    name: 'Comandos Gerais',
                    value: '`-play` Peça uma música\n`-pause` Pause, né?\n`-resume` Despausa a música\n`-skip` Pule de música\n`-autoplay` Desative ou ative o autoplay\n`-queue` Veja a playlist\n`-volume 0~100` Escolha o volume do bot\n`-disconnect` | `-dc` | `-stop` Me tira da call.\n*Mais comandos estão sendo adicionados.*'
                },
                {
                    name: 'Filter Mode',
                    value: '`-3d` | `-bassboost` | `-echo`\n `-karaoke` | `-nigtcore` | `-vaporwave`\n`-flanger` | `-gate` | `-haas`\n`-reverse` | `-mcompand` | `-phaser`\n`-tremolo` | `-surround` | `-earwax`'
                }
            )
            .setFooter(message.author.username, message.author.displayAvatarURL())

        const Administrativo = new Discord.MessageEmbed()
            .setColor('#CD853F')
            .setTitle('Comandos Administrativos')
            .setURL('https://discord.gg/mx8eMx6')
            .setDescription('Estou cheia de funções administrativas, que paraiso para a Staff.')
            .addFields(
                {
                    name: 'Administração',
                    value: '\n`-unban` Desban algúm membro\n`-createchannel` Crie canais de texto \n`-createvoice` Crie canais de voz \n`-lockdown` Trave o servidor em caso de emergência \n`-setprefix / prefix` Escolha meu prefix'
                },
                {
                    name: 'Moderação',
                    value: '`-addrole` Dê cargos \n`-removerole` Tire Cargos\n`-setnick @user` Mude o nickname de alguém\n`-kick` Chute alguém do servidor\n`-ban` Banir membros\n`-mute` Mute alguém (tempmute)\n`-unmute` Desmuta alguém\n`-warn` Dê Warns \n`-warns` Confira seus Warns \n`-resetwarns` `-rwarns` Reset warns de membros '
                },
                {
                    name: 'Chat',
                    value: '`-lockchannel` Trave um canal especifico\n`-anunciar` Publique informações\n`-clear` Limpe o chat\n`-say` Diga algo atráves de mim\n`-slowmode` Ative o modo lento\n`-dm @user` Mande mensagens no privado através de mim'
                },
                {
                    name: 'Interação',
                    value: '`-sorteio` Faça sorteios'
                }
            )
            .addField('Não se procupe, mais comandos estão sendo adicionados', `Você tem alguma ideia? [Clique aqui](${linksupport})`,)
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        const Thanks = new Discord.MessageEmbed()
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

        const Support = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setTitle('💬 Centralzinha de Suporte 💬')
            .setURL('https://forms.gle/vtJ5qBqFDd9rL5JU8')
            .setDescription('A Central de Suporte consegue atender a qualquer problema ou crítica que você tenha :heart:')
            .setThumbnail('https://imgur.com/KyjyfRg.gif')
            .addFields(
                {
                    name: 'Discord Server',
                    value: `[Clique aqui](${linkservidor})`,
                    inline: true
                },
                {
                    name: 'Desenvolvedor',
                    value: 'Rody#3756',
                    inline: true
                },
                {
                    name: 'Central de Suporte',
                    value: `[Clique aqui](${linksupport})`,
                    inline: true
                }
            )
            .setFooter(message.author.username, message.author.displayAvatarURL())

        const Games = new Discord.MessageEmbed()
            .setColor('#CD853F')
            .setTitle('Lista de Games')
            .setURL('https://discord.gg/mx8eMx6')
            .setDescription('Link de váários games para você ter fácil acesso.')
            .addFields(
                {
                    name: 'Games',
                    value: '`-amongus`\n`-brawlhalla`\n`-brawlstars`\n`-clashroyale` `-clash`\n`-counterstrike` `-cs`\n`-ddtank`\n`-freefire` `-ff`\n`-gartic`\n`-genshinimpact` `-genshin`\n`-gta`\n`-habbo`\n`-leagueoflegends` `-lol`\n`-summoners` `-sumwar`\n`-mario`\n`-mobilelegends` `-mbl`\n`-minecraft`\n`-paladins`\n`-rocketleague`\n`-transformice` `-tfm`\n`-uno`\n`-valorant`'
                },
                {
                    name: 'Mande mais games pra gente',
                    value: `[Suporte Raphy](${linksupport})`
                },
            )
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        const AnimeEmbed = new Discord.MessageEmbed()
            .setColor('#CD853F')
            .setTitle('Comandos de Animes :hearts:')
            .setURL('https://discord.gg/mx8eMx6')
            .setDescription('Aaaaaaa anime é muito boooom! :heart:')
            .addFields(
                {
                    name: 'Indicação de Animes (+2000 Animes)',
                    value: '`-ind`'
                },
                {
                    name: 'Fotos/Gifs de Animes',
                    value: '`-sao` Sword Art Online'
                },
                {
                    name: `Mais animes estão sendo adicionados, tem alguma sugestão?`,
                    value: `[Clique aqui](${linksupport})`
                }
            )
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        const CommandEmbed = new Discord.MessageEmbed()
            .setColor('#CD853F')
            .setTitle('Comandos da Raphy')
            .setURL('https://discord.gg/mx8eMx6')
            .setDescription('Aqui você pode encontrar vários comandos úteis e que podem ajudar bastante.')
            .addFields(
                {
                    name: 'Covid-19',
                    value: '`-covid` Informações mundiais sobre a COVID-19'
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
            .addField('Estamos adicionando mais comandos úteis, tá bom?', `Tem algúma ideia de comando legal? [Clique aqui](${linksupport})`)
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        const Reação = new Discord.MessageEmbed()
            .setColor('#CD853F')
            .setTitle('Comandos de reações :hearts:')
            .setURL(linkservidor)
            .setDescription(`Mostre a todos como você se sente.`)
            .addFields(
                {
                    name: 'Comandos Disponiveis',
                    value: '`-cry` Chorar as vezes faz bem. \n`-dance` Dance Dance \n`-fury` Mostre sua furia! \n`-happy` Feliiiz \n`-sleep` que soninhoo \n`-smile` Está feliz? Sorria! \n`-tired` que cansaço! \n`-surprise` Mas o que é isso? \n`-clap` Aplaudir é legal \n`-thin` Oque eu faço \n`-die` Morreu \n`-facepalm` Decepcionado(a) \n`-glare` Olhar Pistola \n`-pout` Fazendo Bico \n`-purr` Gostando \n`-sad` Triste '
                },
            )
            .addField('Não se procupe, mais comandos estão sendo adicionados', `Você tem alguma ideia? [Clique aqui](${linksupport})`,)
            .setFooter(`${message.author.tag} - Em breve, comandos em português`, message.author.displayAvatarURL())

        const Interação = new Discord.MessageEmbed()
            .setColor('#CD853F')
            .setTitle('Comandos de Interação :hearts:')
            .setURL('https://discord.gg/mx8eMx6')
            .setDescription(`Interaja com as pessoas atráves de gifs sensacionais.`)
            .addFields(
                {
                    name: 'Comandos Disponiveis',
                    value: '`-baka @user` Chame de Baka! \n`-bite @user` Mordidinha \n`-dedo @user` Educação \n`-greet @user` Comprimento \n`-hit @user` Briga, briga, briga! \n`-hug @user` Abraçar é tão boom \n`-kill @user` Mate! \n`-kiss @user` Hmmm, beijo é? \n`-onegai @user` Porfavoor \n`-pat @user` Cariiiinho \n`-rob @user` Roubar é tão feio... \n`-slap @user` Tapããão \n`-love @user` Mande seu amor secretamente \n`-ery @user` Deboche \n`-lick @user` Peroriin \n`-suck @user` Chupada \n`-highfive @user` Toca Aqui \n`-poke @user` Cutucadinha \n`-shoot @user` Atire para matar \n`-shrug @user` Fazer oque ne  \n`-stare @user` Olhar fixo \n`-stomp @user` Pise em alguem'
                },
            )
            .addField('Não se procupe, mais comandos estão sendo adicionados', `Você tem alguma ideia? [Clique aqui](${linksupport})`,)
            .setFooter(`${message.author.tag} - Comandos em português em breve`, message.author.displayAvatarURL())

        const Quiz = new Discord.MessageEmbed()
            .setColor('#CD853F')
            .setTitle('📝 Raphy Quiz 📝 BETA')
            .setURL('https://discord.gg/mx8eMx6')
            .setDescription('O Raphy Quiz é um jogo simples e divertido de brincar. Tendo 2 modos, o *Normal* com perguntas genéricas e *Naruto*, para os otakus de plantão.\nJogar com os amigos é ainda mais divertido!!!')
            .addFields(
                {
                    name: 'Comando de Ativação',
                    value: 'Ativos: `-quiz` | `-quiznaruto`\nEm criação: `-quizanimes` | `-quizcinema` | `-quizhistoria` | `-quizch (corpo humano)`'
                },
                {
                    name: 'Como jogar',
                    value: 'Digite o comando e espere a pergunta, o primeiro a responder ganha.'
                },
                {
                    name: 'Raphy Quiz Informações',
                    value: '`Quiz: 27 Perguntas`\n`Quiznaruto: 17 Perguntas`'
                }
            )
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        const owner = new Discord.MessageEmbed()
            .setColor('#CD853F')
            .setTitle('<:hehe:741819620931010639> Comandos Exclusivos do meu Criador <:hehe:741819620931010639>')
            .setURL('https://discord.gg/mx8eMx6')
            .setDescription('Comandos especificos com poder de mudar muita coisa. Então, este comandos estão privados.')
            .addFields(
                {
                    name: 'Comandos Emergênciais',
                    value: '`-reboot` Me reinicia\n`-turnoff` Me desliga\n`-recall command` Reinicia comandos\n`-setdefaultprefix` Muda o prefix padrão\n`-reloadserver` Reinicia meu servidor'
                },
                {
                    name: 'Comandos Exclusivos',
                    value: '`-status` Muda meu status no prefil\n`-addrp @user` Dá RPs pra alguém\n`resetrp @user` Reseta RP de alguem\n`-resetallrp` Reseta o RP Data Center'
                },
                {
                    name: 'Comandos Black',
                    value: '`-block @user` Bloqueia um usuário de usar meus comandos\n`unblock` Inverso de block\n`-leaveall` Me tira de todos os servidores\n`delraphy` Me deleta :cry:'
                }
            )
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        await message.channel.send(HelpEmbed).then(msg => {
            msg.react('🏛️') // home  1
            msg.react('⭐') // rpsystem 2
            msg.react('💍') // Family 3
            msg.react('💿') // music 4
            msg.react('⚙️') // Admins 5
            msg.react('💞') // thanks 6 
            msg.react('💬') // Support 7
            msg.react('🎮') // Games 8
            msg.react('📺') // Anime 9 
            msg.react('🧤') // commandEmbed 10
            msg.react('🪅') // Reação 11
            msg.react('👥') // interação 12
            msg.react('📝') // quiz 13
            msg.react('📃') // botinfo 14
            msg.react('<:hehe:741819620931010639>') // owner 15
            msg.react('❌') // delete 16
            //  msg.react('') // 17
            //  msg.react('') // 18
            //  msg.react('') // 19
            // msg.react('') // 20 // Limite Reaction Discord

            msg.awaitReactions((reaction, user) => {
                if (message.author.id !== user.id) return;

                if (reaction.emoji.name === '🏛️') { // home
                    reaction.users.remove(user)
                    msg.edit(HelpEmbed)
                }
                if (reaction.emoji.name === '<:hehe:741819620931010639>') { // home
                    reaction.users.remove(user)
                    msg.edit(owner)
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
                if (reaction.emoji.name === '❌') { // Delete
                    msg.delete()
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
                                value: '🏛️ Página Princial\n📃 Essa página aqui\n⚙️ Informações Técnicas\n❤️ Colaboradores\n💬 Suporte\n❌ Apaga tudo'
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
                                msg.edit(Support)
                            }
                            if (reaction.emoji.name === '❌') { // 3º Embed - Thanks
                                msg.delete()
                            }

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
                                        if (reaction.emoji.name === '❌') { // Delete
                                            msg.delete()
                                        }
                                    })

                                })
                            }
                        })
                    })
                }
            })
        })
    }
}