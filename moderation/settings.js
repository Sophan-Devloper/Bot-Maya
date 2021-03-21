const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {

    let embed = new MessageEmbed()
    .setAuthor(`Settings for ${message.guild.name} ??`, message.guild.iconURL)
    .addField(`Public Role Channel`, client.channels.cache.get(client.settings.get(message.guild.id, "roleschannel")) === undefined ? 'none' : client.channels.cache.get(client.settings.get(message.guild.id, "roleschannel")))
    .addField(`Level UP Channel Messages`, client.channels.cache.get(client.settings.get(message.guild.id, "channel")) === undefined ? 'none' : client.channels.cache.get(client.settings.get(message.guild.id, "channel")))
    .addField(`No XP Channels`, client.settings.get(message.guild.id, "noxpchannels").length === 0 ? "none" : client.settings.get(message.guild.id, "noxpchannels").map(c => client.channels.cache.get(c)) || client.settings.get(message.guild.id, "noxpchannels").length > 10 ? "Too many to be displayed." : client.settings.get(message.guild.id, "noxpchannels").map(c => client.channels.cache.get(c)))
    .addField(`XP Gain`, `${client.settings.get(message.guild.id, "xpgain")[0].first} - ${client.settings.get(message.guild.id, "xpgain")[0].second}`)

    message.channel.send(embed)

}

exports.help = {
    name:"settings",
    usage:"!settings"
}