const { MessageAttachment } = require("discord.js");
const canvacord = require("canvacord");
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
  message.delete()
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

  let level = db.fetch(`level_${user.id}`) || 0
  let exp = db.fetch(`xp_${user.id}`) || 0
  let neededXP = Math.floor(Math.pow(level / 0.1, 2));

  let every = db.all().filter(i => i.ID.startsWith("xp_")).sort((a, b) => b.data - a.data);
  let rank = every.map(x => x.ID).indexOf(`xp_${user.id}`) + 1;

  // v4 rank card
  //   let img = await canvacord.rank({
  //     username: user.username,
  //     discrim: user.discriminator,
  //     currentXP: exp.toString(),
  //     neededXP: neededXP.toString(),
  //     rank: rank.toString(),
  //     level: level.toString(),
  //     avatarURL: user.displayAvatarURL({ format: "png" }),
  //     background: "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&w=1000&q=80"
  //   });

  // v5 rank card
  const card = new canvacord.Rank()
    .setUsername(user.username)
    .setDiscriminator(user.discriminator)
    .setRank(rank)
    .setLevel(level)
    .setCurrentXP(exp)
    .setRequiredXP(neededXP)
    .setStatus(user.presence.status)
    .setAvatar(user.displayAvatarURL({ format: "png", size: 1024 }))

  const img = await card.build().catch(err => { message.channel.send('Um erro foi detectando na execução de CANVACORD' + err) })

  return message.channel.send("Carregando...").then(m => m.delete({ timeout: 5000 })).then(msg => msg.channel.send(new MessageAttachment(img, "rank.png"))).then(m => m.delete({ timeout: 5000 }))
};

module.exports.help = {
  name: "rank"
};