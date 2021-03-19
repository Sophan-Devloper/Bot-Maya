const Discord = require('discord.js');

exports.run = async (client, message, args) => {
message.delete().catch(O_o => {});
let user = client.users.cache.get(args[0]);
var game = 'Garena Free Fire'
var link1 = 'https://play.google.com/store/apps/details?id=com.dts.freefireth&hl=pt_BR'
var link2 = 'https://apps.apple.com/us/app/garena-free-fire-wonderland/id1300146617'
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
        .addField(`${ps}`, `${link1}`)
        .addField(`${as}`, `${link2}`)      
        .setFooter(`Plataformas: ${an}, ${ios}`)
  await message.channel.send(GameEmbed).then(msg => msg.delete({timeout: 10000}));
}