const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
message.delete()

        var embed = new Discord.MessageEmbed()
                .setColor('GREEN')
                .addFields(
                        {
                            name: 'Aqui está o link para me adicionar no seu Servidor',
                            value: 'https://discord.com/oauth2/authorize?client_id=763072871597604874&scope=bot&permissions=8'
                        })
      await message.channel.send(embed)
}