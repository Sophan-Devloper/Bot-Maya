// -- RIQUERES CONST -- -- RIQUERES CONST -- -- RIQUERES CONST -- -- RIQUERES CONST -- -- RIQUERES CONST -- RIQUERES CONST -- -- RIQUERES CONST -- -- RIQUERES CONST -- -- RIQUERES CONST -- -- RIQUERES CONST 
const Discord = require("discord.js")
const client = new Discord.Client()
const { token, default_prefix } = require("./config.json")
const db = require('quick.db')
const canvacord = require('canvacord')
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
// -- RIQUERES CONST -- -- RIQUERES CONST -- -- RIQUERES CONST -- -- RIQUERES CONST -- -- RIQUERES CONST -- RIQUERES CONST -- -- RIQUERES CONST -- -- RIQUERES CONST -- -- RIQUERES CONST -- -- RIQUERES CONST 

// -- UPTIME ROBOT 24/7 -- -- UPTIME ROBOT 24/7 -- -- UPTIME ROBOT 24/7 -- -- UPTIME ROBOT 24/7 -- UPTIME ROBOT 24/7 -- -- UPTIME ROBOT 24/7 -- -- UPTIME ROBOT 24/7 -- -- UPTIME ROBOT 24/7
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
// -- UPTIME ROBOT 24/7 -- -- UPTIME ROBOT 24/7 -- -- UPTIME ROBOT 24/7 -- -- UPTIME ROBOT 24/7 -- UPTIME ROBOT 24/7 -- -- UPTIME ROBOT 24/7 -- -- UPTIME ROBOT 24/7 -- -- UPTIME ROBOT 24/7

// -- CLIENT.ON MAIN FILE -- -- CLIENT.ON MAIN FILE -- -- CLIENT.ON MAIN FILE -- -- CLIENT.ON MAIN FILE -- -- CLIENT.ON MAIN FILE -- -- CLIENT.ON MAIN FILE -- -- CLIENT.ON MAIN FILE -- -- CLIENT.ON MAIN FILE --
client.on("message", async (message, queue, song) => {

    // const xp = require('./events&functions/xp')
    if (message.author.bot) return // no bots commands
    if (message.channel.type == "dm") // no dm's commands
        return message.channel.send("Eu sou uma bot, eu não consigo conversar no privado ainda.")
    xp(message)

    var r = 'maya'
    var r1 = 'Maya'
    var r2 = 'MAYA'

    var list = [
        'ooi',
        'euzinha',
        'to aqui',
        'oláá',
        'Estou aqui, o que quieres?',
        `Como posso te ajudar? Qualquer coisa só chamar o help`,
        'Alguém me chamou?',
        'Porquê me chamas?',
        'Aaaah, eu to com sono:sleeping:',
        'ooooi, eu estou tomando sorvete agora, no que posso ajudar?',
        'Eu estava dormindo... O que você precisa?',
        'Estou aqui, como posso ajudar?',
        'Oiii, parece que eu ouvi meu nome',
        'oooi, estou aqui',
        'Ouvi meu nome c.c',
        'Olááá, estou aqui para ajudar, quem me chamas?'
    ]

    var msgmaya = list[Math.floor(Math.random() * list.length)]

    if (message.content.includes === 'maya') {
        message.react('♥️')
        message.channel.send(msgmaya)
    }

    if (message.content.includes === 'Maya') {
        message.react('♥️')
        message.channel.send(msgmaya)
    }

    if (message.content.includes === 'MAYA') {
        message.react('♥️')
        message.channel.send(msgmaya)
    }

    if (message.content.includes("loli")) {
        message.channel.send("Eu li Loli? Ligando 190...").then(msg => msg.delete({ timeout: 2000 }))
    }

    if (message.content.includes("bom dia")) { message.channel.send("Bom diiia") }
    if (message.content.includes("boa tarde")) { message.channel.send("Boa taarde") }
    if (message.content.includes("boa noite")) { message.channel.send("Boa noitee") }
    if (message.content.includes("Bom dia")) { message.channel.send("Bom diiia") }
    if (message.content.includes("Boa tarde")) { message.channel.send("Boa taarde") }
    if (message.content.includes("Boa noite")) { message.channel.send("Boa noitee") }
    if (message.content === 'oi') return message.channel.send(`oooi ${message.author.username}`)

    // -- PREFIX ACESS -- -- PREFIX ACESS -- -- PREFIX ACESS -- -- PREFIX ACESS -- PREFIX ACESS -- -- PREFIX ACESS -- -- PREFIX ACESS -- -- PREFIX ACESS -- PREFIX ACESS -- -- PREFIX ACESS -- -- PREFIX ACESS -- -- PREFIX ACESS
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = default_prefix
    if (!message.content.startsWith(prefix)) return
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    // -- PREFIX ACESS -- -- PREFIX ACESS -- -- PREFIX ACESS -- -- PREFIX ACESS -- PREFIX ACESS -- -- PREFIX ACESS -- -- PREFIX ACESS -- -- PREFIX ACESS -- PREFIX ACESS -- -- PREFIX ACESS -- -- PREFIX ACESS -- -- PREFIX ACESS

    // -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION --
    if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
        const bot = message.guild.members.cache.get(client.user.id)
        const embedperm = new Discord.MessageEmbed()
            .setColor('#DCDCDC')
            .setTitle('Dicas da Maya')
            .setDescription('Para meu perfeito funcionamento, é necessário que eu tenha a permissão "Administrador" ativado.')
            .addFields(
                {
                    name: 'Como ativar a função Administrador',
                    value: '1 - Acesse as "Configurações do Servidor"\n2 - Clique em "Cargos"\n3 - Procure pelo meu cargo "Maya"\n4 - A permissão "Administrador" é a última, desça até ela e ative.\n5 - Salve as alterações.'
                },
            )
            .setFooter(`Maya Dicas`, message.client.user.displayAvatarURL())
        return message.channel.send('Eu preciso da função "ADMINISTRADOR" para liberar todas as minhas funções.').then(msg => message.channel.send(embedperm))
    }
    // -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION -- -- ADMINISTRATION PERMISSION --

    function xp(message) {
        if (message) {
            let xp = db.add(`xp_${message.author.id}`, 2)
            let level = Math.floor(0.5 * Math.sqrt(xp))
            let lvl = db.get(`level_${message.author.id}`) || db.set(`level_${message.author.id}`, 1)
            if (level > lvl) {
                let newLevel = db.set(`level_${message.author.id}`, level);
                message.channel.send(`:tada: ${message.author.username}, você subiu para o level ${newLevel}!`).then(m => m.delete({ timeout: 5000 }))
            }
        }
    }

    // -- COMMAND FILE TO FOLDERS -- -- COMMAND FILE TO FOLDERS -- -- COMMAND FILE TO FOLDERS -- -- COMMAND FILE TO FOLDERS -- -- COMMAND FILE TO FOLDERS -- -- COMMAND FILE TO FOLDERS -- -- COMMAND FILE TO FOLDERS --
    const cmd =
        client.commands.get(command) ||
        client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(command));
    if (cmd) cmd.run(client, message, args);
    let customCommands = db.get(`guildConfigurations_${message.guild.id}.commands`)
    if (customCommands) {
        let customCommandsName = customCommands.find(x => x.name === command)
        if (customCommandsName) return message.channel.send(customCommandsName.response)
    }

    if (message.content.startsWith(`${prefix}check`)) {
        message.react("✅")
    }

    if (["triggered", "trig"].includes(command)) {
        message.delete()
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.trigger(avatar);
        let attachment = new Discord.MessageAttachment(image, "triggered.gif");
        return message.channel.send("Carregando...").then(m => m.delete({ timeout: 5000 })).then(m => m.channel.send(attachment))
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
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null)
        prefix = "-"
    let leavechannel = member.guild.channels.cache.find(channel => channel.name === "saidas")
    if (!leavechannel) {
        return member.guild.owner.send('Hey, eu não consigo mandar boas-vindas no seu servidor. Por favor, crie um chat com o nome `welcome` e um com o nome `saidas`. \n\nEu posso te ajudar com isso, coloque isso em qualquer canal do seu servidor: \n`' + prefix + 'createchannel welcome`\n`' + prefix + 'createchannel saidas` \n\n *Sistema setwelcomechannel em breve*')
    }
    if (leavechannel) {
        let leaveembed = await new Discord.MessageEmbed() // Embed Saída
            .setColor("#FF0000")
            .setAuthor(member.user.tag, member.user.displayAvatarURL())
            .setImage("https://imgur.com/BGeYfY4.gif")
            .setDescription(`**${member.user.username}**, saiu do servidor! <:fzoq2:746361736935768085> \nPoxa, nem me deu tchau :cry:`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
        await leavechannel.send(leaveembed)
    }
})

