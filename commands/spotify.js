const Discord = require("discord.js")
const convert = require("parse-ms")

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
    let avatar = user.user.displayAvatarURL({ format: 'png' })
    var fotospot = 'https://imgur.com/vw6z7v4.png'
    if (message.mentions.users.first()) {
        user = message.mentions.users.first()
    } else {
        user = message.author
    }

    let status
    if (user.presence.activities.length === 1) status = user.presence.activities[0]
    else if (user.presence.activities.length > 1) status = user.presence.activities[1]

    if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING")
        return message.channel.send("Essa pessoa não está ouvindo nada no Spotify ou não vinculou o Spotify com o Discord.")

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
            .setFooter('Spotify e Discord fazendo seu dia melhor.', fotospot)
            message.inlineReply(`Também enviei no seu privado.`, embed)
        return message.author.send("Prontinho, vou deixar a música aqui :hearts:", embed).catch(err => { return })
    }
}