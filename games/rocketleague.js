const Discord = require('discord.js');

exports.run = async (client, message, args) => {
message.delete().catch(O_o => {});
let user = client.users.cache.get(args[0]);
var game = 'Rocket League - Epic Games'
var link1 = 'https://www.epicgames.com/store/pt-BR/product/rocket-league/home'
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
        .addField(`Epic Games`, `${link1}`)           
        .setFooter(`Plataformas: PlayStation 4, Nintendo Switch, Xbox One, macOS, Microsoft Windows, Linux, Mac OS Classic`)
  await message.channel.send(GameEmbed).then(msg => msg.delete({timeout: 10000}));
}