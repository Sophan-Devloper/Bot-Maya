const Discord = require("discord.js")
const weather = require("weather-js")

exports.run = async (client, message, args) => {
  message.delete()

  let city = args.join(" ")
  let degreetype = "C"; // Mude para Fahrenheit F

  await weather.find({ search: city, degreeType: degreetype }, function (err, result) {

    if (!city)
      return message.channel.send("Ei, espera. Qual é a cidade?\nTenta assim `-clima NomeDaCidade` etc").then(msg => msg.delete({ timeout: 6000 })).catch(err => { return })

    if (err || result === undefined || result.length === 0)
      return message.channel.send("Eu não conheço essa cidade, acho que você escreveu errado.").then(msg => msg.delete({ timeout: 6000 })).catch(err => { return })

    let current = result[0].current
    let location = result[0].location

    const embed = new Discord.MessageEmbed()
      .setAuthor(current.observationpoint)
      .setDescription(`> ${current.skytext}`)
      .setThumbnail(current.imageUrl)
      .setTimestamp()
      .setColor(0x7289DA)
    embed.addField("Latitude", location.lat, true)
      .addField("Longitude", location.long, true)
      .addField("Temperatura Térmica", `${current.feelslike}° Graus`, true)
      .addField("Escala de Medição", location.degreetype, true)
      .addField("Vento", current.winddisplay, true)
      .addField("Humidade", `${current.humidity}%`, true)
      .addField("Fuzo", `GMT ${location.timezone}`, true)
      .addField("Temperatura", `${current.temperature}° Graus`, true)
      .addField("Observação TimeTemp", current.observationtime, true)
      .setFooter(message.author.tag, message.author.displayAvatarURL())

    return message.channel.send(embed).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
  })
}

exports.help = {
  name: "clima",
  description: "Responde ao clima correspondente a área de requisição.",
  usage: "clima <cidade/cep>",
  example: "clima São Paulo"
}

exports.conf = {
  aliases: [],
  cooldown: 7.5
}