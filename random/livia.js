exports.run = async (client, message, args) => {
     
    return message.channel.send('gay').then(msg => msg.delete({ timeout: 400 })).catch(err => { return })
}