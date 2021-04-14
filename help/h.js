const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

  var helpgit = 'https://github.com/rodycouto/MayaCommands/blob/main/README.md'
  var linksupport = 'https://forms.gle/vtJ5qBqFDd9rL5JU8'
  var linkservidor = 'https://discord.gg/YpFWgJuuUV'
  let prefix = db.get(`prefix_${message.guild.id}`)
  if (prefix === null) { prefix = "-" }

  if (!args[0]) {
    const newhelp = new Discord.MessageEmbed()
      .setColor('#CD853F')
      .setTitle('⭐ Centralzinha de Ajuda da Maya ⭐')
      .setDescription(`Heey! Tudo bem ${message.author}?\n \nSe você quiser informações sobre algum comando especifico, use **${prefix}ajuda categoria** ou apenas o comando.\nExemplo: **${prefix}marry** que eu te falo tudo sobre o comando.`)
      .addField('Acesso direto', `:tools: [Lista de Comandos](${helpgit}) | ☎️ [Suporte](${linksupport}) | 🧩 [Meu servidor](${linkservidor})`)
      .setFooter(`${prefix}ajuda categoria`)
    return message.channel.send(`${message.author}`, newhelp)
  }

  if (['categoria', 'categorias'].includes(args[0])) {
    const catego = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('📑 Todos os comandos sob categorias')
      .setDescription('❓ **O que são categorias?**\nCategorias são como caixas, dentro de cada caixa tem os comandos que a ela pertence.\n \nDentro de cada categoria, tem comandos disponiveis. Começe a explorar!\n \nExemplo: `' + prefix + 'help moderation` Comandos de moderação.')
      .addField('• Categorias Disponiveis (14)', 'afk\nanimes\ncommands\ndiscordjs\ngames\ninteração\nlevel\nmaya\nmoderation\nmpoints\nperfil\nquiz\nrandom\nreações')
      .addField('• Categorias Privadas (3)', '**• Categorias Offline (0)**')
    return message.channel.send(`${message.author}`, catego)
  }

  if (['afksystem', 'afk'].includes(args[0])) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('📢 Maya - AFK Global System')
      .setDescription('Com o AFK System, eu avisarei as pessoas que te marcarem que você está offline.\nVocê pode deixar uma mensagem pra elas também.')
      .addFields(
        {
          name: '📴 Servidor',
          value: '`' + prefix + 'afk Almoçando`\nAvisarei a todos que você está almoçando.'
        },
        {
          name: '🌎 Global',
          value: '`' + prefix + 'afk all` ou ' + '`' + prefix + 'afk global`\n' + 'Avisarei em todos os servidores que você está offline.\n \nExemplo: ' + '`' + prefix + 'afk global Estou almoçando, já volto.`'
        }
      )
      .setFooter('O AFK System será desativado quando você mandar uma mensagem.')
    return message.channel.send(`${message.author}, este é um comando novo, se houve algúm bug, use **${prefix}support**`, embed)
  }

  if (['anime', 'animes'].includes(args[0])) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('📺 Anime Place')
      .setDescription('Os comandos de animes da Maya ainda está sendo produzidos.')
      .addFields(
        {
          name: '• Comandos Offline (1)',
          value: `${prefix}anime`
        },
        {
          name: '• Comandos Online',
          value: `${prefix}ind - Indicações de Animes\n${prefix}sao - Meu anime favoriton\n${prefix}senpai - Meu senpai favorito`
        },
        {
          name: '• Comandos em construção',
          value: 'Comandos no registro: (62)'
        }
      )
    return message.channel.send(embed)
  }

  if (['comandos', 'commands'].includes(args[0])) {
    const embed1 = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('✅ Comandos livres para todos usarem')
      .setDescription('Comandos presentes nesta lista, é disponivel para qualquer um usa-los')
      .addField('• Comando Online', '<opicional> [obrigatório]\n \n' + '`' + prefix + 'avatar <@user>`\n' + '`' + prefix + 'clima [Sua Cidade]`\n' + '`' + prefix + 'covid <Sua Cidade>`\n' + '`' + prefix + 'clima [Sua Cidade]`\n' + '`' + prefix + 'dono`\n' + '`' + prefix + 'id/user/userinfo <@user>`\n' + '`' + prefix + 'ideia [sua ideia em diante]`\n' + '`' + prefix + 'imc [peso] [altura]`\n' + '`' + prefix + 'invites`\n' + '`' + prefix + 'jokenpo`\n' + '`' + prefix + 'report`\n' + '`' + prefix + 'serverinfo`\n' + '`' + prefix + 'spotify`\n' + '`' + prefix + 'translate`\n' + '`' + prefix + 'uptime`')
      .addField('• Comandos Offline (4)', '`' + prefix + 'cal` | ' + '`' + prefix + 'chagemymind` | ' + '`' + prefix + 'wow` | n' + '`' + prefix + 'over`')
      .addField('• Comandos em construção', 'Comandos no registro: (21)')
    return message.channel.send(`${message.author}`, embed1)
  }

  if (['github', 'discordjs'].includes(args[0])) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('👨‍💻 Maya GitHub - BETA COMMAND')
      .setDescription('Aqui você pode pegar os código que eu uso, siiim, eu sou open source e todos podem ajudar e copiar se quiser')
      .addField('• Comandos Online', '`' + prefix + 'github`\n' + '`' + prefix + 'commandfile`\n' + '`' + prefix + 'levelsystem`\n' + '`' + prefix + 'random`')
      .addField('• Comandos Offline (0)', 'Nenhum')
      .addField('• Comandos em construção', 'Comandos no registro: (361)')
    return message.channel.send(embed)
  }

  if (['games', 'jogos', 'game', 'jogo'].includes(args[0])) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('🎮 Link para acesso rápido a jogos')
      .setDescription('Aqui você pode pegar os links de jogos e ir direto pra eles sem ter que ficar pesquisando no Google')
      .addField('• Comandos Online', '`' + prefix + 'amongus`\n' + '`' + prefix + 'brawl`\n' + '`' + prefix + 'brawlhalla`\n' + '`' + prefix + 'brawlstars`\n' + '`' + prefix + 'clash/clashroyale`\n' + '`' + prefix + 'counterstrike/cs`\n' + '`' + prefix + 'ddtank`\n' + '`' + prefix + 'freefire/ff`\n' + '`' + prefix + 'gartic`\n' + '`' + prefix + 'genshinimpact/genshin`\n' + '`' + prefix + 'gta`\n' + '`' + prefix + 'habbo`\n' + '`' + prefix + 'leagueoflegends/lol`\n' + '`' + prefix + 'mario`\n' + '`' + prefix + 'mobilelegends/mbl`\n' + '`' + prefix + 'minecraft/mine`\n' + '`' + prefix + 'paladins`\n' + '`' + prefix + 'rocketleague`\n' + '`' + prefix + 'summoners`\n' + '`' + prefix + 'sumwar`\n' + '`' + prefix + 'transformice/tfm`\n' + '`' + prefix + 'uno`\n' + '`' + prefix + 'valorant`')
      .addField('• Comandos Offline (No Status Defined)', ' ')
      .addField('• Comandos em construção', 'Comandos no registro: (2)')
    return message.channel.send(embed)
  }

  if (['help', 'h', 'ajuda'].includes(args[0])) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('❓ Ué? Help no Help?')
      .setDescription('Bom, vou deixar comandos do help aqui')
      .addField('• Comandos Online', '`' + prefix + 'help`\n' + '`' + prefix + 'ajuda`\n' + '`' + prefix + 'h`\n' + '`' + prefix + 'thanks`\n' + '`' + prefix + 'support/sup/suporte`\n' + '`' + prefix + 'afkhelp`\n' + '`' + prefix + 'bjhelp/blackjackhelp`')
      .addField('• Comandos Offline (0)', 'Nenhum')
      .addField('• Comandos em construção', 'Comandos no registro: (361)')
    return message.channel.send(embed)
  }

  if (['interacao', 'interação', 'interation'].includes(args[0])) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('💞 Comandos Interativos')
      .setDescription('Interaja com a galera com os melhores comandos e gifs incriveis')
      .addField('• Comandos Online', '`' + prefix + 'afeta`\n' + '`' + prefix + 'atirar`\n' + '`' + prefix + 'baka`\n' + '`' + prefix + 'beaut`\n' + '`' + prefix + 'beijar`\n' + '`' + prefix + 'morder`\n' + '`' + prefix + 'carinho`\n' + '`' + prefix + 'chupar`\n' + '`' + prefix + 'saudar`\n' + '`' + prefix + 'cutucar`\n' + '`' + prefix + 'dedo`\n' + '`' + prefix + 'gay`\n' + '`' + prefix + 'lutar`\n' + '`' + prefix + 'fight`\n' + '`' + prefix + 'implorar`')
      .addField('Tem mais um monte de comandos de interação', 'Você pode ve-los [aqui](https://github.com/rodycouto/MayaCommands#-comandos-de-intera%C3%A7%C3%A3o)')
      .setFooter('Quase todos os comandos também estão disponiveis em inglês')
      .addField('• Comandos Offline (2)', '`' + prefix + 'oi` | ' + '`' + prefix + 'tchau`')
      .addField('• Comandos em construção', 'Comandos no registro: (15)')
    return message.channel.send(embed)
  }

  if (['level', 'nivel', 'xp'].includes(args[0])) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('🌐 Level Global System')
      .setDescription(`O meu sistema de level é global. Se você não sabe o que quer dizer, você pode [ver aqui](${helpgit}) sobre o que eu estou falando`)
      .addField('• Comandos Online', '`' + prefix + 'level`\n' + '`' + prefix + 'dailyxp`\n' + '`' + prefix + 'rank`')
      .addField('• Comandos Offline (0)', 'Nenhum')
      .addField('• Comandos em construção', 'Comandos no registro: (4)')
    return message.channel.send(embed)
  }

  if (['maya'].includes(args[0])) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('🌟 Meus comandos lindinhos')
      .setDescription(`Aqui tem alguns comandos ligados a mim`)
      .addField('• Comandos Online', '`' + prefix + 'att/new`\n' + '`' + prefix + 'botinfo`\n' + '`' + prefix + 'inv/invite/convidar`\n' + '`' + prefix + 'criarcomando [nome] [resposta]`\n' + '`' + prefix + 'deletarcomando [nome]`\n' + '`' + prefix + 'dm/pv`\n' + '`' + prefix + 'lockcommands`\n' + '`' + prefix + 'unlockcommands`\n' + '`' + prefix + 'ping`\n' + '`' + prefix + 'prefix`')
      .addField('• Comandos Offline', 'Nenhum')
      .addField('• Comandos em construção', 'Comandos no registro: (34)')
    return message.channel.send(embed)
  }

  if (['moderation', 'moderação', 'mod', 'administração', 'adm', 'administration'].includes(args[0])) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('⚙️Espaço para os Adms/Mods')
      .setDescription('Aqui você pode ver alguns dos meus comandos administrativos')
      .addField('• Comandos Online', '`' + prefix + 'addrole`\n' + '`' + prefix + 'autorole`\n' + '`' + prefix + 'ban`\n' + '`' + prefix + 'clear`\n' + '`' + prefix + 'clonechannel`\n' + '`' + prefix + 'config`\n' + '`' + prefix + 'createchannel`\n' + '`' + prefix + 'deletechannel`\n' + '`' + prefix + 'giveaway/sorteio`\n' + '`' + prefix + 'kick`')
      .addField('• Comandos Offline (0)', 'Nenhum')
      .addField('• Comandos em construção', 'Comandos no registro: (9)')
      .addField('⠀', `Devido a quantidade de comandos, entre no meu [painel de comandos](${helpgit})`)
    return message.channel.send(embed)
  }

  if (['economy', 'economia', 'mpoints', 'money'].includes(args[0])) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle(':coin: Economia Global System')
      .setDescription('Ganhe e perca dinheiro, tem coisa melhor?')
      .addField('• Comandos Online', '`' + prefix + 'atm/bal/saldo`\n' + '`' + prefix + 'blackjack/bj`\n' + '`' + prefix + 'cobrar`\n' + '`' + prefix + 'pay`\n' + '`' + prefix + 'daily`\n' + '`' + prefix + 'lotery`\n' + '`' + prefix + 'crime`\n' + '`' + prefix + 'work`\n' + '`' + prefix + 'fugir`\n' + '`' + prefix + 'roubar`\n' + '`' + prefix + 'pescar`\n' + '`' + prefix + 'minerar`\n' + '`' + prefix + 'loja`\n' + '`' + prefix + 'slot/inve/inventario`\n' + '`' + prefix + 'buy`\n' + '`' + prefix + 'vender/sell`')
      .addField('• Comandos Offline (0)', 'Nenhum')
      .addField('• Comandos Moderação', '`' + prefix + 'setpescachannel`\n' + '`' + prefix + 'setminechannel`')
      .addField('• Comandos em construção', 'Comandos no registro: (25)')
      .addField('⠀', `Mais comandos no meu [painel de comandos](${helpgit})`)
    return message.channel.send(embed)
  }

  if (['perfil', 'profile'].includes(args[0])) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('👩‍💻 Perfil Exclusivo')
      .setDescription('Crie seu perfil aqui comigo :hearts:')
      .addField('• Comandos Online', '`' + prefix + 'marry`\n' + '`' + prefix + 'divorce`\n' + '`' + prefix + 'family`\n' + '`' + prefix + 'nofamily`\n' + '`' + prefix + 'setstatus`\n' + '`' + prefix + 'rp`')
      .addField('• Comandos Offline', 'Nenhum')
      .addField('• Comandos em construção', 'Comandos no registro: (11)')
      .addField('⠀', `Mais comandos no meu [painel de comandos](${helpgit})`)
    return message.channel.send(embed)
  }

  if (['quiz', 'trivia'].includes(args[0])) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('✍️ Você é inteligente?')
      .setDescription('Aqui você pode responder perguntas ou não responder né?')
      .addField('• Comandos Online', '`' + prefix + 'quiz`\n' + '`' + prefix + 'quiznaruto`')
      .addField('• Comandos Offline', 'Nenhum')
      .addField('• Comandos em construção', 'Comandos no registro: (54)')
      .addField('⠀', `Mais informações no meu [painel de comandos](${helpgit})`)
    return message.channel.send(embed)
  }

  if (['random', 'aleatório', 'aleatorio'].includes(args[0])) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('📜 Comandos Aleatório')
      .setDescription('Comandos aleatório e divertidos, garanto')
      .addField('• Comandos Online', '`' + prefix + 'advice/conselho`\n' + '`' + prefix + 'ascci`\n' + '`' + prefix + 'boom`\n' + '`' + prefix + 'cat`\n' + '`' + prefix + 'puppy`\n' + '`' + prefix + 'dado/roll`\n' + '`' + prefix + 'feet`\n' + '`' + prefix + 'nota`\n' + '`' + prefix + 'stonks`\n')
      .addField('• Comandos Offline (12)', 'Lista indisponivel')
      .addField('• Comandos em construção', 'Comandos no registro: (154)')
      .addField('⠀', `Mais comandos no meu [painel de comandos](${helpgit})`)
    return message.channel.send(embed)
  }

  if (['react', 'reações'].includes(args[0])) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('💕 É bom mostrar como você se sente')
      .setDescription('Mostre a todos em formato de gif como você se sente, é incrivel')
      .addField('• Comandos Online', '`' + prefix + 'clap`\n' + '`' + prefix + 'cry`\n' + '`' + prefix + 'dance`\n' + '`' + prefix + 'die`\n' + '`' + prefix + 'ery`\n' + '`' + prefix + 'facepalm`\n' + '`' + prefix + 'fury`\n' + '`' + prefix + 'glare`\n' + '`' + prefix + 'happy`')
      .addField('• Comandos Offline (17)', 'Processo de tradução')
      .addField('• Comandos em construção', 'Comandos no registro: (81)')
      .addField('⠀', `Mais comandos no meu [painel de comandos](${helpgit})`)
    return message.channel.send(embed)
  } else {
    return message.channel.send('Esta categoria não foi encontrada. use `' + prefix + 'help categoria` e veja as categorias disponiveis.')
  }
}