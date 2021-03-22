// -- RIQUERES CONST -- -- RIQUERES CONST -- -- RIQUERES CONST -- -- RIQUERES CONST -- -- RIQUERES CONST //
const Discord = require("discord.js")                                                                    //
const client = new Discord.Client()                                                                      //
const DisTube = require('distube')                                                                       //
const ffm = require('ffmpeg-static')                                                                     //
const opus = require('@discordjs/opus')                                                                  //
const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true })                        //
const { token, default_prefix } = require("./config.json")                                               //
const db = require('quick.db')                                                                           //
// -- RIQUERES CONST -- -- RIQUERES CONST -- -- RIQUERES CONST -- -- RIQUERES CONST -- -- RIQUERES CONST //

// -- UPTIME ROBOT 24/7 -- -- UPTIME ROBOT 24/7 -- -- UPTIME ROBOT 24/7 -- -- UPTIME ROBOT 24/7 //
const express = require('express')                                                              //
const { measureMemory } = require("vm")                                                         //
const app = express()                                                                           //
app.listen(process.env.PORT)                                                                    //
app.get('/', (request, response) => {                                                           //
    const ping = new Date()                                                                     //
    ping.setHours(ping.getHours() - 3)                                                          //
    console.log(`Ping! ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`)  //
    response.sendStatus(200)                                                                    //
})                                                                                              //
// -- UPTIME ROBOT 24/7 -- -- UPTIME ROBOT 24/7 -- -- UPTIME ROBOT 24/7 -- -- UPTIME ROBOT 24/7 //

