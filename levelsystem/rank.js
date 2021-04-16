const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async (client, message, args) => {

    const choose = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Qual ranking você quer ver?')
        .setDescription('⬆️ Level Ranking\n💰 Money Ranking')

    return message.inlineReply(choose).then(msg => {
        msg.react('⬆️') // Level
        msg.react('💰') // Money

        msg.awaitReactions((reaction, user) => {
            if (message.author.id !== user.id) return

            if (reaction.emoji.name === '⬆️') { // Sim
                msg.delete()
                let data = db.all().filter(i => i.ID.startsWith("xp_")).sort((a, b) => b.data - a.data);
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

                const embedxp = new Discord.MessageEmbed()
                    .setTitle("👑 Ranking Global - XP")
                    .setColor("YELLOW")
                lb.forEach(d => {
                    embed.addField(`${d.rank}. ${d.user.tag}`, `Level - ${d.level}\nXP - ${d.xp} / ${d.xpreq}`);
                });
                embed.setFooter(`Seu ranking: ${myrank}`)
                return message.channel.send(embedxp)
            }

            if (reaction.emoji.name === '💰') { // Não
                msg.delete()
                let data1 = db.all().filter(i => i.ID.startsWith("bank_")).sort((a, b) => b.data1 - a.data1);
                let myrank1 = data1.map(m => m.ID).indexOf(`bank_${message.author.id}`) + 1 || "N/A";
                data1.length = 10;
                let lb1 = [];
                for (let i in data1) {
                    let id = data1[i].ID.split("_")[1]
                    let user = await client.users.fetch(id)
                    user = user ? user.tag : "Usuário não encontrado"
                    let rank = data1.indexOf(data1[i]) + 1
                    let level = db.get(`bank_${id}`)
                    let xp = data1[i].data1
                    let xpreq = Math.floor(Math.pow(level / 0.1, 2))
                    lb1.push({
                        user: { id, tag: user },
                        rank,
                        xp,
                    })
                }

                const embedmp = new Discord.MessageEmbed()
                    .setTitle("👑 Ranking Global - MPoints")
                    .setDescription('O Rank é originado pelo dinheiro no banco de cada pessoa.')
                    .setColor("YELLOW")
                lb1.forEach(d => {
                    embed.addField(`${d.rank}. ${d.user.tag}`, `${d.xp}<:estrelinha:831161441847345202>MPoints `);
                });
                embed.setFooter(`Seu ranking: ${myrank1}`)
                return message.channel.send(embedmp)
            }
        })
    })
}