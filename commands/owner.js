exports.run = async (client, message, args) => {
    message.channel.send(`Nome no servidor: ${message.guild.owner.user.username}\nNome da conta: ${message.guild.owner.user.tag}`).then(m => m.delete({timeout: 8000})).catch(err => { return })
}