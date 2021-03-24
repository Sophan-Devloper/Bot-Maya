const { MessageEmbed } = require("discord.js")
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
    message.delete()
    let data = db.all().filter(i => i.ID.startsWith("xp_")).sort((a, b) => b.data - a.data);
    if (data.length < 1) return message.channel.send("Sem ranking por enquanto").then(m => m.delete({ timeout: 5000 }))
    let myrank = data.map(m => m.ID).indexOf(`xp_${message.author.id}`) + 1 || "N/A";
    data.length = 10;
    let lb = [];
    for (let i in data) {
        let id = data[i].ID.split("_")[1]
        let user = await client.users.fetch(id)
        user = user ? user.tag : "Usuário não encontrado"
        let rank = data.indexOf(data[i]) + 1
        let level = db.get(`level_${id}`)
        let xp = data[i].data
        let xpreq = Math.floor(Math.pow(level / 0.1, 2))
        lb.push({
            user: { id, tag: user },
            rank,
            level,
            xp,
            xpreq
        })
    }

    const embed = new MessageEmbed()
        .setTitle("👑 Ranking Interserver - TOP 10")
        .setColor("YELLOW")
    lb.forEach(d => {
        embed.addField(`${d.rank}. ${d.user.tag}`, `Level - ${d.level}\nXP - ${d.xp} / ${d.xpreq}`);
    });
    embed.setFooter(`Seu ranking: ${myrank}`)
    return message.channel.send(embed).then(msg => msg.delete({ timeout: 15000 }))
}

module.exports.help = {
    name: "Ranking"
}