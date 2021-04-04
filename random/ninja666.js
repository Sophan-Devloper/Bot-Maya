exports.run = async (client, message, args) => {
    message.delete()

    if (message.guild.id !== "753988242570739772")
        return message.channel.send('Você não está no Akatisouka! `-akat` `-akatsuki`').then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })

    var list = [
        'Me disseram que ele é bem forte',
        'O da :cloud:Akatsouka? Ele me um medinho...',
        'Um dia ele quase me assaltou, você acredita?',
        'Vou quebrar ele na porrada um dia'
    ]

    var rand = list[Math.floor(Math.random() * list.length)]
    let user = client.users.cache.get(args[0])

    await message.channel.send(rand)
}