const db = require("quick.db")

module.exports = {
  name: "resetwarns",
  aliases: ["rwarns"],
  usage: "rwarns <@user>",
  description: "Reset warnings of mentioned person",

  run: async (client, message, args) => {
    message.delete()

    if(!message.member.hasPermission("ADMINISTRATOR")) 
      return message.channel.send("Esse comando é exclusivo para Administradores, você não deveria estar usando isso.").then(msg => msg.delete({timeout: 6000}))
    
    
    const user = message.mentions.members.first()
    if(!user) 
       return message.channel.send("Mencione a pessoa que você quer remover os Warns.").then(msg => msg.delete({timeout: 5000}))
        
    if(user.id === '451619591320371213')
       return message.channel.send('Você não pode resetar os Warns do meu criador').then(msg => msg.delete({timeout: 6000}))
  
    if(user.id === '763072871597604874')
       return message.channel.send('Eu não tenho nenhum warn, eu sou muito educada.').then(msg => msg.delete({timeout: 6000}))

    if(message.mentions.users.first().bot) 
       return message.channel.send("Bot não tem Warns para serem removidos.").then(msg => msg.delete({timeout: 5000}))
        
    if(message.author.id === user.id) 
       return message.channel.send("Você não pode resetar seus próprios Warns.").then(msg => msg.delete({timeout: 5000}))
 
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

    if(warnings === null) 
      return message.channel.send(`${message.mentions.users.first().username} não tem nenhum Warn.`).then(msg => msg.delete({timeout: 5000}))
    
    db.delete(`warnings_${message.guild.id}_${user.id}`)
    user.send(`${message.author.username} resetou seus Warns em: **${message.guild.name}**`)
    await message.channel.send(`Eu resetei todos os Warns de ${message.mentions.users.first().username}`)  
}}