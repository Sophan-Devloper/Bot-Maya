exports.run = async (client, message, args) => {
  message.delete()

  return message.channel.send('Tem 2 jogos no meu banco de dados com o apelido "Brawl", qual você quer?\n`-BrawlStars`\n`-Brawlhalla`').then(msg => msg.delete({ timeout: 8000 })).catch(err => { return })
}