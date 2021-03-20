const Discord = require('discord.js')

module.exports.run = (client, message, args) => {

    const embeddetail = new Discord.MessageEmbed()
        .setColor("#DCDCDC")
        .setTitle('Comando Mute - Detalhes')
        .addFields(
            {
                name: ':gear: Desenvolvedor da Raphy :gear:',
                value: 'Olá, meu nome é Rodrigo, desenvolvedor da Raphy. O sistema de Mute da Raphy utiliza o sistema de Permissões liberada pelo Discord da biblioteca Discord.js.\nNo resumo... Quem for mutado pela Raphy, não vai conseguir falar em nenhum canal de texto e de voz no servidor inteiro.\nCom a otimização da Raphy, você não precisa configurar um cargo Mute em cada canal de texto/voz manualmente, a Raphy faz isso sozinha pra você.'
            },
            {
                name: '🔄 Atualize o Mute System',
                value: '1 - `-delrole @Muted` Delete o cargo.\n2 - `-mute` Ativa a configuração do cargo Mute.'
            },
            {
                name: '🆕 Novos canais de texto/voz',
                value: 'O Discord ainda não permite a auto atualização de roles.\nSempre que você criar um canal de texto/voz, atualize o mute da Raphy para perfeito funcionamento.'
            },
            {
                name: '📑 Canal Log',
                value: 'Neste canal, mandarei todos os detalhes do mute. Você pode deixar este canal público ou privado alterando as permissões dele.\nClaro, não vá me privar dele, né?.'
            },
            {
                name: '⬆️ Raphy Role',
                value: 'É extremamente importe que o meu cargo, "Raphy" esteja acima de todas as outras roles, para que eu possa efetuar meus comandos com maestria.'
            }
        )
        .setTimestamp()
        .setFooter('Está mensagem será excluida em 1 minuto...')

    message.channel.send(embeddetail).then(msg => msg.delete({timeout: 60000}))
}