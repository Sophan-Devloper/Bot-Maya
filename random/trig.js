const Discord = require('discord.js')
const canvacord = require('canvacord')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

    message.channel.send("Carregando...").then(m => m.delete({ timeout: 5000 }))
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
    let image = await canvacord.Canvas.trigger(avatar);
    let attachment = new Discord.MessageAttachment(image, "triggered.gif");
    message.channel.send("Carregando...").then(m => m.delete({ timeout: 5000 })).then(msg => message.channel.send(attachment))
}