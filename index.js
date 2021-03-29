const Discord = require("discord.js")
const client = new Discord.Client()
const { token, default_prefix } = require("./config.json")
const db = require('quick.db')
const canvacord = require('canvacord')
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()

const express = require('express')
const { measureMemory } = require("vm")
const app = express()
app.listen(process.env.PORT)
app.get('/', (request, response) => {
    const ping = new Date()
    ping.setHours(ping.getHours() - 3)
    console.log(`Ping! ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`)
    response.sendStatus(200)
})

client.on("message", async (message) => {

    if (message.author.bot) return // no bots commands
    if (message.channel.type == "dm") {// no dm's commands
        const dmembed = new Discord.MessageEmbed()
            .set('#FF000')
            .setTitle('Eu não posso responder mensagens no privado.')
        return message.channel.send(dmembed)
    }
    xp(message)

    var r = 'maya'
    var r1 = 'Maya'
    var r2 = 'MAYA'
    var list = ['ooi', 'euzinha', 'to aqui', 'oláá', 'Estou aqui, o que quieres?', `Como posso te ajudar? Qualquer coisa só chamar o help`, 'Alguém me chamou?', 'Porquê me chamas?', 'Aaaah, eu to com sono:sleeping:', 'ooooi, eu estou tomando sorvete agora, no que posso ajudar?', 'Eu estava dormindo... O que você precisa?', 'Estou aqui, como posso ajudar?', 'Oiii, parece que eu ouvi meu nome', 'oooi, estou aqui', 'Ouvi meu nome c.c', 'Olááá, estou aqui para ajudar, quem me chamas?']
    var msgmaya = list[Math.floor(Math.random() * list.length)]

    if (message.content.includes === 'maya') { message.react('♥️').then(msg => msg.channel.send(msgmaya)) }
    if (message.content.includes === 'Maya') { message.react('♥️').then(msg => msg.channel.send(msgmaya)) }
    if (message.content.includes === 'MAYA') { message.react('♥️').then(msg => msg.channel.send(msgmaya)) }
    if (message.content.includes("loli")) { message.channel.send("Eu li Loli? Ligando 190...").then(msg => msg.delete({ timeout: 2000 })).catch(err => { return }) }
    if (message.content.includes("bom dia")) { message.channel.send("Bom diiia") }
    if (message.content.includes("boa tarde")) { message.channel.send("Boa taarde") }
    if (message.content.includes("boa noite")) { message.channel.send("Boa noitee") }
    if (message.content.includes("Bom dia")) { message.channel.send("Bom diiia") }
    if (message.content.includes("Boa tarde")) { message.channel.send("Boa taarde") }
    if (message.content.includes("Boa noite")) { message.channel.send("Boa noitee") }
    if (message.content === 'oi') return message.channel.send(`oooi ${message.author.username}`)

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = default_prefix
    if (!message.content.startsWith(prefix)) return
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
        const bot = message.guild.members.cache.get(client.user.id)

        const embedperm = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Como ativar a função Administrador')
            .setDescription('1 - Acesse as "Configurações do Servidor"\n2 - Clique em "Cargos"\n3 - Procure pelo meu cargo "Maya"\n4 - A permissão "Administrador" é a última, desça até ela e ative.\n5 - Salve as alterações.')
            .setFooter(`Maya Dicas`, message.client.user.displayAvatarURL())

        const adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Eu preciso da função "ADMINISTRADOR" para liberar todas as minhas funções.')

        return message.channel.send(adm).then(msg => message.channel.send(embedperm))
    }
    // -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION --

    function xp(message) {
        if (message) {
            let xp = db.add(`xp_${message.author.id}`, 2)
            let level = Math.floor(0.5 * Math.sqrt(xp))
            let lvl = db.get(`level_${message.author.id}`) || db.set(`level_${message.author.id}`, 1)
            if (level > lvl) {
                let newLevel = db.set(`level_${message.author.id}`, level);
                message.channel.send(`:tada: ${message.author.username}, você subiu para o level ${newLevel}!`).then(m => m.delete({ timeout: 5000 })).catch(err => { return })
            }
        }
    }

    const cmd = client.commands.get(command) || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(command))
    if (cmd) cmd.run(client, message, args)
    let customCommands = db.get(`guildConfigurations_${message.guild.id}.commands`)
    if (customCommands) {
        let customCommandsName = customCommands.find(x => x.name === command)
        if (customCommandsName) return message.channel.send(customCommandsName.response)
    }

    if (message.content.startsWith(`${prefix}check`)) { message.react("✅") }

    if (["triggered", "trig"].includes(command)) {
        message.delete()
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' })
        let image = await canvacord.Canvas.trigger(avatar)
        let attachment = new Discord.MessageAttachment(image, "triggered.gif")
        return message.channel.send("Carregando...").then(m => m.delete({ timeout: 4000 })).catch(err => { return }).then(m => m.channel.send(attachment))
    }

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./levelsystem/${command}.js`)
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
        const commandFile = require(`./mpoints/${command}.js`)
        commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./quiz/${command}.js`)
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
        const commandFile = require(`./discordjs/${command}.js`)
        commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./random/${command}.js`)
        commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./perfil/${command}.js`)
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
})

client.on("guildMemberRemove", async (member, message) => {
    var canal = db.get(`leavechannel_${member.guild.id}`)
    if (canal === null) { return false }

    if (!client.channels.cache.get(canal)) { return false }

    var msgleave = db.get(`msgleave_${member.guild.id}`)
    if (msgleave === null) { msgleave = '`Os Adms não escreveram nada aqui`' }

    if (canal) {
        const leaveembed = new Discord.MessageEmbed()
            .setColor('GRAY')
            .setAuthor(member.user.tag + ' saiu do servidor', member.user.displayAvatarURL())
            .setDescription('' + msgleave)

        client.channels.cache.get(canal).send(leaveembed)
    }
})

client.on("guildMemberAdd", (member) => {
    var canal = db.get(`welcomechannel_${member.guild.id}`)
    if (canal === null) { return false }

    if (!client.channels.cache.get(canal)) { return false }

    var msgwelcome = db.get(`msgwelcome_${member.guild.id}`)
    if (msgwelcome === null) { msgwelcome = '`Os administradores são preguiçosos e não escreveram nada aqui`' }

    if (canal) {
        const joinembed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setAuthor(member.user.tag + ' entrou no servidor', member.user.displayAvatarURL())
            .setDescription('' + msgwelcome)

        client.channels.cache.get(canal).send(joinembed)
    }
})

client.on("guildMemberAdd", (member) => {
    var role = db.get(`autorole_${member.guild.id}`)
    if (role === null) { return false }

    member.roles.add(role)
})

client.on("message", async message => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    let activities = [
        `${prefix}help`,
        `${prefix}setprefix`
    ]
    i = 0
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: "WATCHING" }), 10000)
    client.user.setStatus("idle").catch(console.error)
})

client.on("message", async (message, args) => {
    let prefi = db.get(`prefix_${message.guild.id}`)
    if (prefi === null) { prefi = default_prefix }
    if (message.author.bot) return false
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false
    if (message.mentions.has(client.user.id)) { message.channel.send('Prefixo atual: `' + prefi + '`').then(msg => msg.delete({ timeout: 3000 })).catch(err => { return }) }
})

client.on("ready", () => { console.log("Ok.") })

client.login(token)