client.on("guildMemberAdd", (member) => {
    var canal = db.get(`welcomechannel_${member.guild.id}`)
    if (canal === null) {return false}

    var msgwelcome = db.get(`msgwelcome_${member.guild.id}`)
    if (msgwelcome === null) { msgwelcome = '`Os administradores são preguiçosos e não escreveram nada aqui`' }

    if (canal) {
        const newembed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setAuthor(member.user.tag + ' entrou no servidor', member.user.displayAvatarURL())
            .setDescription('' + msgwelcome)

        client.channels.cache.get(canal).send(newembed)
    }
})
// -- LEAVE AND WELCOME SYSTEM -- -- LEAVE AND WELCOME SYSTEM -- -- LEAVE AND WELCOME SYSTEM -- -- LEAVE AND WELCOME SYSTEM -- -- LEAVE AND WELCOME SYSTEM -- -- LEAVE AND WELCOME SYSTEM -- -- LEAVE AND WELCOME SYSTEM -- 

// -- Status Profile --  -- Status Profile -- -- Status Profile -- -- Status Profile -- -- Status Profile 
client.on("message", async message => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null)
        prefix = default_prefix
    let activities = [
        `${prefix}help ou ${prefix}setprefix`
    ],
        i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
    }), 1000 * 7)
    client.user
        .setStatus("idle")
        .catch(console.error)
})
// -- Status Profile --  -- Status Profile -- -- Status Profile -- -- Status Profile -- -- Status Profile //

client.on("message", async (message, args) => {
    let prefi = db.get(`prefix_${message.guild.id}`)
    if (prefi === null)
        prefi = default_prefix
    if (message.author.bot) return false
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false
    if (message.mentions.has(client.user.id)) {
        message.channel.send('Prefixo atual: `' + prefi + '`').then(msg => msg.delete({ timeout: 3000 }))
    }
})

client.on("ready", () => { console.log("Ok.") })

client.login(token)