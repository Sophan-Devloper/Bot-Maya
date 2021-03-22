const Discord = require('discord.js');
exports.run = async (client, msg, args) => {
msg.delete()

const Embed = new Discord.MessageEmbed()
          .setColor('#FF0000')
          .setAuthor("Obrigado por apoiar a Raphy")
          .setTitle('Clique aqui para acessar a Central de Suporte')
          .setURL('https://forms.gle/vtJ5qBqFDd9rL5JU8')
          .setImage('https://imgur.com/U4PkdDo.gif')
          .setFooter(msg.author.username, msg.author.displayAvatarURL())
    await msg.channel.send(Embed)
}