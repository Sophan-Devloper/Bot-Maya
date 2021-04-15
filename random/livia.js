exports.run = async (client, message, args) => {
    return message.inlineReply('gay').then(msg => msg.delete({ timeout: 400 })).catch(err => { return })
}