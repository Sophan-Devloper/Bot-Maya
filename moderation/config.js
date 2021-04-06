const Discord = require('discord.js')
const db = require('quick.db')
var linkgit = 'https://github.com/rodycouto/MayaCommands/blob/main/README.md#%EF%B8%8F-comandos-administrativos'

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) {
        const noperm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Permissão Necessária: Administrador')
        return message.channel.send(noperm)
    }

    const configuração = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('🛠️ Configurações Disponiveis (opicional)')
        .setDescription(`Para informações mais detalhadas, acesse os [comandos administrativos](${linkgit})\n \n` + '`-setwelcome` Canal de mensagem de boas vindas\n`-setwelcomemsg` Escolha a mensagem\n`-setleave` Canal de saida\n`-setleavemsg` Escolha a mensagem\n`-setxpchannel` Canal de Level up\n`-setreportchannel` Canal para receber reports\n`-setlogchannel` Canal log de ações mod\n`-setautorole` Autorole normal')
    return message.channel.send(configuração)
}