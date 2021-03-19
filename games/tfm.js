const Discord = require('discord.js');

exports.run = async (client, message, args) => {
message.delete().catch(O_o => {});
let user = client.users.cache.get(args[0]);
var game = 'Transformice'
var link1 = 'https://store.steampowered.com/app/335240/Transformice/'
var link2 = 'https://www.transformice.com/'
var st = 'Steam'
var ps = 'Play Store'
var as = 'Apple Store'
var w = 'Microsoft Windows'
var mc = 'MacOS'
var ios = 'iOS'
var an = 'Android'
var li = 'Linux'
var nv = 'Navegador'

const TFMEmbed = new Discord.MessageEmbed()
        .setColor('#6A5ACD')
        .setTitle(`${game}`)               
        .addField(`${st}`, `${link1}`)
        .addField(`${nv}`, `${link2}`)      
        .setFooter(`Plataformas: ${w}, ${mc}`)
  await message.channel.send(TFMEmbed).then(msg => msg.delete({timeout: 10000}));
}