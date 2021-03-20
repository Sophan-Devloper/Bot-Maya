const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete()

    let perms = message.member.hasPermission("MANAGE_ROLES")
    if (!perms) return message.channel.send("Você não tem permissão suficiente pra esse comando, que tal chamar um Mod ou Adm?").then(msg => msg.delete({ timeout: 3000 }))

    let user = message.mentions.members.first()
    if (!user) return message.channel.send("Tenta assim -> `-removerole @user @cargo`").then(msg => msg.delete({ timeout: 3000 }))

    let role = message.mentions.roles.first()
    if (!role) return message.channel.send("Qual é o cargo? Você não me disse.").then(msg => msg.delete({ timeout: 3000 }))

    if (!user.roles.cache.has(role.id)) {
        return message.channel.send(`${user.user.username} não possui esse cargo.`).then(msg => msg.delete({ timeout: 3000 }))
    }

    let avatar = user.user.displayAvatarURL({ format: 'png' })

    user.roles.remove(role)
    message.channel.send(`${user.user.username} teve o cargo ${role} removido com sucesso!`).then(msg => msg.delete({ timeout: 6000 }))
}