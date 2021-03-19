const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  message.delete().catch(O_o => {});
let user = client.users.cache.get(args[0]);
var game = 'Among Us'
var link1 = 'https://store.steampowered.com/app/945360/Among_Us/'
var link2 = 'https://play.google.com/store/apps/details?id=com.innersloth.spacemafia&hl=en'
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
        .addField(`${ps}`, `${link2}`)
        .addField('Among Us Gratis (pc)', 'https://discord.gg/CSAKXC6')   
        .setFooter(`Plataformas: ${win}, ${an}, ${ios}`)
  await message.channel.send(GameEmbed).then(msg => msg.delete({timeout: 10000}));
}