const db = require("quick.db")
const discord = require("discord.js")

module.exports = {
  name: "status",
  description: "Change the bot status",
  usage: "status <here>",
  category: "owner",
  ownerOnly: true,
  run: async (client, message, args) => {
    
  
    //ARGUMENT
    if(!args.length) {
      return message.channel.send("Qual é a mensagem?")
    }
    
 db.set(`status`, args.join(" "))
 client.user.setActivity(args.join(" ")); 
 message.channel.send("Status foi atualizado.")
  }
}