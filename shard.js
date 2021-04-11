const Discord = require("discord.js")
const client = new Discord.Client()
const { token } = require("./config.json")
const db = require('quick.db')
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()

client.on("message", async (message) => {

    if (message.author.bot) return // no bots
    if (message.channel.type == "dm") return // no pv
    xp(message)

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    if (db.get(`afk_${message.author.id}+${message.guild.id}`)) {
        db.delete(`afk_${message.author.id}+${message.guild.id}`)
        message.channel.send(`${message.author}, o modo AFK foi desativado.`).then(msg => msg.delete({ timeout: 3000 })).catch(err => { return })
    }

    if (db.get(`afk_${message.author.id}+${message.author.id}`)) {
        db.delete(`afk_${message.author.id}+${message.author.id}`)
        message.channel.send(`${message.author}, o modo AFK Global foi desativado.`).then(msg => msg.delete({ timeout: 3000 })).catch(err => { return })
    }

    if (message.mentions.members.first()) {
        if (db.get(`afk_${message.mentions.members.first().id}+${message.mentions.members.first().id}`)) { // AFK Sistema Global
            const off = new Discord.MessageEmbed()
                .setColor('#B98823')
                .setTitle('🔇 AFK Global System')
                .addField(`${message.mentions.members.first().user.username} está offline no momento.`, '```fix\n' + `${db.get(`afk_${message.mentions.members.first().id}+${message.mentions.members.first().id}`)}` + '```')
            message.channel.send(`${message.author}`, off).then(msg => msg.delete({ timeout: 120000 })).catch(err => { return })
        } else if (db.get(`afk_${message.mentions.members.first().id}+${message.guild.id}`)) { // AFK Sistema Servidor
            const off = new Discord.MessageEmbed()
                .setColor('#B98823')
                .setTitle('🔇 AFK Server System')
                .addField(`${message.mentions.members.first().user.username} está offline no momento.`, '```fix\n' + `${db.get(`afk_${message.mentions.members.first().id}+${message.guild.id}`)}` + '```')
            message.channel.send(`${message.author}`, off).then(msg => msg.delete({ timeout: 120000 })).catch(err => { return })
        }
    }

    if (!message.content.startsWith(prefix)) return
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    if (db.get(`blacklist_${message.author.id}`)) {
        message.delete()
        const blocked = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Você está na blacklist.')
            .setDescription(`${message.author}, você não tem acesso a nenhum dos meus comandos.`)
        return message.channel.send(`${message.author}`, blocked).then(msg => msg.delete({ timeout: 6000 })).catch(err => { return })
    }

    function xp(message) {
        if (message) {
            let xp = db.add(`xp_${message.author.id}`, 2)
            let level = Math.floor(0.5 * Math.sqrt(xp))
            let lvl = db.get(`level_${message.author.id}`) || db.set(`level_${message.author.id}`, 1)
            if (level > lvl) {
                let newLevel = db.set(`level_${message.author.id}`, level)
                let xpchannel = db.get(`xpchannel_${message.guild.id}`)
                if (xpchannel === null) { return }
                if (!db.get(`xpchannel_${message.guild.id}`)) { return }
                if (client.channels.cache.get(xpchannel)) {
                    const newlevel = new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setDescription(`:tada: ${message.author}, você subiu para o level ${newLevel}!`)
                    client.channels.cache.get(xpchannel).send(newlevel)
                }
            }
        }
    }

    if (db.get(`blockchannel_${message.channel.id}`)) {
        message.delete()
        return message.channel.send(`${message.author}, meus comandos foram bloqueados neste canal.`).then(msg => msg.delete({ timeout: 4000 })).catch(err => { return })
    }

    const cmd = client.commands.get(command) || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(command))
    if (cmd) cmd.run(client, message, args)
    let customCommands = db.get(`guildConfigurations_${message.guild.id}.commands`)
    if (customCommands) {
        let customCommandsName = customCommands.find(x => x.name === command)
        if (customCommandsName) return message.channel.send(customCommandsName.response)
    }

    if (message.content.startsWith(`${prefix}check`)) { message.react("✅") }

    try {
        const commandFile = require(`./afksystem/${command}.js`)
        return commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./commands/${command}.js`)
        return commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./levelsystem/${command}.js`)
        return commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./games/${command}.js`)
        return commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./owner/${command}.js`)
        return commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./mpoints/${command}.js`)
        return commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./quiz/${command}.js`)
        return commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./animes/${command}.js`)
        return commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./help/${command}.js`)
        return commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./interacao/${command}.js`)
        return commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./discordjs/${command}.js`)
        return commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./random/${command}.js`)
        return commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./maya/${command}.js`)
        return commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./perfil/${command}.js`)
        return commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./reacoes/${command}.js`)
        return commandFile.run(client, message, args)
    } catch (err) { }

    try {
        const commandFile = require(`./moderation/${command}.js`)
        return commandFile.run(client, message, args)
    } catch (err) { }

    var linkhelpgit = 'https://github.com/rodycouto/MayaCommands/blob/main/README.md'
    const nocomand = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Você digitou um comando desconhecido')
        .setDescription(`Verifique a ortografia ou acesse minha [lista de comandos](${linkhelpgit})`)

    return message.channel.send(`${message.author}`, nocomand)
}) // Fim do Client.on('Message')

client.on("guildMemberRemove", (member) => {
    var canal = db.get(`leavechannel_${member.guild.id}`)
    if (canal === null) { return }

    if (!client.channels.cache.get(canal)) { return }

    var msgleave = db.get(`msgleave_${member.guild.id}`)
    if (msgleave === null) { msgleave = 'saiu do servidor.' }

    if (canal) {
        client.channels.cache.get(canal).send(`📢 ${member.user.tag} ${msgleave}`)
    }
})

client.on("guildMemberAdd", (member) => {
    var canal = db.get(`welcomechannel_${member.guild.id}`)
    if (canal === null) { return }

    if (!client.channels.cache.get(canal)) { return }

    var msgwelcome = db.get(`msgwelcome_${member.guild.id}`)
    if (msgwelcome === null) { msgwelcome = 'entrou no servidor.' }

    if (canal) {
        return client.channels.cache.get(canal).send(`📢 ${member} ${msgwelcome}`)
    }
})

client.on("guildMemberAdd", (member) => {
    var role = db.get(`autorole_${member.guild.id}`)
    if (role === null) { return }
    return member.roles.add(role)
})

client.on("ready", () => {
    let activities = [`Me marca que eu falo o prefixo`, `@maya`]
    i = 0
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: "WATCHING" }), 10000)
})

client.on("message", async (message) => {
    if (message.author.bot) return
    if (message.channel.type == "dm") return
    var prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }
    if (!message.content.startsWith('<')) return
    if (message.mentions.has(client.user.id)) { return message.channel.send('Prefixo atual: `' + prefix + '`') }
})

client.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    var helpgit = 'https://github.com/rodycouto/MayaCommands/blob/main/README.md'

    const newguild = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Meu prefixo padrão é `-`')
        .setDescription(`:tools: [Lista de comandos](${helpgit}) | Comece com -config`)
    return channel.send('**Oooopa, chegueeei!**', newguild)
})

client.once("ready", () => { console.log(`${client.user.tag} | OK!.`) })
client.login(token)