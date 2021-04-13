const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

 if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.channel.send(adm)
  }

    var num = Math.floor(Math.random() * 100) + 1

    var user = message.mentions.members.first()
    if (!user) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const nouser = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'gay @user`')
        return message.channel.send(`${message.author}`, nouser)
    }

    if (user.id === '821471191578574888') {
        return message.channel.send('Eu não tenho gênero, eu acho.')
    }

    if (user.id === message.author.id) {
      return message.channel.send('Você não pode usar este comando com você mesmo.')
    }

    var rand = ['YELLOW', 'RED', 'GREEN', 'PURPLE']
    var calors = rand[Math.floor(Math.random() * rand.length)]

    const gay = new Discord.MessageEmbed()
        .setColor(calors)
        .setTitle('🏳️‍🌈 Maya Gaymometro')
        .setDescription(`Pela minha análise, ${user} é ${num}% gay.`)
    return message.channel.send(gay)
}