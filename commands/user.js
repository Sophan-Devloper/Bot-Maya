const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || message.author

  var embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${user.username}`)
    .setDescription('📇`' + user.tag + '`')
  return message.inlineReply(embed)
}