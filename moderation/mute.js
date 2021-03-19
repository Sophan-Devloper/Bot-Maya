const Discord = require("discord.js")
const ms = require("ms")

module.exports.run = async (bot, message, args) => {
 message.delete()

 let perms = message.member.hasPermission("MANAGE_ROLES")
 if(!perms) 
    return message.channel.send("Você não tem permissão suficiente pra esse comando, que tal chamar um Mod ou Adm?").then(msg => msg.delete({timeout: 3000}))

 let logchannel = message.guild.channels.cache.find(ch=>ch.name==="log")
 if (!logchannel)
    return message.channel.send('Eu não achei nenhum canal com o nome `log` \n⠀\nCopie e cole isso para eu criar um pra você \n`-createchannel log`').then(msg => msg.delete({timeout: 8000}))

 let muterole = message.guild.roles.cache.find(ch => ch.name === "Muted")
 if(!muterole) 
    return message.channel.send("Hey, cria um cargo com o nome `Muted`").then(msg => msg.delete({timeout: 10000}))
 
 const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
 if(!member) 
    return message.channel.send("Tenta assim `-mute @user 10s/m/h razão`").then(msg => msg.delete({timeout: 10000}))

 const Raphy = member.id === '763072871597604874'
 if(Raphy)
    return message.channel.send("Eu não vou mutar eu mesma, sorry :/")

 if(!member.bannable) 
    return message.channel.send('Essa pessoa tem mais poder do que eu... Me sinto fraca :cry:').then(msg => msg.delete({timeout: 5000}))

 if(member.id === message.author.id) 
    return message.channel.send('Queeee??? Você tentou mutar você mesmo? Não faça isso!').then(msg => msg.delete({timeout: 5000}))

 if(member.id === message.guild.owner.id) 
    return message.channel.send('Queeee??? Você quer mutar o dono do servidor? O-O').then(msg => msg.delete({timeout: 5000}))

 if(member.roles.cache.has(muterole))
    return message.channel.send("Este usuário já está banido.").then(msg => msg.delete({timeout: 5000}))

 let time = args[1]
 if(!time) 
 return message.channel.send('Você não me disse quanto tempo é o mute.').then(msg => msg.delete({timeout: 3000}))

 let reason = args.slice(2).join(" ")
 if(!reason) 
 return message.channel.send('Me fala a razão do mute, rapidinho.').then(msg => msg.delete({timeout: 3000}))

 let avatar = member.user.displayAvatarURL({format: 'png'})

 const muteembed = new Discord.MessageEmbed()
        .setTitle("USUÁRIO MUTADO")
        .setAuthor(member.user.tag, avatar)
        .setColor('#8B0000')
        .addFields(
            {
                name: 'Usuário',
                value: member.user.tag
            },
            {
                name: 'Moderador',
                value: message.author,
                inline: true
            },
            {
                name: 'Tempo',
                value: time,
                inline: true
            },
            {
                name: 'Motivo',
                value: reason
            },
          )
          .setThumbnail(member.user.displayAvatarURL({dynamic : true}))
          .setTimestamp()
        
 const unmuteembed = new Discord.MessageEmbed()
        .setTitle("USUÁRIO DESMUTADO")
        .setAuthor(member.user.tag, avatar)
        .setColor('#8B0000')
        .addFields(
            {
                name: 'Usuário',
                value: member.user.tag,
                inline: true
            },
            {
                name: 'Ficou mutado por',
                value: time,
                inline: true
            },
        )
        .setThumbnail(member.user.displayAvatarURL({dynamic : true}))
        .setTimestamp()
        
        member.roles.add(muterole) // Ação Mute
        member.send(`Você foi mutado no servidor ${member.guild.name}. Veja mais informações do mute no ${logchannel}`).then(msg => message.channel.send(`O Mute foi um sucesso! Estou enviando mais informações no ${logchannel}`)).then(msg => msg.delete({timeout: 5000})).then(msg => logchannel.send(muteembed))

        setTimeout(function() {
        member.roles.remove(muterole) //Ação Desmute
        logchannel.send(unmuteembed).then(msg => member.send(`Você acaba de sair do Mute no ${member.guild.name}`))
        }, ms(time))

        module.exports.help = {
            name: "tempmute",
            aliases: ["tempmute"],
            description: "temp mute someone",
            usage: "tempmute user time reason",
            category: "moderator your server"
        }         
}