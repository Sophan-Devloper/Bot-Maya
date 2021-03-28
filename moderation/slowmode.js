module.exports = {
  name: "slowmode",
  category: "utility",
  description: "Set the slowmode for the channel!",

  run: async (bot, message, args) => {
  message.delete()

  if(!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.channel.send('Calma, este comando é restrito pra Staff do Servidor.').then(msg => msg.delete({timeout: 5000}))

  if (!args[0])
    return message.channel.send('Você não me disse o tempo, tente assim -> `-slowmode 10`').then(msg => msg.delete({timeout: 6000}))
  
  if (isNaN(args[0])) 
    return message.channel.send(`Isso não é um número! -_-`).then(msg => msg.delete({timeout: 6000}))
   
    message.channel.setRateLimitPerUser(args[0]);
    message.channel.send(`Este canal foi colocado em Slowmode por *${args[0]}* Segundos.`)
  }}