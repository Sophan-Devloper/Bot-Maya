const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

const HelpEmbed = new Discord.MessageEmbed()
        .setColor('#6A5ACD')        
        .setTitle(':hearts: Mystic Kingdom :hearts:')
        .setURL('https://discord.gg/mx8eMx6')        
        .setDescription(`**💞Minha Casa💞** \nhttps://discord.gg/mx8eMx6`)        
        .setImage('https://imgur.com/cjoVaGJ.gif')
        .setFooter(`Comando por: ${message.author.tag}`, message.author.displayAvatarURL())
  await message.channel.send(HelpEmbed).then(msg => msg.delete({timeout: 10000}))
}