const Discord = require('discord.js');

exports.run = async (client, message, args) => {
     message.delete()

     let user = client.users.cache.get(args[0]);

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
                    name: '🖌️ Designers 🖌️',
                    value: '`Rody#3756` | `Gowther#9233` | `Rafaella#????`'
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
          .setImage('https://imgur.com/DNVIReM.gif')
          .setFooter(message.author.tag, message.author.displayAvatarURL())
     await message.channel.send('Eu estou enviando no seu privado todos os comandos que você pediu.').then(msg => msg.delete({ timeout: 4000 })).then(msg => message.author.send(Thanks)).then(msg => message.channel.send('Eu estou enviando para o seu privado todos os comandos que você pediu.')).then(msg => msg.delete({ timeout: 4000 }))
}