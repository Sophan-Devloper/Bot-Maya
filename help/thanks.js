const Discord = require('discord.js')

exports.run = async (client, message, args) => {
     message.delete()

     const Thanks = new Discord.MessageEmbed()
          .setColor('#DCDCDC')
          .setThumbnail(client.user.displayAvatarURL())
          .setTitle(':hearts:Eu só digo OBRIGADA a todos que deram suas ideias!:hearts:')
          .setURL('https://forms.gle/vtJ5qBqFDd9rL5JU8')
          .addFields(
               {
                    name: ':gear: Developers :gear:',
                    value: '`Rody#3756` & `Gowther#9233`'
               },
               {
                    name: ':tools: Coop :tools:',
                    value: '`Gowther#9233`'
               },
               {
                    name: '🖌️ Designers 🖌️',
                    value: '`Rody#3756` | `Gowther#9233` | `Yma#5175`'
               },
               {
                    name: ':handshake: Colaboradores :handshake:',
                    value: "𝑅𝑈 𝑀𝑖𝑛𝑒?#2790 | Comandos de Administração\nLucas - Luquisquiss#4643 | `-frase`\nJoão da Cilada#7041 | `-love`\nGiacometti#4849 | `-feet`\nCoiny#9056 | Ideias no Painel Interativo\nCALORIES#2822 | Music System Helper"
               },
               {
                    name: ':star2:Especiais:star2:',
                    value: 'MakolPedro#8508 | +30 Bugs Reportados'
               },
          )
          .setImage('https://imgur.com/MkQo0Lh.gif')
          .setFooter(message.author.tag, message.author.displayAvatarURL())
     return message.channel.send(Thanks).then(msg => msg.delete({ timeout: 15000 })).catch(err => { return })
}