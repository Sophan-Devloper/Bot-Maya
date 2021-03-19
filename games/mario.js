const Discord = require('discord.js');

exports.run = async (client, message, args) => {
message.delete().catch(O_o => {});
let user = client.users.cache.get(args[0]);
var game = 'Mario'
var link1 = 'https://store.nintendo.com.br/catalogsearch/result/?q=Mario'
var link2 = 'https://play.google.com/store/search?q=Mario&c=apps&hl=en_US&gl=US'
var st = 'Steam'
var ps = 'Play Store'
var as = 'Apple Store'
var pt = 'PlayStation'
var site = 'Site Oficial'
var win = 'Microsoft Windows'
var nsw = 'Nintendo Switch'
var x = 'Xbox'
var mc = 'MacOS'
var ios = 'iOS'
var an = 'Android'
var li = 'Linux'
var nv = 'Navegador'

const GameEmbed = new Discord.MessageEmbed()
        .setColor('#6A5ACD')
        .setTitle(`${game}`)
        .addField(`${site}`, `${link1}`)
        .addField(`${ps}`, `${link2}`)      
        .setFooter(`Plataformas: ${nsw}, ${an}, ${ios}, ${win}, ${mc}`)
  await message.channel.send(GameEmbed).then(msg => msg.delete({timeout: 10000}));
}