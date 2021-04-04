exports.run = async (client, message, args) => {
    message.delete()

    if (message.guild.id !== "753988242570739772")
        return message.channel.send('Você não está no Akatisouka! `-akat` `-akatsuki`').then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })

    var list = [
        'Ele é fofinho comigo, eu gosto dele',
        'Ele já me pagou um sorvete'
    ]

    var rand = list[Math.floor(Math.random() * list.length)]
    let user = client.users.cache.get(args[0])


    await message.channel.send(rand)
}