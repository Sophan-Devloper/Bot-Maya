const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.delete()

var list = [
    'Ele é lolicon, eu tenho medo dele',
    'O da :cloud:Akatsouka? Ele me assusta',
    'Tenho fé que um dia ele será uma pessoa melhor'
     ]
 
 var rand = list[Math.floor(Math.random() * list.length)]
 let user = client.users.cache.get(args[0])
 

  await message.channel.send(rand)
}