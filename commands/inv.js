const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
message.delete()

        var embed = new Discord.MessageEmbed()
                .setColor('GREEN')
                .addFields(
                        {
                            name: 'Aqui está o link para me adicionar no seu Servidor',
                            value: 'https://discord.com/api/oauth2/authorize?client_id=821471191578574888&permissions=8&scope=bot'
                        })
      await message.channel.send(embed)
}