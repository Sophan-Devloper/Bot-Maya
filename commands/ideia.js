const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete()

  const content = args.join(" ")

  let avatar = message.author.displayAvatarURL({ format: 'png' })
  let canal = message.guild.channels.cache.find(ch => ch.name === "sugestões")

  if (!canal)
    return message.channel.send("Por favor, peça para que um Adm crie um Canal com o nome `sugestões` \nCopie e cole isso que eu crio um pra você \n`-createchannel sugestões`").then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })

  if (!args[0])
    return message.reply('escreva a sua ideia assim -> `-ideia Suas ideias`').then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })

  else if (content.length > 1000) {
    return message.channel.send(`${message.author.username}, forneça uma sugestão de no máximo 1000 caracteres.`).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })

  } else {

    const msg = await canal.send(
      new Discord.MessageEmbed()
        .setColor("#DCDCDC")
        .setAuthor(`${message.author.tag} teve uma ideia!`, avatar)
        .setDescription(content)
        .setTimestamp()
        .setFooter(`-ideia SuaIdea`)
    )

    await message.author.send(`A sua ideia foi enviada com sucesso! Você pode ve-lá aqui: ${canal}`)

    const emojis = ["✅", "❌"]

    for (const i in emojis) {
      await msg.react(emojis[i])
    }
  }
}