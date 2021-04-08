const Discord = require("discord.js")
const convert = require("parse-ms")

exports.run = async (client, message, args) => {

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
    let avatar = user.user.displayAvatarURL({ format: 'png' })

    if (message.mentions.users.first()) { user = message.mentions.users.first() } else { user = message.author }

    let status
    if (user.presence.activities.length === 1) {
        status = user.presence.activities[0]
    } else if (user.presence.activities.length > 1) { status = user.presence.activities[1] }

    if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") {
        const nopre = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Nenhum sinal do Spotify detectado.')
            .setDescription(`Tenha certeza de que ${user} vinculou o Spotify no Discord ou está ouvindo música.`)
        return message.channel.send(nopre)
    }

    if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
        let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`
        url = `https:/open.spotify.com/track/${status.syncID}`,
            name = status.details,
            artist = status.state,
            album = status.assets.largeText,
            timeStart = status.timestamps.start,
            timeEnd = status.timestamps.end,
            timeConvert = convert(timeEnd - timeStart);

        let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes
        let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds
        let time = `${minutes}:${seconds}`

        const embed = new Discord.MessageEmbed()
            .setAuthor(`${user.username} | Spotify`, (avatar))
            .setColor(0x1ED768)
            .setThumbnail(image)
            .addField("Nome", name, true)
            .addField("Duração", time, true)
            .addField("Artista", artist, false)
            .addField("Album", album, true)
            .addField("Resumo", `[\`${artist} - ${name}\`](${url})`, false)
        message.channel.send(`${message.author}, te mandei no privado também.`, embed)
        message.author.send("Prontinho, vou deixar a música aqui :hearts:", embed)
    }
}