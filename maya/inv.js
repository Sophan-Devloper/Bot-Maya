const Discord = require('discord.js')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }
    
    var embed = new Discord.MessageEmbed()
        .setColor('#D8901B')
        .setDescription('❤️ [Me adicione com permissões de Administrador](https://discord.com/api/oauth2/authorize?client_id=821471191578574888&permissions=8&scope=bot)\n \n❤️ [Me adicione com permissões customizadas](https://discord.com/api/oauth2/authorize?client_id=821471191578574888&permissions=4294831607&scope=bot)')
    return message.channel.send(`${message.author}, obrigada por querer me adicionar no seu servidor.`, embed)
}