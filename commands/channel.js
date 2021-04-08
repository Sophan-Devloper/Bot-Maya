const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    const ChannelName = message.channel.name
    const ChannelId = message.channel.id
    const ChannelCategory = message.channel.parent
    const ChannelCategoryID = message.channel.parentID
    const LastPinAt = message.channel.lastPinAt

    const ChannelInfo = new Discord.MessageEmbed()
        .setColor('#b700ff')
        .setTitle('Channel Info')
        .addField("Nome: ", `${ChannelName}`)
        .addField("ID: ", `${ChannelId}`)
        .addField("Nome da Categoria: ", `${ChannelCategory}`)
        .addField("Categoria - ID : ", `${ChannelCategoryID}`)
        .addField("Ultimo pin: ", `${LastPinAt}`)
    message.channel.send(ChannelInfo)
}