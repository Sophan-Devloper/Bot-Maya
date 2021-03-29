const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async (client, message, args) => {
  message.delete()

  let prefix = db.get(`prefix_${message.guild.id}`)
  if (prefix === null) prefix = "-"

  let perms = message.member.hasPermission("MANAGE_NICKNAMES")
  if (!perms) {
    const noperms = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Permissão necessária: Manusear Nicknames (Nomes/Apelidos)')
    return message.channel.send(noperms).then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
  }

  let user = message.mentions.users.first()
  if (!user) {
    const format = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Siga o formato correto')
      .setDescription('`' + prefix + 'setnick @user NovoNome`')
    return message.channel.send(format).then(msg => msg.delete({ timeout: 8000 })).catch(err => { return })
  }

  let nick = args.slice(1).join(" ")
  if (!nick) {
    const format = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Siga o formato correto')
      .setDescription('`' + prefix + 'setnick @user NovoNome`')
    return message.channel.send(format).then(msg => msg.delete({ timeout: 8000 })).catch(err => { return })
  }

  let linksupport = 'https://forms.gle/vtJ5qBqFDd9rL5JU8'
  let member = message.guild.members.cache.get(user.id)
  member.setNickname(nick).catch(err => {

    if (err) {
      const erro = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Um erro foi encontrado')
        .setDescription('\n \n`' + err + '`')
        .addFields(
          {
            name: 'Missing Permissions',
            value: `Algum cargo de ${member} é maior que o meu.`,
            inline: true
          },
          {
            name: 'API Connect Problem Ask',
            value: 'Tente novamente, o servidor reconectou.',
            inline: true
          },
          {
            name: 'Algum outro erro?',
            value: `[Support Maya](${linksupport})`
          }
        )

      message.channel.send(erro)
    }
  })

  const sucess = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setDescription(`O nickname de ${user.tag} foi alterado para ${nick}`)
  return message.channel.send(sucess).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
}