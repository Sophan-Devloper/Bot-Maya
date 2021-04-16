const Discord = require('discord.js')
const db = require('quick.db')
var linkgit = 'https://github.com/rodycouto/MayaCommands/blob/main/README.md#%EF%B8%8F-comandos-administrativos'

exports.run = async (client, message, args) => {

    const configuração = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('🛠️ Configurações Disponiveis (opicional)')
        .setDescription(`Para informações mais detalhadas, acesse os [comandos administrativos](${linkgit})\n \n` + '`-setwelcome` Canal de mensagem de boas vindas\n`-setlink on/off` Sistema Ant Link\n`-setwelcomemsg` Escolha a mensagem\n`-setleave` Canal de saida\n`-setleavemsg` Escolha a mensagem\n`-setxpchannel` Canal de Level up\n`-setreportchannel` Canal para receber reports\n`-setideiachannel` Canal de ideias\n`-setlogchannel` Canal log de ações mod\n`-setautorole` Autorole normal\n`-setpescachannel` Canal de pesca\n`-setminechannel` Canal para minerar')
    return message.inlineReply(configuração)
}