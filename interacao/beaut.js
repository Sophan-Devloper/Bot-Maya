const canvacord = require('canvacord/src/Canvacord')
const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
                const adm = new Discord.MessageEmbed()
                        .setColor('#FF0000')
                        .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
                return message.channel.send(adm)
        }

        const member = message.mentions.users.first() || message.author

        if (!member) {
                let prefix = db.get(`prefix_${message.guild.id}`)
                if (prefix === null) prefix = "-"

                const nouser = new Discord.MessageEmbed()
                        .setColor('#FF0000')
                        .setTitle('Erroooou')
                        .setDescription('`' + prefix + 'beaut @user`')
                return message.reply(nouser)
        }

        if (member.id === message.author.id) {
          return message.channel.send('Você não pode usar este comando com você mesmo.')
        }
        const memberAvatar = member.displayAvatarURL({ dynamic: false, format: 'png' })

        const image = await canvacord.beautiful(memberAvatar)
        const beautiful = new Discord.MessageAttachment(image, 'beautiful.png')
        return message.channel.send(beautiful)
}