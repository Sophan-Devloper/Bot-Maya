const axios = require('axios');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "corona",
    category: "extra",
    run: async (client, message, args) => {
        message.delete()
        const baseUrl = "https://corona.lmao.ninja/v2";

        let url, response, corona;

        try {
            url = args[0] ? `${baseUrl}/countries/${args[0]}`:`${baseUrl}/all`
            response = await axios.get(url)
            corona = response.data
        } catch (error) {
            return message.channel.send(`***${args[0]}*** não existe ou os dados não foram publicados pela OMS (Organização Mundial da Saúde`)
        }

        const embed = new MessageEmbed()
            .setTitle(args[0] ? `${args[0].toUpperCase()} Status` : 'Dados Mundiais da COVID-19')
            .setColor('#fb644c')
            .setThumbnail(args[0] ? corona.countryInfo.flag : 'https://i.giphy.com/YPbrUhP9Ryhgi2psz3.gif')
            .addFields(
                {
                    name: '⛑️ Casos',
                    value: corona.cases.toLocaleString()
                },
                {
                    name: '😥 Mortes',
                    value: corona.deaths.toLocaleString()
                },
                {
                    name: '🥳 Recuperados',
                    value: corona.recovered.toLocaleString()
                },
                {
                    name: '✅ Ativos',
                    value: corona.active.toLocaleString()
                },               
                {
                    name: '🚨 Casos Críticos',
                    value: corona.critical.toLocaleString()
                },
                {
                    name: ':heart: Recuperados Hoje',
                    value: corona.todayRecovered.toLocaleString().replace("-", "")
                },
                {
                    name: ':broken_heart: Mortes Hoje',
                    value: corona.todayDeaths.toLocaleString()
                })
            .setFooter(message.author.username, message.author.displayAvatarURL())

        await message.channel.send(embed).then(msg => message.delete({timeout: 20000})).then(msg => message.channel.send('Lave as mãos para não virar estatística'))
    }}