const Discord = require('discord.js');

exports.run = async (client, message, args) => {
message.delete().catch(O_o => {});
let user = client.users.cache.get(args[0]);
var game = 'Genshin Impact RPG'
var link1 = 'https://genshin.mihoyo.com/en'
var link2 = 'https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact&hl=en_US&gl=US'
var st = 'Steam'
var ps = 'Play Store'
var as = 'Apple Store'
var pt = 'PlayStation'
var w = 'Microsoft Windows'
var mc = 'MacOS'
var ios = 'iOS'
var an = 'Android'
var li = 'Linux'
var nv = 'Navegador'

const TFMEmbed = new Discord.MessageEmbed()
        .setColor('#6A5ACD')
        .setTitle(`${game}`)
        .addField('Site Oficial', `${link1}`)
        .addField(`${ps}`, `${link2}`)
        .setImage('https://imgur.com/380aoSo.gif')
        .setFooter(`Plataformas: ${w}, ${pt} 4, Nintendo Switch, ${an}, ${ios}`)
  await message.channel.send(TFMEmbed).then(msg => msg.delete({timeout: 10000}));
}