const Discord = require('discord.js')
const os = require('os')

module.exports = {
    name: "bot-info",
    category: "bot",
    run: async (client, message, args) => {
        message.delete()

        const embed = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('📃 Centralzinha de Informações 📃')
            .setColor('#DCDCDC')
            .setDescription('Meu nome é Maya. Eu fui criada para ser uma bot de diversão e admnistração. Porém tenho alguns recursos além disso. Sou capaz de substituir vááários bots. Minha missão é ser a bot mais completa de todas.')
            .addFields(
                {
                    name: 'Páginas da Centralzinha',
                    value: '📃 Essa página aqui\n⚙️ Informações Técnicas\n❤️ Colaboradores\n💬 Suporte\n❌ Apaga a Central de Informações'
                }
            )
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        const embed2 = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('⚙️ Centralzinha Tecnica ⚙️')
            .setColor("#DCDCDC")
            .addFields(
                {
                    name: 'Informações Técinas',
                    value: (`🌐 Servidores: ${client.guilds.cache.size}\n💬 Canais: ${client.channels.cache.size}\n🫂 Usuários: ${client.users.cache.size}\n⏳ Ping Atual: ${Math.round(client.ws.ping)}ms\n🕛 Criada em: 15/03/2021\n💡 Idealizada por: Rody#3756 \n:gear: Criada por: Rody#3756\n🖌️ Design: yma?#5175\n🖊️ Coop: Gowther#9233\n📡 Host: Replit.com\n🇩 Discord.js Version: 12.3.1\n🇯 Linguagem: 100% JavaScript\n💠 Maya Version: 2.1.1`)
                }
            )
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        const Thanks = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle(':hearts:Eu só digo OBRIGADA a todos que deram suas ideias!:hearts:')
            .setURL('https://forms.gle/vtJ5qBqFDd9rL5JU8')
            .addFields(
                {
                    name: ':gear: Developers',
                    value: '`Rody#3756` & `Gowther#9233`'
                },
                {
                    name: ':handshake: Colaboradores :handshake:',
                    value: "𝑅𝑈 𝑀𝑖𝑛𝑒?#2790 | `Comandos de Administração`\nLucas - Luquisquiss#4643 | `-frase`\nJoão da Cilada#7041 | `-love`\nGiacometti#4849 | `-feet`\nCALORIES#2822 | Music System Help"
                },
                {
                    name: ':star2:Especiais:star2:',
                    value: 'MakolPedro#8508 | +30 Bugs Reportados'
                },
            )
            .setImage('https://imgur.com/DNVIReM.gif')
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        const support = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setTitle('💬 Clique aqui para acessar a Central de Suporte 💬')
            .addFields(
                {
                    name: 'Discord Server',
                    value: 'https://discord.gg/mx8eMx6',
                    inline: true
                },
                {
                    name: 'Desenvolvedor',
                    value: 'Rody#3756',
                    inline: true
                }
            )
            .setURL('https://forms.gle/vtJ5qBqFDd9rL5JU8')
            .setImage('https://imgur.com/KyjyfRg.gif')
            .setFooter(message.author.username, message.author.displayAvatarURL())


        await message.channel.send(embed).then(msg => {
            msg.react('📃') // 1º Embed
            msg.react('⚙️') // 2º Embed
            msg.react('❤️') // Thanks
            msg.react('💬') // Support
            msg.react('❌') // Delete

            msg.awaitReactions((reaction, user) => {
                if (message.author.id !== user.id) return;

                if (reaction.emoji.name === '📃') { // 1º Embed - Principal
                    reaction.users.remove(user)
                    msg.edit(embed)
                }
                if (reaction.emoji.name === '⚙️') { // 2º Embed - Técnico
                    reaction.users.remove(user)
                    msg.edit(embed2)
                }
                if (reaction.emoji.name === '❤️') { // 4º Embed - Support
                    reaction.users.remove(user)
                    msg.edit(Thanks)
                }
                if (reaction.emoji.name === '💬') { // 3º Embed - Thanks
                    reaction.users.remove(user)
                    msg.edit(support)
                }
                if (reaction.emoji.name === '❌') { // Delete
                    msg.delete()
                }
            })
        })
    }
}
