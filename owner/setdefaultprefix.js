exports.run = async (client, message, args) => {

    const rody = message.author.id === ("451619591320371213")
    if (!rody)
        return message.channel.send('⚠️ Este comando é um comando restrito.')
}