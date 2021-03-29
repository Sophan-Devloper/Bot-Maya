const Discord = require("discord.js")

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

  let member = message.guild.members.cache.get(user.id)
  member.setNickname(nick).catch(err => {
    const erro = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Um erro foi encontrado')
      .setDescription('\n \n`' + err + '`')
      .addFields(
        {
          name: 'Missing Permissions',
          value: 'O cargo requisitado é maior que o da Maya.',
          inline: true
        },
        {
          name: 'API Connect Problem Ask',
          value: 'Tente novamente, o servidor reconectou.',
          inline: true
        },
        {
          name: 'Outro tipo de erro?',
          value: `[Support Maya](${linksupport})`
        }
      )

    message.channel.send(erro)
  })

  const sucess = new Discord.MessageEmbed()
  .setColor(#)

  return message.channel.send(`O nome foi alterado de **${user.tag}** para **${nick}** com sucesso!`).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })

}

exports.help = {
  name: "setnickname",
  description: "Set a user nickname.",
  usage: "/setnickname <@user> <nick>",
  example: "/setnickname @ray#9999 hoisted"
}

exports.conf = {
  aliases: ["setnick"],
  cooldown: 5
}