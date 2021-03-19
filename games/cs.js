const Discord = require('discord.js');

exports.run = async (client, message, args) => {
message.delete().catch(O_o => {});
let user = client.users.cache.get(args[0]);
var game = 'Counter-Strike: Global Offensive'
var link1 = 'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/'
var link2 = ''
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
        .addField(`${st}`, `${link1}`)             
        .setFooter(`Plataformas: ${win}, ${mc}, ${pt} 3/4, ${li}, ${x} 360`)
  await message.channel.send(GameEmbed).then(msg => msg.delete({timeout: 10000}));
}