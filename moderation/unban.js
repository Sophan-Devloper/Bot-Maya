const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Banir Membros" para utilizar esta função.')
    return message.inlineReply(adm)
  }

  if (!message.member.hasPermission('BAN_MEMBERS')) {
    const permss = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Permissão Necessária: Banir Membros')
    return message.inlineReply(permss)
  }

  let logchannel = db.get(`logchannel_${message.guild.id}`)
  if (logchannel === null) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const nochannel = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('O logchannel não foi definido.')
      .setDescription('`' + prefix + 'setlogchannel #CanalLog`')
    return message.inlineReply(nochannel)
  }

  if (!db.get(`logchannel_${message.guild.id}`)) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const nochannel = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('O logchannel não foi definido.')
      .setDescription('`' + prefix + 'setlogchannel #CanalLog`')
    return message.inlineReply(nochannel)
  }

  let member = args[0]
  if (!member) {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const nomember = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Siga o formato correto')
      .setDescription('`' + prefix + 'unban IdDoUsuário`' + '\n \nNão tem o ID do usuário? \n`Configurações do Servidor - Banimentos - Copie o ID do usuário`')
    return message.inlineReply(nomember)
  }

  if (args[0].length <= 17) {
    const noid = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Por favor, informe o ID de um usuário')
      .setDescription('Não tem o ID do usuário? \n`Configurações do Servidor - Banimentos - Copie o ID do usuário`')
    return message.inlineReply(noid)
  }

  const UnbanEmbed = new Discord.MessageEmbed()
    .setTitle(`Usuário Desbanido`)
    .setColor('GREEN')
    .addFields(
      {
        name: 'ID Usuário',
        value: member,
        inline: true
      },
      {
        name: 'Moderador',
        value: message.author.username,
        inline: true
      }
    )
    .setTimestamp()

  if (args[0].length > 17) {
    message.guild.fetchBans().then(bans => {
      message.guild.members.unban(member).catch(err => {
        if (err) {
          var linksupport = 'https://forms.gle/vtJ5qBqFDd9rL5JU8'
          var discordserver = 'https://discord.gg/YpFWgJuuUV'
          const errorembed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Ocorreu um erro no desbanimento')
            .setDescription(err)
            .addField('Erros Comuns', '`Unknown Ban` A pessoa não está banida.\n`Invalid Form Body` O ID informado, não é um ID')
            .addFields(
              {
                name: 'Caso não saiba resolver, fale conosco',
                value: `[Support Maya](${linksupport}) | [Discord Server](${discordserver})\nMeu criador: Rody#4191`
              }
            )
          const erro = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Um erro foi detectado.')
            .setDescription('🔍 Procurando erro')
          return message.inlineReply(erro).then(msg => msg.delete({ timeout: 5000 })).then(msg => message.inlineReply(errorembed))
        }
      }).then(msg => client.channels.cache.get(logchannel).send(UnbanEmbed))
    })
  }
}