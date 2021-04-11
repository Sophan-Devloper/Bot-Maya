const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        const adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso da permissão "Manusear Mensagens" para utilizar esta função.')
        return message.channel.send(adm)
    }

    if (!args[0]) {
        const dados = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Quantos dados você quer?')
            .setDescription('🟧 - 1\n🟦 - 2\n🟥 - 3\n🟫 - 4\n❌ - Cancelar')
        await message.channel.send(newprefix).then(msg => {
            msg.react('🟧') // 1
            msg.react('🟦') // 2
            msg.react('🟥') // 3
            msg.react('🟫') // 4
            msg.react('❌') // cancel

            msg.awaitReactions((reaction, user) => {
                if (message.author.id !== user.id) return

                if (reaction.emoji.name === '🟧') { // 1
                    msg.delete()
                    var numb = ['1', '2', '3', '4', '5', '6']
                    var rand = numb[Math.floor(Math.random() * numb.length)]

                    const embed = new Discord.MessageEmbed()
                        .setColor('BLUE')
                        .setTitle('🎲 Rolando os dados...')

                    const dados = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setTitle('🎲 `' + rand + '`')
                    return message.channel.send(embed).then(msg => msg.delete({ timeout: 2500 })).then(msg => message.channel.send(dados))
                }
                if (reaction.emoji.name === '🟦') { // 2
                    msg.delete()
                    var numb = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
                    var rand = numb[Math.floor(Math.random() * numb.length)]

                    const embed = new Discord.MessageEmbed()
                        .setColor('BLUE')
                        .setTitle('🎲 Rolando os dados...')

                    const dados = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setTitle('🎲 `' + rand + '`')
                    return message.channel.send(embed).then(msg => msg.delete({ timeout: 2500 })).then(msg => message.channel.send(dados))
                }
                if (reaction.emoji.name === '🟥') { // 3
                    msg.delete()
                    var numb = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']
                    var rand = numb[Math.floor(Math.random() * numb.length)]

                    const embed = new Discord.MessageEmbed()
                        .setColor('BLUE')
                        .setTitle('🎲 Rolando os dados...')

                    const dados = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setTitle('🎲 `' + rand + '`')
                    return message.channel.send(embed).then(msg => msg.delete({ timeout: 2500 })).then(msg => message.channel.send(dados))
                }
                if (reaction.emoji.name === '🟫') { // 4
                    msg.delete()
                    var numb = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
                    var rand = numb[Math.floor(Math.random() * numb.length)]

                    const embed = new Discord.MessageEmbed()
                        .setColor('BLUE')
                        .setTitle('🎲 Rolando os dados...')

                    const dados = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setTitle('🎲 `' + rand + '`')
                    return message.channel.send(embed).then(msg => msg.delete({ timeout: 2500 })).then(msg => message.channel.send(dados))
                }
                if (reaction.emoji.name === '❌') { // Não
                    msg.delete()
                    return msg.channel.send("Comando cancelado.")
                }
            })
        })
    }

    if (args[0] === '1') {
        var numb = ['1', '2', '3', '4', '5', '6']
        var rand = numb[Math.floor(Math.random() * numb.length)]

        const embed = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('🎲 Rolando os dados...')

        const dados = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('🎲 `' + rand + '`')
        return message.channel.send(embed).then(msg => msg.delete({ timeout: 2500 })).then(msg => message.channel.send(dados))
    }

    if (args[0] === '2') {
        var numb = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        var rand = numb[Math.floor(Math.random() * numb.length)]

        const embed = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('🎲 Rolando os dados...')

        const dados = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('🎲 `' + rand + '`')
        return message.channel.send(embed).then(msg => msg.delete({ timeout: 2500 })).then(msg => message.channel.send(dados))
    }

    if (args[0] === '3') {
        var numb = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']
        var rand = numb[Math.floor(Math.random() * numb.length)]

        const embed = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('🎲 Rolando os dados...')

        const dados = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('🎲 `' + rand + '`')
        return message.channel.send(embed).then(msg => msg.delete({ timeout: 2500 })).then(msg => message.channel.send(dados))
    }

    if (args[0] === '4') {
        var numb = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
        var rand = numb[Math.floor(Math.random() * numb.length)]

        const embed = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('🎲 Rolando os dados...')

        const dados = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('🎲 `' + rand + '`')
        return message.channel.send(embed).then(msg => msg.delete({ timeout: 2500 })).then(msg => message.channel.send(dados))
    }
}