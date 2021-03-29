const Discord = require('discord.js');

module.exports = {
    name: "unban",
    category: "moderation",

    run: async (client, message, args) => {
        message.delete()

        let logchannel = message.guild.channels.cache.find(ch=>ch.name==="log")
        if (!logchannel)
          return message.channel.send('Eu não achei nenhum canal com o nome `log` \n⠀\nCopie e cole isso para eu criar um pra você \n`-createchannel log`').then(msg => msg.delete({timeout: 8000})).catch(err => { return })

        let perms = message.member.hasPermission("BAN_MEMBERS")
        if(!perms) 
          return message.channel.send('Calminha aí, você não pode usar este comando!').then(msg => msg.delete({timeout: 6000})).catch(err => { return })

        let member = args[0];
        if (!member) 
          return message.channel.send('Por favor, me diga o ID do usúario que você quer desbanir. \n`Configurações do Servidor - Banimentos - Copie o ID do usúario`').then(msg => msg.delete({timeout: 8000})).catch(err => { return })
       
         const UnbanEmbed = new Discord.MessageEmbed()
         .setTitle(`Sistema de Banimento - ${message.guild.name}`)
         .setColor('#FF1493')
         .addFields(
         {
             name: 'ID do Usuário Desbanido',
             value: member
         },
         {
             name: 'Moderador',
             value: message.author.username
         },                    
         )
         .setImage('https://imgur.com/IDFStVu.gif')
         .setTimestamp()
         
        try {
            message.guild.fetchBans().then(bans => {message.guild.members.unban(member)})
            await logchannel.send(UnbanEmbed)
        } catch (e) {
            return message.channel.send(`Ocorreu algum erro, por favor, cheque todas as informações que você me passou!`)
        }}}