const Discord = require('discord.js')
const DisTube = require('distube')
const ffm = require('ffmpeg-static')
const opus = require('@discordjs/opus')
const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true })

exports.run = async (client, queue, message, args) => {

    let queue = distube.getQueue(message)
    if (!queue) return message.channel.send('Não tem nada tocando no momento.')
    let filter = distube.setFilter(message, command)
    message.channel.send("Filtro Atual: " + (filter || "Off"))
}

const status = (queue) => `Volume: ${queue.volume}% | Filter: ${queue.filter || "Off"} | Loop: ${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"} | Autoplay: ${queue.autoplay ? "On" : "Off"}`
distube
    .on("playSong", (message, queue, song) => {
        var tocando = new Discord.MessageEmbed()
            .setColor('DCDCDC')
            .setAuthor(`Música tocando...`, 'https://imgur.com/GSQBpD8.gif')
            .setThumbnail('https://imgur.com/JvA3pki.gif')
            .setTitle(song.name)
            .setURL(song.url)
            .addFields(
                {
                    name: 'Status Atual',
                    value: status(queue)
                }
            )
            .setFooter(`${message.author.username} | Duração: ${song.formattedDuration}`, message.author.displayAvatarURL())
        message.channel.send(tocando)
    })
    // `Tocando \`${song.name}\` - \`${song.formattedDuration}\`\nPedido por: ${song.user}\n${status(queue)}`)
    .on("addSong", (message, queue, song) => {
        var addsongembed = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setAuthor(`${message.author.username} adicionou uma música a playlist`)
            .setTitle(song.name)
            .setURL(song.url)
            .setDescription(`Duração: ${song.formattedDuration}`)
            .setFooter('Use -playlist/-queue para acessar a playlist')
        message.channel.send(addsongembed)
    })

    .on("playList", (message, queue, playlist, song) => {
        var plembed = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setAuthor('Playlist atual', 'https://imgur.com/9jiSb1D.png')
            .setDescription(playlist.songs.length)
            .addFields(
                {
                    name: 'Tocando agora',
                    value: `${song.name}\nDuração: ${song.formattedDuration}`
                },
            )
            .setFooter(message.author.username, message.author.displayAvatarURL())
        message.channel.send(plembed)
        // message.channel.send(`Tocando \`${playlist.name}\` playlist (${playlist.songs.length} músicas).\nPedido por: ${song.user}\nTocando agora \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`)
    })
    .on("addList", (message, queue, playlist) => message.channel.send(`Adicionou \`${playlist.name}\` playlist (${playlist.songs.length} música/s) para a playlist \n${status(queue)}`))
    .on("searchResult", (message, result) => {
        let i = 0
        message.channel.send(`** ${message.author.username},  escolha uma das opções abaixo**\n \n${result.map(song => `**${++i}** - ${song.name} | \`${song.formattedDuration}\``).join("\n")}\n \n*Envie qualquer das opções dentro de 60 segundos.*`).then(msg => msg.delete({ timeout: 60000 }))
    })
    .on("searchCancel", (message) => message.channel.send(`A resposta não é um número da playlist, pesquisa cancelada.`).then(msg => msg.delete({ timeout: 5000 })))
    .on("error", (message, e) => {
        console.error(e)
        message.channel.send("**ASSIONE O SUPORTE!** `-bug`\n \nUm erro foi encontrado: " + e)
    })