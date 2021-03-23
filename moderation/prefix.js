const Discord = require('discord.js')
const db = require('quick.db')
const { default_prefix } = require("../../config.json")

module.exports = {
    name: "prefix",
    category: "moderation",
    usage: "setprefix newprefix",
    description: "Mudar o prefix do server",
    run: async (client, message, args) => {

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("Você não pode mudar meu prefix, mas pode pedir pra algúm administrador fazer isso.").then(m => m.delete({ timeout: 5000 }))
        }

        const prefixembed = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setTitle('ℹ️ Definições de Prefixo')
            .setDescription('Prefixo é o simbolo que você usa para executar um comando em um bot no Discord.\nEx: `-prefix`')
            .addFields(
                {
                    name: '💡 Meus comandos de Prefix',
                    value: '`-setprefix` Escolha meu prefixo\n`-resetprefix` Resete meu prefixo para `-`'
                },
                {
                    name: ':gear: Dev Command',
                    value: '`-setdefaultprefix` Muda o prefix principal'
                }
            )
            .setFooter(message.author.tag, message.author.displayAvatarURL())

        await message.channel.send(prefixembed)
    }
}