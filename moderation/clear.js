const Discord = require("discord.js")

exports.run = async (client, msg, args) => {
  msg.delete()

  if (!msg.member.permissions.has("MANAGE_MESSAGES"))
    return msg.channel.send(`Hey, ${msg.author.username}! Você não tem todo esse poder :v`).then(msg => msg.delete({ timeout: 5000 }))

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
    .setFooter(msg.author.tag, msg.author.displayAvatarURL())

  if (!args[0]) {
    msg.channel.send(clearembed)
    return
  }

  if (msg.mentions.users.size > 0) {
    let amountToDelete = args[1]

    if (!args[1]) amountToDelete = 50

    console.log(amountToDelete)
    if (parseInt(amountToDelete) > 100) return msg.channel.send('Me fala um número até 99, ok?')
    let userMessages = await msg.channel.messages.fetch({ limit: parseInt(amountToDelete) })
    let userFilter = userMessages.filter(obj => obj.author.id === msg.mentions.users.first().id)

    msg.channel.bulkDelete(userFilter).catch(err => {
      if (err)
        return msg.channel.send('❌ **#ERROR!** ❌ **#ERROR!** ❌\n \nO Discord permite que eu apague mensagem de até 14 dias.\n \n⚙️ *Developers Error by: console.log*\n\n' + err).then(msg => msg.delete({ timeout: 15000 }))
    })
    msg.channel.send('Feito.').then(m => m.delete({ timeout: 3000 }))
    return
  }

  if (msg.mentions.users.size > 0) {
    let amountToDelete = args[1]
    if (!args[1]) amountToDelete = 50
    console.log(amountToDelete)
    if (parseInt(amountToDelete) > 100)
      return msg.channel.send('Me fala um número até 99, ok?').then(m => m.delete({ timeout: 3000 }))
    let userMessages = await msg.channel.messages.fetch({ limit: parseInt(amountToDelete) })
    let userFilter = userMessages.filter(obj => obj.author.id === msg.mentions.users.first().id)

    msg.channel.bulkDelete(userFilter).catch(err => {
      if (err)
        return msg.channel.send('❌ **#ERROR!** ❌ **#ERROR!** ❌\n \nO Discord permite que eu apague mensagem de até 14 dias.\n \n⚙️ *Developers Error by: console.log*\n\n' + err).then(msg => msg.delete({ timeout: 15000 }))
    })
    msg.channel.send('Feito.').then(m => m.delete({ timeout: 3000 }))
    return
  }

  if (args[0] === "bots") {
    let awaitBotMessages = await msg.channel.messages.fetch({ limit: 100 })
    let botFilter = awaitBotMessages.filter(obj => obj.author.bot)

    msg.channel.bulkDelete(botFilter).catch(err => {
      if (err)
        return msg.channel.send('❌ **#ERROR!** ❌ **#ERROR!** ❌\n \nO Discord permite que eu apague mensagem de até 14 dias.\n \n⚙️ *Developers Error by: console.log*\n\n' + err).then(msg => msg.delete({ timeout: 15000 }))
    })
    msg.channel.send('Feito.').then(m => m.delete({ timeout: 5000 }))

    return
  }

  const imagens = [
    "images",
    "imagens",
    "fotos"
  ]
  if (args[0] === imagens) {
    let awaitImageMessages = await msg.channel.messages.fetch({ limit: 100 })
    let imageFilter = awaitImageMessages.filter(obj => obj.attachments.size > 0)

    msg.channel.bulkDelete(imageFilter).catch(err => {
      if (err)
        return msg.channel.send('❌ **#ERROR!** ❌ **#ERROR!** ❌\n \nO Discord permite que eu apague mensagem de até 14 dias.\n \n⚙️ *Developers Error by: console.log*\n\n' + err).then(msg => msg.delete({ timeout: 15000 }))
    })
    msg.channel.send('Feito.').then(m => m.delete({ timeout: 5000 }))
    return
  }

  if (args[0] === "all") {
    let messages = 0
    let i = true
    while (i) {
      let deleteAble = await msg.channel.messages.fetch({ limit: 100 })
      if (deleteAble.size < 100) {
        await msg.channel.bulkDelete(deleteAble).catch(err => {
          if (err)
            return msg.channel.send('❌ **#ERROR!** ❌ **#ERROR!** ❌\n \nO Discord permite que eu apague mensagem de até 14 dias.\n \n⚙️ *Developers Error by: console.log*\n\n' + err).then(msg => msg.delete({ timeout: 15000 }))
        })
        messages += deleteAble.size;
        i = false;
        msg.channel.send('Deletei um total de ' + messages + ' mensagens.').then(m => m.delete({ timeout: 5000 }))
        messages = 0;
        return;
      }
      await msg.channel.bulkDelete(deleteAble)
      messages += deleteAble.size
    }
  } else if (typeof (parseInt(args[0])) == "number") {
    if (parseInt(args[0]) > 100) return msg.channel.send('Me fala um número até 99, ok? Se quiser pagar TUDO, use o comando `clear all`')
    let messages = await msg.channel.messages.fetch({ limit: parseInt(args[0]) })
    msg.channel.bulkDelete(messages).then(m => {
      msg.channel.send('Deletei ' + m.size + ' mensagens.').then(m => setTimeout(() => {
        m.delete()
      }, 4000))
    }).catch(err => {
      if (err)
        return msg.channel.send('❌ **#ERROR!** ❌ **#ERROR!** ❌\n \nO Discord permite que eu apague mensagem de até 14 dias.\n \n⚙️ *Developers Error by: console.log*\n\n' + err).then(msg => msg.delete({ timeout: 15000 }))
    })
  }
}
module.exports.help = {
  name: "clear",
  usage: "clear all | clear <quantia> | clear images | clear bots | clear @user"
}