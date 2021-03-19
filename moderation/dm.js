module.exports = {  
  name: "privado",
  description: "Mande uma mensagem privada para alguém",
  category: "fun",
  run: async (bot, message, args) => {
    message.delete()

    if (!message.member.permissions.has("MANAGE_MESSAGES"))
       return message.channel.send("Pare! Você não pode me usar para isso, sorry.").then(msg => msg.delete({timeout: 5000}))

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!user)
       return message.channel.send('Você não marcou ninguém, para quem eu devo enviar a mensagem? `-dm @user Mensagem`').then(msg => msg.delete({timeout: 5000}));

    let Raphy = user.id === '763072871597604874'
    if (Raphy)
       return message.channel.send('Não mande mensagens para mim mesma kkkkk').then(msg => msg.delete({timeout: 5000}))

    if (!args.slice(1).join(" "))
       return message.channel.send("Você não me disse qual é a mensagem.").then(msg => msg.delete({timeout: 5000}))
   
     user.user.send(args.slice(1).join(" ")).catch(() => message.channel.send("Essa pessoa não pode receber Dm")).then(() => message.author.send(`Eu mandei a mensagem para ${user.user.tag} com sucesso!`))
  }}    