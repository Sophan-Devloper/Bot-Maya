const Discord = require('discord.js')

module.exports = {
    name: "kick",
    description: "Kicks a member from the server",

    async run (client, message, args) {
        message.delete()
        
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let reason = args.slice(1).join(" ")
        let logchannel = message.guild.channels.cache.find(channel => channel.name === "log")
        
        if (!logchannel) return message.channel.send('Eu não achei nenhum canal com o nome `log` \n⠀\nCopie e cole isso para eu criar um pra você \n`-createchannel log`').then(msg => msg.delete({timeout: 10000}))
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Calminha, você não pode usar isso.').then(msg => msg.delete({timeout: 5000}))
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('A nãããão! Eu não tenho poder suficiente, ADMMMM, resolve isso! :cry:.').then(msg => msg.delete({timeout: 5000}))
        if(!args[0]) return message.channel.send('Hey, tenta desse jeito\n\n`-kick @user Razão` (Razão é opicional)').then(msg => msg.delete({timeout: 5000}))
        if(!member) return message.channel.send('Breeeh, eu não achei essa pessoa não...').then(msg => msg.delete({timeout: 5000}))
        if(member.id === message.author.id) return message.channel.send('Você tentou dar Kick em você mesmo? Recomendo um psicologo').then(msg => msg.delete({timeout: 5000}))
        if(member.id === '763072871597604874') return message.channel.send('Como assim você quer me kickar? :cry:').then(msg => msg.delete({timeout: 5000}))
        if(member.id === '451619591320371213') return message.channel.send('Eu jamais kickaria o meu criador! Que crueldade.').then(msg => msg.delete({timeout: 5000}))
        if(!member.kickable) return message.channel.send('Eu não tenho poder pra banir essa pessoa não, fiquei com medo :cry:').then(msg => msg.delete({timeout: 5000}))
        if(!reason) return message.channel.send('Me fala a razão do kick, só pra deixar o registro bonitinho').then(msg => msg.delete({timeout: 5000}))

        member.kick(reason)
        .catch(err => {
            if(err) return message.channel.send('Algo de errado aconteceu, cadê meu criador? Rody#3756').then(msg => msg.delete({timeout: 5000}))
        })

        const kickembed = new Discord.MessageEmbed()
        .setTitle('Sistema de Kick')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Usuário Kickado', member)
        .addField('Kickado por', message.author)
        .addField('Razão', reason)
        .setFooter('Horário:')
        .setTimestamp()

        message.channel.send(`O kick foi um sucesso! Estou enviando mais informações no canal ${logchannel}`).then(msg => msg.delete({timeout: 5000})).then(msg => logchannel.send(kickembed))
    }}