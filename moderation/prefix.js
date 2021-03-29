const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    run: async (client, message, args) => {

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("Você não pode mudar meu prefix, mas pode pedir pra algúm administrador fazer isso.").then(m => m.delete({ timeout: 5000 }))
        }

        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"


        const prefixembed = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setTitle('ℹ️ Informações sobre Prefixo')
            .setDescription('Prefixo é o simbolo que você utiliza para executar um comando em um bot no Discord.\nExemplo: `' + prefix + 'prefix` ou `' + prefix + 'help`')
            .addFields(
                {
                    name: '💡 Meus comandos de Prefix',
                    value: '`' + prefix + 'setprefix` Escolha meu prefixo\n`' + prefix + 'resetprefix` Resete meu prefixo para `-`'
                }
            )
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        await message.channel.send(prefixembed)
    }
}