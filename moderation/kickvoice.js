module.exports.run = (client, message, args) => {

    if (!message.guild.me.hasPermission('MOVE_MEMBERS'))
        return message.reply('Eu não tenho permissão para mover membros em chamada.').then(msg => msg.delete({ timeout: 5000 }))

    const member = message.mentions.members.first()

    if (!member)
        return message.channel.send('Tenta assim\n \n`-kickvoice @user`').then(msg => msg.delete({ timeout: 5000 }))

    if (!member.voice.channel)
        return message.channel.send(`Eu acho que ${member.user.username} não está em nenhuma chamada no momento.`).then(msg => msg.delete({ timeout: 5000 }))

    if (member.hasPermission(['MOVE_MEMBERS', 'ADMINISTRATOR', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANEGE_ROLES']))
        return message.channel.send(`${member.user.username} é mais forte que eu :cry:`).then(msg => msg.delete({ timeout: 5000 }))

    member.voice.kick()
    message.react('✅')
}