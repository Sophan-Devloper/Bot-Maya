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
    .setFooter(message.author.tag, message.author.displayAvatarURL())

  if (!args[0]) {
    return message.channel.send(clearembed).catch(err => { return })
  }

  if (message.mentions.users.size > 0) {
    let amountToDelete = args[1] + 1

    if (!args[1]) amountToDelete = 20

    console.log(amountToDelete)
    if (parseInt(amountToDelete) > 300) return message.channel.send('Me fala um número até 300, ok?')
    let userMessages = await message.channel.messages.fetch({ limit: parseInt(amountToDelete) })
    let userFilter = userMessages.filter(obj => obj.author.id === message.mentions.users.first().id)

    message.channel.bulkDelete(userFilter).catch(err => {
      if (err)
        return message.channel.send('❌ **#ERROR!** ❌ **#ERROR!** ❌\n \nO Discord permite que eu apague mensagem de até 14 dias.\n \n⚙️ *Developers Error by: console.log*\n\n' + err).then(m => m.delete({ timeout: 60000 })).catch(err => { return })
    })
    message.channel.send('Feito.').then(m => m.delete({ timeout: 3000 })).catch(err => { return })
    return
  }

  if (message.mentions.users.size > 0) {
    let amountToDelete = args[1] + 1
    if (!args[1]) amountToDelete = 50
    console.log(amountToDelete)
    if (parseInt(amountToDelete) > 100)
      return message.channel.send('Me fala um número até 99, ok?').then(m => m.delete({ timeout: 3000 })).catch(err => { return })
    let userMessages = await message.channel.messages.fetch({ limit: parseInt(amountToDelete) })
    let userFilter = userMessages.filter(obj => obj.author.id === message.mentions.users.first().id)

    message.channel.bulkDelete(userFilter).catch(err => {
      if (err)
        return message.channel.send('❌ **#ERROR!** ❌ **#ERROR!** ❌\n \nO Discord permite que eu apague mensagem de até 14 dias.\n \n⚙️ *Developers Error by: console.log*\n\n' + err).then(message => message.delete({ timeout: 60000 })).catch(err => { return })
    })
    message.channel.send('Feito.').then(m => m.delete({ timeout: 3000 })).catch(err => { return })
    return
  }

  if (args[0] === "bots") {
    let awaitBotMessages = await message.channel.messages.fetch({ limit: 100 })
    let botFilter = awaitBotMessages.filter(obj => obj.author.bot)

    message.channel.bulkDelete(botFilter).catch(err => {
      if (err)
        return message.channel.send('❌ **#ERROR!** ❌ **#ERROR!** ❌\n \nO Discord permite que eu apague mensagem de até 14 dias.\n \n⚙️ *Developers Error by: console.log*\n\n' + err).then(message => message.delete({ timeout: 60000 })).catch(err => { return })
    })
    message.channel.send('Feito.').then(m => m.delete({ timeout: 5000 })).catch(err => { return })

    return
  }

  const imagens = [
    "images",
    "imagens",
    "fotos"
  ]
  if (args[0] === imagens) {
    let awaitImageMessages = await message.channel.messages.fetch({ limit: 100 })
    let imageFilter = awaitImageMessages.filter(obj => obj.attachments.size > 0)

    message.channel.bulkDelete(imageFilter).catch(err => {
      if (err)
        return message.channel.send('❌ **#ERROR!** ❌ **#ERROR!** ❌\n \nO Discord permite que eu apague mensagem de até 14 dias.\n \n⚙️ *Developers Error by: console.log*\n\n' + err).then(message => message.delete({ timeout: 60000 })).catch(err => { return })
    })
    message.channel.send('Feito.').then(m => m.delete({ timeout: 5000 })).catch(err => { return })
    return
  }

  if (args[0] === "all") {
    let messages = 0
    let i = true
    while (i) {
      let deleteAble = await message.channel.messages.fetch({ limit: 100 })
      if (deleteAble.size < 100) {
        await message.channel.bulkDelete(deleteAble).catch(err => {
          if (err)
            return message.channel.send('❌ **#ERROR!** ❌ **#ERROR!** ❌\n \nO Discord permite que eu apague mensagem de até 14 dias.\n \n⚙️ *Developers Error by: console.log*\n\n' + err).then(message => message.delete({ timeout: 60000 })).catch(err => { return })
        })
        messages += deleteAble.size;
        i = false;
        message.channel.send('Deletei um total de ' + messages + ' mensagens.').then(m => m.delete({ timeout: 5000 })).catch(err => { return })
        messages = 0;
        return;
      }
      await message.channel.bulkDelete(deleteAble).catch(err => {
        if (err)
          return message.channel.send('❌ **#ERROR!** ❌ **#ERROR!** ❌\n \nO Discord permite que eu apague mensagem de até 14 dias.\n \n⚙️ *Developers Error by: console.log*\n\n' + err).then(message => message.delete({ timeout: 60000 })).catch(err => { return })
      })
      messages += deleteAble.size
    }
  } else if (typeof (parseInt(args[0])) == "number") {
    if (isNaN(args[0])) {
      return message.channel.send('Hey! Me fala números para que eu possa contar').then(message => message.delete({ timeout: 4000 })).catch(err => { return })
    }
    if (parseInt(args[0]) > 100) return message.channel.send('Me fala um número até 300, ok? Se quiser apagar TUDO, use o comando `clear all`').catch(err => { return })
    let messages = await message.channel.messages.fetch({ limit: parseInt(args[0]) })
    message.channel.bulkDelete(messages).then(m => {
      message.channel.send('Deletei ' + m.size + ' mensagens.').then(message => message.delete({ timeout: 5000 })).catch(err => { return })
    }).catch(err => {
      if (err)
        return message.channel.send('❌ **#ERROR!** ❌ **#ERROR!** ❌\n \nO Discord permite que eu apague mensagem de até 14 dias.\n \n⚙️ *Developers Error by: console.log*\n\n' + err).then(message => message.delete({ timeout: 60000 })).catch(err => { return })
    })
  }
}