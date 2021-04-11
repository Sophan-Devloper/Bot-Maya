const Discord = require("discord.js")
const weather = require("weather-js")
const db = require('quick.db')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

  let city = args.join(" ")
  let degreetype = "C" // Mude para Fahrenheit F

  await weather.find({ search: city, degreeType: degreetype }, function (err, result) {

    if (!city) {
      let prefix = db.get(`prefix_${message.guild.id}`)
      if (prefix === null) { prefix = "-" }

      const nocity = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Siga o formato correto')
        .setDescription('`' + prefix + 'clima SP/RJ/MG ou o nome da Cidade/Estado`')
      return message.channel.send(nocity)
    }

    if (err || result === undefined || result.length === 0) {
      const noresult = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Parece que ocorreu um erro no meu sistema de busca')
        .setDescription('`Nenhuma cidade/estado foi encontrado`')
      return message.channel.send(noresult)
    }

    let current = result[0].current
    let location = result[0].location

    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setAuthor(current.observationpoint)
      .setDescription(`> ${current.skytext}`)
      .setThumbnail(current.imageUrl)
      .setTimestamp()

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

    return message.channel.send(embed)
  })
}