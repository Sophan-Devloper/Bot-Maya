const Discord = require('discord.js')
exports.run = async (client, message, args) => {

    message.delete()
    const ChannelName = message.channel.name
    const ChannelId = message.channel.id
    const ChannelCategory = message.channel.parent
    const ChannelCategoryID = message.channel.parentID
    const LastPinAt = message.channel.lastPinAt

    const ChannelInfo = new Discord.MessageEmbed()
        .setColor('#b700ff')
        .setTitle('Channel Info')
        .addField("Channel Name : ", `${ChannelName}`)
        .addField("Channel ID : ", `${ChannelId}`)
        .addField("Category Name : ", `${ChannelCategory}`)
        .addField("Category ID : ", `${ChannelCategoryID}`)
        .addField("Last Pinned Message Date : ", `${LastPinAt}`)
    message.channel.send(ChannelInfo)
}