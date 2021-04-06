const { get } = require("request-promise-native")
const translate = require('@iamtraction/google-translate')
const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (!args.length) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const noargs = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Siga o formato correto')
            .setDescription('`' + prefix + 'anime [Seu anime aqui]`\nExemplo: `' + prefix + 'anime Boku No Hero Academia`')
        return message.channel.send(noargs).then(msg => msg.delete({ timeout: 10000 })).catch(err => { return })
    }
    //DEFINE OPTIONS

    let option = {
        url: `https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`,
        method: `GET`,
        headers: {
            'Content-Type': "application/vnd.api+json",
            'Accept': "application/vnd.api+json"
        },
        json: true
    }
    const loading = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription('🔄 Pesquisando seu anime...')
    message.channel.send(loading).then(msg => {
        get(option).then(mat => {
            try {
                var pt = 'pt'
                var text = `${mat.data[0].attributes.synopsis}`
                if (!text) { text = 'Não há descrição no banco de dados' }
                translate(`${mat.data[0].attributes.synopsis}`, { to: pt }).then(res => {
                    if (mat.data[0].attributes.status = 'finished') { mat.data[0].attributes.status = 'Completo' }
                    let embed = new Discord.MessageEmbed()
                        .setColor('BLUE')
                        .setTitle(mat.data[0].attributes.titles.en ? mat.data[0].attributes.titles.en : args)
                        .setDescription(`${res.text}`)
                        .setThumbnail(mat.data[0].attributes.posterImage.original)
                        .addField('⭐ Nota Geral', mat.data[0].attributes.averageRating ? mat.data[0].attributes.averageRating : "⠀", true)
                        .addField('🧩 Status', mat.data[0].attributes.status ? mat.data[0].attributes.status : "⠀", true)
                        .addField('📂 Tipo', mat.data[0].attributes.showType, true)
                        .addField('📝 Lançamento', `${mat.data[0].attributes.startDate ? mat.data[0].attributes.startDate : '⠀'} até ${mat.data[0].attributes.endDate ? mat.data[0].attributes.endDate : 'Sem data prevista'}`, true)
                        .addField('💿 Próximo lançamento', mat.data[0].attributes.nextRelease ? mat.data[0].attributes.nextRelease : "⠀", true)
                        .addField('💽 Epsódios', mat.data[0].attributes.episodeCount ? mat.data[0].attributes.episodeCount : "⠀", true)
                        .addField('⏲️ Duração Média', mat.data[0].attributes.episodeLength ? mat.data[0].attributes.episodeLength : " ", true)
                        .addField('🏆 Ranking', mat.data[0].attributes.ratingRank ? mat.data[0].attributes.ratingRank : "Sem ranking", true)
                        .setFooter('Traduzido por Google Tradutor', displayAvatarURL('https://i.imgur.com/oZA4FaQ.png'))
                    message.channel.send(`${message.author}, eu encontrei isso.`, embed)
                    msg.delete()
                })
            } catch (err) {
                msg.delete()
                const cancel = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('Não encontrei nenhum anime com esse nome.')
                console.log(err)
                return message.channel.send(cancel)
            }
        })
    })
}
