const { util } = require('discord.js-commando')
const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
    if(!['451619591320371213'].includes(message.author.id)) return;

let page = args[0]
if (!page) return message.reply('Please provide a page.')

       let servers = client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).map(g => g)
       let paginated = util.paginate(servers, page, 20)
       let embed = new MessageEmbed()
       .setDescription(paginated.items.map(g => `${g.name} - ${g.memberCount} (${g.id})`))
       
     
       message.channel.send(embed)

}

exports.help = {
	name:"servers",
	usage: "servers <page>"
}
