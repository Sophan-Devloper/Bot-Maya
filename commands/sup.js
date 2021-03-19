const Discord = require('discord.js');
exports.run = async (client, message, args) => {
message.delete()

const Embed = new Discord.MessageEmbed()
          .setColor('#FF0000')
          .setAuthor("Obrigado por apoiar a Raphy")
          .setTitle('Clique aqui para acessar a Central de Suporte')
          .setURL('https://forms.gle/vtJ5qBqFDd9rL5JU8')
          .setImage('https://imgur.com/KyjyfRg.gif')
          .setFooter(message.author.username, message.author.displayAvatarURL())
    await message.channel.send(Embed)
}