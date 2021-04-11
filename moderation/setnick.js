const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Manusear Nicknames (Nomes/Apelidos)" para utilizar esta função.')
    return message.channel.send(adm)
  }

  let prefix = db.get(`prefix_${message.guild.id}`)
  if (prefix === null) prefix = "-"

  if (!message.member.hasPermission("MANAGE_NICKNAMES")) {
    const noperms = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Permissão necessária: Manusear Nicknames (Nomes/Apelidos)')
    return message.channel.send(noperms)
  }

  let user = message.mentions.users.first()
  if (!user) {
    const format = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Siga o formato correto')
      .setDescription('`' + prefix + 'setnick @user NovoNome`')
    return message.channel.send(format)
  }

  let nick = args.slice(1).join(" ")
  if (!nick) {
    const format = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Siga o formato correto')
      .setDescription('`' + prefix + 'setnick @user NovoNome`')
    return message.channel.send(format)
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
            name: 'Unknow Member',
            value: `O usuário saiu do servidor.`,
            inline: true
          },
          {
            name: 'API Connect Problem Asking',
            value: 'Tente novamente, o servidor reconectou.',
            inline: true
          },
          {
            name: 'Algum outro erro?',
            value: `[Support Maya](${linksupport})`
          }
        )

      return message.channel.send(erro)
    }
  })

  const sucess = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setDescription(`O nickname de ${user.tag} foi alterado para ${nick}`)
  return message.channel.send(sucess)
}