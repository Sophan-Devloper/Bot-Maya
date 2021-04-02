const db = require('quick.db')
const Discord = require('discord.js')

module.exports = {
  name: "bal",
  description: "bleh",

  async run(client, message, args) {
    message.delete()

    let user = message.mentions.members.first() || message.member

    if (!args[0] === user) user === message.author

    let bal = await db.get(`money_${user.id}`)
    if (bal === null) bal = 0

    let bank = db.get(`bank_${user.id}`)
    if (bank === null) bank = 0

    const embed = new Discord.MessageEmbed()
      .setColor('#efff00')
      .setAuthor(`Informações Bancárias de ${user.user.tag}`, user.user.displayAvatarURL())
      .setDescription(`Tome cuidado com seu dinheiro, atualizações estão vindo rapidamente\n \n💸 Carteira: <:StarPoint:766794021128765469>**${bal}**\n🏦 Banco: <:StarPoint:766794021128765469>**${bank}**`)
    message.channel.send(embed).then(msg => msg.delete({ timeout: 10000 }))
  }
}