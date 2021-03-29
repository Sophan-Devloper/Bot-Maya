module.exports = {
  name: "slowmode",
  category: "utility",
  description: "Set the slowmode for the channel!",

  run: async (bot, message, args) => {
    message.delete()

    let permss = message.member.hasPermission("MANAGE_CHANNELS")
    if (!permss) {
      const noperm = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Permissão Necessária: Manusear Canais')

      return message.channel.send(noperm).then(msg => msg.delete({ timeout: 7000 })).catch(err => { return })
    }

    if (!args[0])
      return message.channel.send('Você não me disse o tempo, tente assim -> `-slowmode 10`').then(msg => msg.delete({ timeout: 6000 }))

    if (isNaN(args[0]))
      return message.channel.send(`Isso não é um número! -_-`).then(msg => msg.delete({ timeout: 6000 }))

    message.channel.setRateLimitPerUser(args[0]);
    message.channel.send(`Este canal foi colocado em Slowmode por *${args[0]}* Segundos.`)
  }
}