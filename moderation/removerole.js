const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
message.delete()

let perms = message.member.hasPermission("MANAGE_ROLES")
if(!perms) return message.channel.send("Você não tem permissão suficiente pra este comando, que tal chamar um Mod ou Adm?").then(msg => msg.delete({timeout: 4000}))

let user = message.mentions.members.first()
if(!user) return message.channel.send("Tenta assim -> `-removerole @user @cargo`").then(msg => msg.delete({timeout: 5000}))

let role = message.mentions.roles.first()
if(!role) return message.channel.send("Tenta assim -> `-removerole @user @cargo`").then(msg => msg.delete({timeout: 5000}))

let avatar = user.user.displayAvatarURL({format: 'png'})

user.roles.remove(role)
message.channel.send(`O Cargo ${role} foi removido de ${user} com sucesso!`).then(msg => msg.delete({timeout: 6000}))
}

module.exports.help = {
    name: "removerole",
    aliases: ['rmrole'],
    description: "Remove roles to someone",
    usage: "removerole user role",
    category: "settings, administration"
}