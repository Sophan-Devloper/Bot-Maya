const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Manusear Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

  if (!message.member.permissions.has("MANAGE_MESSAGES")) {
    const perms = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Permissão Necessária: Manusear Mensagens')
    return message.channel.send(perms).then(message => message.delete({ timeout: 5000 })).catch(err => { return })
  }
  const clearembed = new Discord.MessageEmbed()
    .setColor("#DCDCDC")
    .setTitle("🧹 Comando Clear 🧹")
    .setDescription("Use o comando clear para fazer aquela limpa nas mensagens")
    .addFields(
      {
        name: 'Comandos do Clear',
        value: '`clear all` Apaga todo o chat\n`clear 1~99` Apague até 99 mensagens\n`clear images` Apague imagens\n`clear bots` Apague mensagens de bots\n`clear @user` Apague mensagens de alguém'
      }
    )

  if (!args[0]) {
    return message.inlineReply(clearembed).catch(err => { return })
  }

  if (message.mentions.members.first()) {
    let amountToDelete = args[1]

    if (!args[1]) {
      return message.inlineReply('`clear @user` Quantidade de mensagens para apagar. Máx: 100')
    }

    if (args[1] > 100) return message.channel.send('Me fala um número até 100, ok?')
    let userMessages = await message.channel.messages.fetch({ limit: parseInt(amountToDelete) })
    let userFilter = userMessages.filter(obj => obj.author.id === message.mentions.users.first().id)

    message.channel.bulkDelete(userFilter).catch(err => { return })
    return message.channel.send('Feito. | Mensagens acima de 14 dias não podem ser apagadas. (Limitações do Discord)')
  }

  if (['bot', "bots"].includes(args[0])) {
    let awaitBotMessages = await message.channel.messages.fetch({ limit: 100 })
    let botFilter = awaitBotMessages.filter(obj => obj.author.bot)

    message.channel.bulkDelete(botFilter).catch(err => { return })
    message.channel.send('Feito. | Mensagens acima de 14 dias não podem ser apagadas. (Limitações do Discord)')

    return
  }

  if (['images', "imagens", "fotos", "foto", "imagem", "midia"].includes(args[0])) {
    let awaitImageMessages = await message.channel.messages.fetch({ limit: 100 })
    if (args[1] > 100) {
      return message.channel.send('O número de mensagens não pode passar de 100.')
    }
    let imageFilter = awaitImageMessages.filter(obj => obj.attachments.size > 0)

    message.channel.bulkDelete(imageFilter).catch(err => { return })
    message.channel.send('Feito. | Mensagens acima de 14 dias não podem ser apagadas. (Limitações do Discord)')
    return
  }

  if (args[0] === "all") {
    let messages = 0
    let i = true
    while (i) {
      let deleteAble = await message.channel.messages.fetch({ limit: 100 })
      if (deleteAble.size < 100) {
        await message.channel.bulkDelete(deleteAble).catch(err => { return })
        messages += deleteAble.size;
        i = false;
        message.channel.send('Deletei um total de ' + messages + ' mensagens. | Mensagens acima de 14 dias não podem ser apagadas. (Limitações do Discord)')
        messages = 0;
        return;
      }
      await message.channel.bulkDelete(deleteAble).catch(err => { return })
      messages += deleteAble.size
    }
  } else if (typeof (parseInt(args[0])) == "number") {
    if (isNaN(args[0])) {
      return message.channel.send('Hey! Me fala números para que eu possa contar')
    }
    if (parseInt(args[0]) > 100) return message.channel.send('Me fala um número até 100, ok? Se quiser apagar TUDO, use o comando `clear all`').catch(err => { return })
    let messages = await message.channel.messages.fetch({ limit: parseInt(args[0]) })
    message.channel.bulkDelete(messages).then(m => {
      message.channel.send('Deletei ' + m.size + ' mensagens. | Mensagens acima de 14 dias não podem ser apagadas. (Limitações do Discord)').then(message => message.delete({ timeout: 5000 })).catch(err => { return })
    }).catch(err => { return })
  }
}