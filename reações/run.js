const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
  'https://imgur.com/jrO1GMM.gif',
  'https://imgur.com/ZF54zRf.gif',
  'https://imgur.com/FMNN1vP.gif',
  'https://imgur.com/uc73pUM.gif',
  'https://imgur.com/f2G4KhW.gif',
  'https://imgur.com/e0Tm73Q.gif',
  'https://imgur.com/FvWMFlD.gif',
  'https://imgur.com/JMVc5eV.gif',
  'https://imgur.com/LAzrCjl.gif',
  'https://imgur.com/oy1x3vY.gif',
  'https://imgur.com/cnLaDCn.gif',
  'https://imgur.com/CcMdWIc.gif',
  'https://imgur.com/8T1FTVM.gif',
  'https://imgur.com/dvFQv8V.gif',
  'https://imgur.com/pOfg9ft.gif',
  'https://imgur.com/N1AZcwM.gif',
  'https://imgur.com/HeSF9vn.gif',
  'https://imgur.com/zu7cYC4.gif',
  'https://imgur.com/PPZUzjw.gif',
  'https://imgur.com/U6jsYVe.gif',
  'https://imgur.com/BG19Hck.gif',
  'https://imgur.com/kSnwKa3.gif',
  'https://imgur.com/hcDbowm.gif',
  'https://imgur.com/ZxCCx18.gif'
      ]

var rand = list[Math.floor(Math.random() * list.length)]
let user = client.users.cache.get(args[0])

  const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`Run, run, RUUUN!!!!`)
        .setImage(rand)
  await message.channel.send(embed).then(msg => msg.delete({timeout: 10000}))
}