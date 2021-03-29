const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    message.delete()

    if (!args[0])
        return message.channel.send("Opções: `pedra`, `papel` ou `tesoura`").then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })

    const Options = ["pedra", "papel", "tesoura"]
    if (!Options.includes(args[0]))
        return message.channel.send(":x: Opção Incorreta!").then(m => m.delete({ timeout: 5000 })).catch(err => { return })

    if (args[0] === "pedra") {

        const lose = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setTitle('Eu Perdiiii')
            .setImage('https://imgur.com/dUdSqbn.gif')

        const win = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setTitle('Eu Ganheeei')
            .setImage('https://imgur.com/oIuGoh9.gif')

        const draw = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setTitle('Eu Ganheeei')
            .setImage('https://imgur.com/zhArmyd.gif')

        const random1 = [win, lose, draw]
        message.channel.send(random1[Math.floor(Math.random() * random1.length)]).then(m => m.delete({ timeout: 5000 })).catch(err => { return })

    } else if (args[0] === "papel") {
        const lose1 = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setTitle('Eu Perdiiii')
            .setImage('https://imgur.com/dUdSqbn.gif')

        const win1 = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setTitle('Eu Ganheeei')
            .setImage('https://imgur.com/oIuGoh9.gif')

        const draw1 = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setTitle('Eu Ganheeei')
            .setImage('https://imgur.com/zhArmyd.gif')

        let random2 = [lose1, win1, draw1]
        message.channel.send(random2[Math.floor(Math.random() * random2.length)]).then(m => m.delete({ timeout: 5000 })).catch(err => { return })

    } else if (args[0] === "tesoura") {
        const lose2 = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setTitle('Eu Perdiiii')
            .setImage('https://imgur.com/dUdSqbn.gif')

        const win2 = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setTitle('Eu Ganheeei')
            .setImage('https://imgur.com/oIuGoh9.gif')

        const draw2 = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setTitle('Eu Ganheeei')
            .setImage('https://imgur.com/zhArmyd.gif')

        let random3 = [lose2, win2, draw2]
        message.channel.send(random3[Math.floor(Math.random() * random3.length)]).then(m => m.delete({ timeout: 5000 })).catch(err => { return })
    }
}