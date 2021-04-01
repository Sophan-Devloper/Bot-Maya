const { MessageEmbed } = require("discord.js")
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
    message.delete()
    let data = db.all().filter(i => i.ID.startsWith("whitelist_")).sort((a, b) => b.data - a.data);
    if (data.length < 1) return message.channel.send("Sem ranking por enquanto").then(m => m.delete({ timeout: 5000 }))

    let myrank = data.map(m => m.ID).indexOf(`whitelist_${message.author.id}`) + 1 || "N/A"
    data.length = 10;
    let lb = [];
    for (let i in data) {
        let id = data[i].ID.split("_")[1]
        let user = await client.users.fetch(id)
        user = user ? user.tag : "Usuário não encontrado"
        let whitelist_ = data[i].data
        let level = db.get(`level_${id}`)
        lb.push({
            user: { id, tag: user },
            level,
            whitelist_,
        })
    }

    const embed = new MessageEmbed()
        .setTitle("Whitelist Maya Protection")
        .setColor("YELLOW")
    lb.forEach(d => {
        embed.addField(`${d.user.tag}`, `${d.user.id}`)
    })
    return message.channel.send(embed).then(msg => msg.delete({ timeout: 15000 }))
}

module.exports.help = {
    name: "Ranking"
}