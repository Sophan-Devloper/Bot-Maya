exports.run = async (client, message, args) => {

    const rody = message.author.id === ("451619591320371213")
    if (!rody) {
        message.delete()
        return message.channel.send('⚠️ Este comando é um comando restrito.')
    }
    return message.channel.send('Rebooting...').then(msg => msg.delete({ timeout: 6000 })).then(m => m.channel.send('Erros encontrado: 0')).then(m => m.delete({ timeout: 5000 }))
}