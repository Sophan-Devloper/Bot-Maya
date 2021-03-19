const Discord = require('discord.js');

exports.run = async (client, message, args) => {
message.delete().catch(O_o => {});
let user = client.users.cache.get(args[0]);
var game = 'Gartic'
var link1 = 'https://gartic.com.br/'
var link2 = 'https://play.google.com/store/apps/details?id=com.gartic.Gartic&hl=pt_BR'
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
        .setFooter(`Plataformas: ${an}, ${ios}, ${win}`)
  await message.channel.send(GameEmbed).then(msg => msg.delete({timeout: 10000}));
}