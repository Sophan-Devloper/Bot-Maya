const Discord = require('discord.js');

exports.run = async (client, message, args) => {
message.delete().catch(O_o => {});
let user = client.users.cache.get(args[0]);
var game = '**Clash Royale**'
var link1 = 'https://play.google.com/store/apps/details?id=com.supercell.clashroyale&hl=pt_BR'
var link2 = 'https://apps.apple.com/br/app/clash-royale/id1053012308'
var plat = 'Plataformas: Android, iOS'
var ps = 'Play Store'
var as = 'Apple Store'
var w = 'Windows'
var mc = 'Mac'

const HelpEmbed = new Discord.MessageEmbed()
        .setColor('#6A5ACD')
        .setTitle(`${game}`)               
        .addField(`${ps}`, `${link1}`)
        .addField(`${as}`, `${link2}`)      
        .setFooter(`${plat}`)
  await message.channel.send(HelpEmbed).then(msg => msg.delete({timeout: 10000}));
}