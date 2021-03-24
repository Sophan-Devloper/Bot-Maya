const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'status no perfil',
    aliases: ['status', 'perfil'],
    run: async (client, message, args) => {
        message.delete()

        if (!args[0])
            return message.channel.send('Você precisa me dizer qual status você quer no seu perfil.\n \n`-status Sua Nova status`').then(msg => msg.delete({ timeout: 9000 }))

        if (args[15]) {
            const embed15 = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle('É permito até 15 palavras no status.')
            return message.channel.send(embed15).then(msg => msg.delete({ timeout: 5000 }))
        }

        const status = args.join(' ')

        db.set(`status_${message.author.id}`, status)
        const embednewstatus = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle('Você mudou seu status com sucesso!')
            .addField('Novo Status', status)
        message.channel.send(embednewstatus).then(msg => msg.delete({ timeout: 6000 }))
    }
}

module.exports.help = {
    name: "status"
}