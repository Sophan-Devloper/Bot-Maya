const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  message.delete().catch(O_o => {});
let user = client.users.cache.get(args[0]);
var game = 'Brawlhalla'
var link1 = 'https://store.steampowered.com/app/291550/Brawlhalla/'
var link2 = 'https://play.google.com/store/apps/details?id=air.com.ubisoft.brawl.halla.platform.fighting.action.pvp&hl=pt_BR'
var st = 'Steam'
var ps = 'Play Store'
var as = 'Apple Store'
var pt = 'PlayStation'
var w = 'Microsoft Windows'
var nsw = 'Nintendo Switch'
var xbo = 'Xbox One'
var mc = 'MacOS'
var ios = 'iOS'
var an = 'Android'
var li = 'Linux'
var nv = 'Navegador'

const GameEmbed = new Discord.MessageEmbed()
        .setColor('#6A5ACD')
        .setTitle(`${game}`)
        .addField(`${st}`, `${link1}`)
        .addField(`${ps}`, `${link2}`)      
        .setFooter(`Plataformas: ${pt} 4, ${nsw}, ${an}, ${xbo}, ${mc}, ${w}, ${ios}`)
  await message.channel.send(GameEmbed).then(msg => msg.delete({timeout: 10000}));
}