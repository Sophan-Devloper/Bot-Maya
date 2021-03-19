const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  message.delete()
  
  if (!message.member.hasPermission(["MANAGE_ROLES"])) 
    return message.channel.send("Espera um pouco, você não pode usar esse comando!").then(msg => msg.delete({timeout: 5000}))
    
  let user = message.mentions.users.first()
  if (!user)
    return message.channel.send("Você esqueceu de marcar a pessoa, tenta assim:\n\n`-setnick @user Novo Nome`").then(msg => msg.delete({timeout: 8000}))
    
  let nick = args.slice(1).join(" ")
  if (!nick) 
      return message.channel.send("Você precisa me dizer qual é o novo nome.").then(msg => msg.delete({timeout: 5000}))
  
  let member = message.guild.members.cache.get(user.id)
  
  await member.setNickname(nick).catch(err => message.channel.send(`Houve algum erro. Eu acho que pode ser falta de permissão ou o cargo da pessoal que foi solicitado é maior que o meu.\n \nInformações do Erro:\n${err}`))

  return message.channel.send(`O nome foi alterado de **${user.tag}** para **${nick}** com sucesso!`).then(msg => msg.delete({timeout: 5000}))
  
}

exports.help = {
  name: "setnickname",
  description: "Set a user nickname.",
  usage: "/setnickname <@user> <nick>",
  example: "/setnickname @ray#9999 hoisted"
}

exports.conf = {
  aliases: ["setnick"],
  cooldown: 5
}