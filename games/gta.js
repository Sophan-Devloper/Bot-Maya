const Discord = require('discord.js');

exports.run = async (client, message, args) => {
message.delete().catch(O_o => {});
let user = client.users.cache.get(args[0]);
var game = 'Grand Theft Auto V - Rockstar Games'
var link1 = 'https://www.rockstargames.com/'
var link2 = 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/'
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
        .addField(`${st}`, `${link2}`)      
        .setFooter(`Plataformas: PlayStation 5, PlayStation 4, Xbox Series X, PlayStation 3, Xbox 360, Xbox One, Microsoft Windows`)
  await message.channel.send(GameEmbed).then(msg => msg.delete({timeout: 10000}));
}