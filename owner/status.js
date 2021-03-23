const db = require("quick.db")
const discord = require("discord.js")

module.exports = {
  name: "status",
  description: "Change the bot status",
  usage: "status <here>",
  category: "owner",
  ownerOnly: true,
  run: async (client, message, args) => {

    if (!message.author.id === "451619591320371213")
      return message.channel.send('⚠️ Este comando é importe, deixe que apenas meu criador use ele, tá bom?')

    if (!args.length) {
      return message.channel.send("Qual é a mensagem?")
    }

    db.set(`status`, args.join(" "))
    client.user.setActivity(args.join(" "));
    message.channel.send("Status foi atualizado.")
  }
}