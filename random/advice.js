const Discord = require('discord.js')
const fetch = require('node-fetch')

exports.run = async (client, message, args) => {
    const data = await fetch("https://api.adviceslip.com/advice").then((res) => res.json())

    const embed = new Discord.MessageEmbed()
        .setDescription(data.slip.advice)
        .setColor("BLUE")

    message.inlineReply(embed)
}