// -- CLIENT.ON MAIN FILE -- -- CLIENT.ON MAIN FILE -- -- CLIENT.ON MAIN FILE -- -- CLIENT.ON MAIN FILE -- -- CLIENT.ON MAIN FILE -- -- CLIENT.ON MAIN FILE -- -- CLIENT.ON MAIN FILE -- -- CLIENT.ON MAIN FILE --
client.on("message", async (message, queue, song) => {
    if (message.author.bot) return // no bots commands
    if (message.channel.type == "dm") // no dm's commands
        return message.channel.send("Eu sou uma bot, eu não consigo conversar no privado ainda.")

// -- PREFIX ACESS -- -- PREFIX ACESS -- -- PREFIX ACESS -- -- PREFIX ACESS //
    let prefix = db.get(`prefix_${message.guild.id}`)                       //
    if (prefix === null)                                                    //
        prefix = default_prefix                                             //
    if (!message.content.startsWith(prefix)) return                         //
    const args = message.content.slice(prefix.length).trim().split(/ +/g)   //
    const command = args.shift().toLowerCase()                              //
// -- PREFIX ACESS -- -- PREFIX ACESS -- -- PREFIX ACESS -- -- PREFIX ACESS //

// -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION --
    if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
        const bot = message.guild.members.cache.get(client.user.id)
        const embedperm = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setTitle('Dicas da Raphy')
            .setDescription('Para meu perfeito funcionamento, é necessário que eu tenha a permissão "Administrador" ativado.')
            .addFields(
                {
                    name: 'Como ativar a função Administrador',
                    value: '1 - Acesse as "Configurações do Servidor"\n2 - Clique em "Cargos"\n3 - Procure pelo meu cargo "Raphy"\n4 - A permissão "Administrador" é a última, desça até ela e ative.\n5 - Salve as alterações.'
                },
            )
            .setFooter(`Raphy Dicas`, message.client.user.displayAvatarURL())
        return message.channel.send('Eu preciso da função "ADMINISTRADOR" para liberar todas as minhas funções.').then(msg => message.channel.send(embedperm))
    }
// -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION --

// -- COMMAND FILE TO FOLDERS -- -- COMMAND FILE TO FOLDERS -- -- COMMAND FILE TO FOLDERS -- -- COMMAND FILE TO FOLDERS -- -- COMMAND FILE TO FOLDERS -- -- COMMAND FILE TO FOLDERS -- -- COMMAND FILE TO FOLDERS --
    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./games/${command}.js`)
        commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./owner/${command}.js`)
        commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./RPoints/${command}.js`)
        commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./quiz/${command}.js`)
        commandFile.run(client, message, args)
        commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./animes/${command}.js`)
        commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./help/${command}.js`)
        commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./interação/${command}.js`)
        commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./random/${command}.js`)
        commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./casamento/${command}.js`)
        commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./reações/${command}.js`)
        commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./moderation/${command}.js`)
        commandFile.run(client, message, args)
    } catch (err) { }
// -- COMMAND FILE TO FOLDERS -- -- COMMAND FILE TO FOLDERS -- -- COMMAND FILE TO FOLDERS -- -- COMMAND FILE TO FOLDERS -- -- COMMAND FILE TO FOLDERS -- -- COMMAND FILE TO FOLDERS -- -- COMMAND FILE TO FOLDERS --

// -- MUSIC SYSTEM -- -- MUSIC SYSTEM -- -- MUSIC SYSTEM -- -- MUSIC SYSTEM -- -- MUSIC SYSTEM -- -- MUSIC SYSTEM -- -- MUSIC SYSTEM -- -- MUSIC SYSTEM -- -- MUSIC SYSTEM -- -- MUSIC SYSTEM --
    if (["play", "p", "tocar", "m", "musica", "msc"].includes(command)) {
        message.delete()
        if (!message.member.voice.channel) return message.channel.send("Você tem que estar em um canal de voz para pedir alguma música")
        if (!args[0]) return message.channel.send("Me fala o que você quer ouvir")
        distube.play(message, args.join(" "))
    }

    if (["stop", "dc", "parar", "para", "disconectar", "disconnect"].includes(command)) {
        message.delete()
        const bot = message.guild.members.cache.get(client.user.id)
        if (!message.member.voice.channel) return message.channel.send("Você tem que estar em um canal de voz para pedir alguma música")
        if (bot.voice.channel !== message.member.voice.channel) message.channel.send("Você não está no mesmo canal que eu. Você não pode parar a música")
        distube.stop(message)
        message.channel.send(`${message.author.username} parou me desconectou.`)
    }

    if (["q", "queue", "playlist"].includes(command)) {
        let queue = distube.getQueue(message)
        if (!queue) return message.channel.send('Não tem nada tocando no momento.')
        var playlistembed = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setAuthor('Playlist Atual', 'https://imgur.com/9jiSb1D.png')
            .setDescription(queue.songs.map((song, id) => `**${id + 1}** - [${song.name}](${song.url}) - \`${song.formattedDuration}\``).join("\n"))
            .setFooter(message.author.username, message.author.displayAvatarURL())
        message.channel.send(playlistembed)
    }

    if (["s", "skip", "prox", "próximo", "proximo", "proxima", "próxima"].includes(command)) {
        let queue = distube.getQueue(message)
        if (!queue) return message.channel.send('Não tem nada tocando no momento 😦')
        distube.skip(message)
        message.channel.send(`Skipped! ${message.author.username} pulou a música`)
    }

    if (["loop", "repeat", "repetir", "dnv", "de novo"].includes(command)) {
        let queue = distube.getQueue(message)
        let mode = distube.setRepeatMode(message, parseInt(args[0]))
        if (!queue) return message.channel.send('Não tem nada tocando no momento 😦')
        distube.setRepeatMode(message, parseInt(args[0]))
        mode = mode ? mode == 2 ? "Repeat queue" : "Repeat song" : "Off"
        message.channel.send("Modo de repetição: `" + mode + "`")
    }

    if (['flanger', 'gate', 'hass', 'reverse', 'mcompand', 'phaser', 'tremolo', 'surround', 'earwax', `3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)) {
        let queue = distube.getQueue(message)
        if (!queue) return message.channel.send('Não tem nada tocando no momento.')
        let filter = distube.setFilter(message, command);
        message.channel.send("Filtro Atual: " + (filter || "Off"));
    }

    if (["v", "vol", "volume"].includes(command)) {
        let queue = distube.getQueue(message)
        if (!queue) return message.channel.send('Não tem nada tocando no momento.')
        distube.setVolume(message, args[0])
        message.channel.send(`Volume definido em ${args[0]}%`)
    }

    if (["shuffle", "aleatorio"].includes(command)) {
        let queue = distube.getQueue(message)
        if (!queue) return message.channel.send('Não tem nada tocando no momento.')
        distube.shuffle(message);
        message.channel.send(`${message.author.username} colocou a playlist em modo aleatório`)
    }

    if (command == "autoplay") {
        let queue = distube.getQueue(message)
        if (!queue) return message.channel.send('Não tem nada tocando no momento.')
        let mode = distube.toggleAutoplay(message);
        message.channel.send("Autoplay definido para: " + (mode ? "On" : "Off") + "");
    }

    if (["r", "repeat", "again"].includes(command)) {
        let queue = distube.getQueue(message)
        if (!queue) return message.channel.send('Não tem nada tocando no momento.')
        let mode = distube.setRepeatMode(message, parseInt(args[0]));
        mode = mode ? mode == 2 ? "Repeat queue" : "Repeat song" : "Off";
        message.channel.send("Modo de repetição: `" + mode + "`")
    }

    if (["resume", "unpause", "despause"].includes(command)) {
        message.delete()
        let queue = distube.getQueue(message)
        if (!queue) return message.channel.send('Não tem nada tocando no momento 😦')
        let tocando = distube.isPlaying(message)
        if (tocando) return message.channel.send('A música já está tocando. Para pausar, use o comando `-pause`')
        const bot = message.guild.members.cache.get(client.user.id)
        if (!message.member.voice.channel) return message.channel.send("Você tem que estar em um canal de voz para despausar a música")
        if (bot.voice.channel !== message.member.voice.channel) message.channel.send("Você não está no mesmo canal que eu. Você não despausar a música")
        distube.resume(message)
        message.channel.send(`${message.author.username} despausou a música.`)
    }

    if (["pause"].includes(command)) {
        message.delete()
        let queue = distube.getQueue(message)
        if (!queue) return message.channel.send('Não tem nada tocando no momento 😦')
        let pause = distube.isPaused(message)
        if (pause) return message.channel.send('A música já está pausada, recomendo usar o comando `-resume ou -despause`')
        const bot = message.guild.members.cache.get(client.user.id)
        if (bot.voice.channel !== message.member.voice.channel) message.channel.send("Você não está no mesmo canal que eu. Você não pode pausar a música")
        if (!message.member.voice.channel) return message.channel.send("Você tem que estar em um canal de voz para pausar a música")
        distube.pause(message)
        message.channel.send(`${message.author.username} pausou a música. Use *-despause* para despausar.`)
    }
// -- MUSIC SYSTEM -- -- MUSIC SYSTEM -- -- MUSIC SYSTEM -- -- MUSIC SYSTEM -- -- MUSIC SYSTEM -- -- MUSIC SYSTEM -- -- MUSIC SYSTEM -- -- MUSIC SYSTEM -- -- MUSIC SYSTEM -- -- MUSIC SYSTEM -- -- MUSIC SYSTEM --    
})
// -- CLIENT.ON MAIN FILE -- -- CLIENT.ON MAIN FILE -- -- CLIENT.ON MAIN FILE -- -- CLIENT.ON MAIN FILE -- -- CLIENT.ON MAIN FILE -- -- CLIENT.ON MAIN FILE -- -- CLIENT.ON MAIN FILE -- -- CLIENT.ON MAIN FILE --

// -- STATUS MUSIC -- -- STATUS MUSIC -- -- STATUS MUSIC -- -- STATUS MUSIC -- -- STATUS MUSIC -- -- STATUS MUSIC -- -- STATUS MUSIC -- -- STATUS MUSIC -- -- STATUS MUSIC -- -- STATUS MUSIC -- -- STATUS MUSIC --
const status = (queue) => `Volume: ${queue.volume}% | Filter: ${queue.filter || "Off"} | Loop: ${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"} | Autoplay: ${queue.autoplay ? "On" : "Off"}`
distube
    .on("playSong", (message, queue, song) => {
        var tocando = new Discord.MessageEmbed()
            .setColor('DCDCDC')
            .setAuthor(`Música tocando...`, 'https://imgur.com/GSQBpD8.gif')
            .setThumbnail('https://imgur.com/JvA3pki.gif')
            .setTitle(song.name)
            .setURL(song.url)
            .addFields(
                {
                    name: 'Status Atual',
                    value: status(queue)
                }
            )
            .setFooter(`${message.author.username} | Duração: ${song.formattedDuration}`, message.author.displayAvatarURL())
        message.channel.send(tocando)
    })
    .on("addSong", (message, queue, song) => {
        var addsongembed = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setAuthor(`${message.author.username} adicionou uma música a playlist`)
            .setTitle(song.name)
            .setURL(song.url)
            .setDescription(`Duração: ${song.formattedDuration}`)
            .setFooter('Use -playlist/-queue para acessar a playlist')
        message.channel.send(addsongembed)
    })

    .on("playList", (message, queue, playlist, song) => {
        var plembed = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setAuthor('Playlist atual', 'https://imgur.com/9jiSb1D.png')
            .setDescription(playlist.songs.length)
            .addFields(
                {
                    name: 'Tocando agora',
                    value: `${song.name}\nDuração: ${song.formattedDuration}`
                },
            )
            .setFooter(message.author.username, message.author.displayAvatarURL())
        message.channel.send(plembed)
    })
    .on("addList", (message, queue, playlist) => message.channel.send(`Adicionou \`${playlist.name}\` playlist (${playlist.songs.length} música/s) para a playlist \n${status(queue)}`))
    .on("searchResult", (message, result) => {
        let i = 0
        message.channel.send(`** ${message.author.username},  escolha uma das opções abaixo**\n \n${result.map(song => `**${++i}** - ${song.name} | \`${song.formattedDuration}\``).join("\n")}\n \n*Envie qualquer das opções dentro de 60 segundos.*`).then(msg => msg.delete({ timeout: 60000 }))
    })
    .on("searchCancel", (message) => message.channel.send(`A resposta não é um número da playlist, pesquisa cancelada.`).then(msg => msg.delete({ timeout: 5000 })))
    .on("error", (message, e) => {
        console.error(e)
        message.channel.send("**ASSIONE O SUPORTE!** `-bug`\n \nUm erro foi encontrado: " + e)
    })
// -- STATUS MUSIC -- -- STATUS MUSIC -- -- STATUS MUSIC -- -- STATUS MUSIC -- -- STATUS MUSIC -- -- STATUS MUSIC -- -- STATUS MUSIC -- -- STATUS MUSIC -- -- STATUS MUSIC -- -- STATUS MUSIC -- -- STATUS MUSIC --    

// -- Status Profile --  -- Status Profile -- -- Status Profile -- -- Status Profile -- -- Status Profile //
client.on("ready", () => {                                                                                //
    let activities = [                                                                                    //
        `Estou em ${client.guilds.cache.size} servidores!`,                                               //
        `Estou atendendo ${client.channels.cache.size} canais!`,                                          //
        `Estou conectada a ${client.users.cache.size} usuários!`                                          //
    ],                                                                                                    //
        i = 0;                                                                                            //
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {                 //
        type: "WATCHING"                                                                                  //
    }), 1000 * 20)                                                                                        //
    client.user                                                                                           //
        .setStatus("idle")                                                                                //
        .catch(console.error)                                                                             //
    console.log("Online!")                                                                                //
})                                                                                                        //
// -- Status Profile --  -- Status Profile -- -- Status Profile -- -- Status Profile -- -- Status Profile //

client.login(token)