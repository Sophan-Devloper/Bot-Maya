exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have the required permission to use this command.').then(m => {
        setTimeout(() => {
            m.delete()
        }, 3000);
    })
    if (!args[0]) return message.reply('You forgot a prefix!')
    client.settings.set(message.guild.id, args.join(" "), "prefix")
    message.reply('Prefix has been changed to `' + args.join(" ") + '`')
}

exports.help = {
    name:"prefix",
    usage:"!prefix <prefix>"
}