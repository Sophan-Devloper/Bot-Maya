const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  message.delete().catch(O_o => {});
let user = client.users.cache.get(args[0]);

message.channel.send('Tem 2 jogos no meu banco de dados com o apelido "Brawl", qual você quer?\n`-BrawlStars`\n`-Brawlhalla`');
if (message.author.content('-1'))
    return message.channel.send(Brawlstars)
if (message.author.content('-2'))
    return message.channel.send(Brawlhalla)

var Brawlstars = new Discord.MessageEmbed()
        .setColor('#6A5ACD')
        .setTitle(`${game}1`)
        .addField(`${st}`, `${link1}`)
        .addField(`${ps}`, `${link2}`)      
        .setFooter(`Plataformas: ${pt} 4, ${nsw}, ${an}, ${xbo}, ${mc}, ${w}, ${ios}`)
  await message.channel.send(Brawlstars).then(msg => msg.delete({timeout: 10000}));

var Brawlhalla = new Discord.MessageEmbed()
        .setColor('#6A5ACD')
        .setTitle(`${game2}`)
        .addField(`${ps}`, `${link3}`)
        .addField(`${as}`, `${link4}`)      
        .setFooter(`Plataformas: ${an}, ${ios}`)
  await message.channel.send(Brawlhalla).then(msg => msg.delete({timeout: 10000}));
var game1 = 'Brawl Stars'
var game2 = 'Brawlhalla'
var link1 = 'https://play.google.com/store/apps/details?id=com.supercell.brawlstars&hl=pt_BR'
var link2 = 'https://apps.apple.com/br/app/brawl-stars/id1229016807'
var link3 = 'https://store.steampowered.com/app/291550/Brawlhalla/'
var link4 = 'https://play.google.com/store/apps/details?id=air.com.ubisoft.brawl.halla.platform.fighting.action.pvp&hl=pt_BR'
var st = 'Steam'
var ps = 'Play Store'
var as = 'Apple Store'
var pt = 'PlayStation'
var site = 'Site Oficial'
var w = 'Microsoft Windows'
var nsw = 'Nintendo Switch'
var xbo = 'Xbox One'
var mc = 'MacOS'
var ios = 'iOS'
var an = 'Android'
var li = 'Linux'
var nv = 'Navegador'
}