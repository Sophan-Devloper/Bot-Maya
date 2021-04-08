const Discord = require("discord.js")

module.exports = {
  name: "love",
  category: "fun",
  description: "Calculates the love affinity you have for another person.",
  usage: "[mention | id | username]",
  run: async (client, message, args) => {
     

    let user = message.mentions.members.first()
    if (!user || message.author.id === user.id)
      return message.channel.send("Você não pode fazer um Ship com você mesmo. Tenta assim `-ship @user`").then(msg => msg.delete({ timeout: 6000 }))

    if (user.id === '763072871597604874')
      return message.channel.send("Foi maaal, eu não tenho a capacidade de amar ninguém, sorry.").then(msg => msg.delete({ timeout: 6000 }))

    const love = Math.random() * 100
    const loveIndex = Math.floor(love / 10)
    const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex)
    const avatar = message.author.displayAvatarURL({ format: 'png' })

    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, avatar)
      .setColor("RED")
      .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
      .addField(`${user.user.username} ama você em:`, `💟 ${Math.floor(love)}% \n${loveLevel}`)

    return message.channel.send(embed)
  }
}