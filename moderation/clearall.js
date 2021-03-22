const Discord = require('discord.js')
exports.run = async (client, message, args) => {
    message.delete()

    if (!message.author.id === message.guild.owner.id)
        return message.channel.send('Apenas o dono do servidor pode apagar completamente todo o chat.')

    let messages = 0
    let i = true
    while (i) {
        let deleteAble = await message.channel.messages.fetch({ limit: 100 })
        if (deleteAble.size < 100) {
            await message.channel.bulkDelete(deleteAble).catch(err => {
                if (err)
                    return message.channel.send('❌ **#ERROR!** ❌ **#ERROR!** ❌\n \nO Discord permite que eu apague mensagem de até 14 dias.\n \n⚙️ *Developers Error by: console.log*\n\n' + err).then(message => message.delete({ timeout: 15000 }))
            })
            messages += deleteAble.size;
            i = false;
            message.channel.send('Deletei um total de ' + messages + ' mensagens.').then(m => m.delete({ timeout: 5000 }))
            messages = 0;
            return;
        }
        await message.channel.bulkDelete(deleteAble)
        messages += deleteAble.size
    }
}