exports.run = async (client, message, args) => {
    message.delete()
    return message.channel.send('gay').then(msg => msg.delete({ timeout: 400 })).catch(err => { return })
}