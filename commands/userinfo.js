const Discord = require('discord.js')

module.exports = {  
    name: "user-info",
    category: "extra",
    run: async (client, message, args) => {
    message.delete()

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        let status;        
        switch (user.presence.status) {
            case "online":
                status = "<:green_circle:729181184193462285> online";
                break;
            case "dnd":
                status = "<:no_entry:729181212530442311> Não Perturbe";
                break;
            case "idle":
                status = "<:black_circle:729181121933475931> Invisivel";
                break;
            case "offline":
                status = "<:red_circle:729181162182017051> offline";
                break;
        }       

        const embed = new Discord.MessageEmbed()
            .setTitle(`Informações sobre ${user.user.username}`)
            .setColor(`#f3f3f3`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "Nome Original",
                    value: user.user.tag,
                    inline: true
                },
                {
                    name: "Nome no Servidor",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "🆔 ID",
                    value: user.user.id
                },
                {
                    name: "Status Atual",
                    value: status
                },
                {
                    name: "Atividade (Status)",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `Nenhuma atividade no momento`
                },
                {
                    name: 'Link da foto de perfil',
                    value: `[Link da foto](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Idade da Conta | Mês/Dia/Ano',
                    value: user.user.createdAt.toLocaleDateString("pt-br")
                },
                {
                    name: 'Entrou no Server | Mês/Dia/Ano',
                    value: user.joinedAt.toLocaleDateString("pt-br")
                },
                {
                    name: 'Cargos no Servidor',
                    value: user.roles.cache.map(role => role.toString()).join(" ,")
                })

        await message.channel.send(embed)
    }}