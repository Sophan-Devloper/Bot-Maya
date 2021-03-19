const Discord = require('discord.js')

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

if (["help", "ajuda"].includes(command)) {
    message.delete()

    var gif = 'https://imgur.com/BJUej6y.gif'

    const embed1 = new Discord.MessageEmbed()
        .setColor('#6A5ACD')
        .setTitle(':gear: Centralzinha de Comandos :gear:')
        .setThumbnail(gif)
        .addFields(
            {
                name: 'Comandos Gerais',
                value: '`-play` Peça uma música\n`-pause` Pause, né?\n`-resume` Despausa a música\n`-skip` Pule de música\n`-autoplay` Desative ou ative o autoplay\n`-invite` Me convide pro seu servidor\n`-queue` Veja a playlist\n`-volume 0~100` Escolha o volume do bot\n`-stop` Pare tudo\n`-disconnect/-dc` Me tira da call.\n*Mais comandos estão sendo adicionados.*'
            },
            {
                name: 'Filter Mode',
                value: '`-3d`\n`-bassboost`\n`-echo`\n`-karaoke`\n`-nigtcore`\n`-vaporwave`\n`-flanger`\n`-gate`\n`-haas`\n`-reverse`\n`-mcompand`\n`-phaser`\n`-tremolo`\n`-surround`\n`-earwax`'
            }
        )
        .setFooter(message.author.username, message.author.displayAvatarURL())

    const embed2 = new Discord.MessageEmbed()
        .setColor('#6A5ACD')
        .setTitle('🌀 Filter Mode 🌀')
        .setThumbnail(gif)
        .setDescription('Adicione efeitos a música')
        .addFields(
            {
                name: 'Filtros',
                value: 's'
            },
        )
        .setFooter(`Para desativar, use o mesmo efeito colocado.\n${message.author.tag}`, message.author.displayAvatarURL())

    message.channel.send(embed1).then(msg => {
        msg.react('⚙️') // Principal Page
        msg.react('🌀') // Filter System
        msg.react('❌') // Delete Painel

        msg.awaitReactions((reaction, user) => {
            if (message.author.id !== user.id) return

            if (reaction.emoji.name === '⚙️') { // Principal Page
                reaction.users.remove(user)
                msg.edit(embed1).then(msg => message.delete({ timeout: 30000 }))
            }
            if (reaction.emoji.name === '🌀') { // Filter System
                reaction.users.remove(user)
                msg.edit(embed2).then(msg => message.delete({ timeout: 30000 }))
            }
            if (reaction.emoji.name === '❌') { // Delete Painel
                msg.delete()
            }
        })
    })
}
}} // Module Export and Async run