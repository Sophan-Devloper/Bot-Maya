const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  message.delete()

  const games = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle('Existe 2 jogos com o apelido Brawl no meu banco de dados')
    .setDescription('☝️ Brawlhalla\n✌️ Brawlstars')

  await message.channel.send(games).then(msg => {
    msg.react('☝️') // Check
    msg.react('✌️') // X

    msg.awaitReactions((reaction, user) => {
      if (message.author.id !== user.id) return

      if (reaction.emoji.name === '☝️') { // Sim
        msg.delete()

        var game = 'Brawlhalla'
        var link1 = 'https://store.steampowered.com/app/291550/Brawlhalla/'
        var link2 = 'https://play.google.com/store/apps/details?id=air.com.ubisoft.brawl.halla.platform.fighting.action.pvp&hl=pt_BR'
        var st = 'Steam'
        var ps = 'Play Store'
        var pt = 'PlayStation'
        var w = 'Microsoft Windows'
        var nsw = 'Nintendo Switch'
        var xbo = 'Xbox One'
        var mc = 'MacOS'
        var ios = 'iOS'
        var an = 'Android'
        const GameEmbed = new Discord.MessageEmbed()
          .setColor('BLUE')
          .setTitle(`${game}`)
          .addField(`${st}`, `${link1}`)
          .addField(`${ps}`, `${link2}`)
          .setFooter(`Plataformas: ${pt} 4, ${nsw}, ${an}, ${xbo}, ${mc}, ${w}, ${ios}`)
        return message.channel.send(GameEmbed).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
      }
      if (reaction.emoji.name === '✌️') { // Não
        msg.delete()

        var game = 'Brawlhalla'
        var link1 = 'https://store.steampowered.com/app/291550/Brawlhalla/'
        var link2 = 'https://play.google.com/store/apps/details?id=air.com.ubisoft.brawl.halla.platform.fighting.action.pvp&hl=pt_BR'
        var st = 'Steam'
        var ps = 'Play Store'
        var pt = 'PlayStation'
        var w = 'Microsoft Windows'
        var nsw = 'Nintendo Switch'
        var xbo = 'Xbox One'
        var mc = 'MacOS'
        var ios = 'iOS'
        var an = 'Android'

        const GameEmbed = new Discord.MessageEmbed()
          .setColor('BLUE')
          .setTitle(`${game}`)
          .addField(`${st}`, `${link1}`)
          .addField(`${ps}`, `${link2}`)
          .setFooter(`Plataformas: ${pt} 4, ${nsw}, ${an}, ${xbo}, ${mc}, ${w}, ${ios}`)
        return message.channel.send(GameEmbed).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
      }
    })
  })
}