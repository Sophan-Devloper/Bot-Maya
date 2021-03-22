exports.run = (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
    
      message.reply('You do not have the required permissions to use this.')
      return;
    
    }
    
    if(args[0] === "all") {
      message.guild.channels.filter(channel => channel.type !== "category") .forEach(channel => {
      let check = channel.permissionsFor(message.guild.id)
    if(!check.has("SEND_MESSAGES")) {
    channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false,
    })
      
    }
    })
      message.reply('Locked everything! :thumbsup:')
      return;
    }
      let channel = message.guild.channels.cache.find(c => c.name === args[0]) || message.guild.channels.cache.get(args[0]) || message.mentions.channels.first()
      if (!channel) channel = message.channel;
    
    
    
    let check = channel.permissionsFor(message.guild.id)
    if(!check.has("SEND_MESSAGES")) {
      channel.updateOverwrite(message.guild.id, {
        SEND_MESSAGES: true,
      }).then(() => {
            message.reply('Locked! :thumbsup:')
        }).then(() => {
    message.reply('Unlocked! :thumbsup:')  
    }) 
     
     return;
    }
    
    if (channel.type === "voice" || channel.type === "category") return message.reply("That was a category / voice channel, could not proceed.")
    
    channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false,
    }).then(() => {
          message.reply('Locked! :thumbsup:')
      })
     
    
    }
    
    
      module.exports.help = {
        name:"lockdown",
        usage: 'Lock a channel down.',
      }