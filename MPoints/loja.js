exports.run = async (client, message, args) => {
    message.delete()
    return message.channel.send('A loja está em construção...').then(msg => msg.delete({ timeout: 6000 })).catch(err => { return })
}
