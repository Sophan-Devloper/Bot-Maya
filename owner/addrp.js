const db = require('quick.db')

module.exports = {
    name: "addrp",
    description: "add rp",

    async run(client, message, args) {
         

        let member = message.mentions.users.first()

        if (!member) {
            return message.channel.send('Você se esqueceu do `@user`').then(msg => msg.delete({ timeout: 6000 }))
        }

        if (!args[1]) {
            return message.channel.send('Qual a quantidade?').then(msg => msg.delete({ timeout: 5000 }))
        }
        if (isNaN(args[1])) {
            return message.channel.send('Isso não é um número').then(msg => msg.delete({ timeout: 4000}))
        }

        var amount = args[1]

        db.add(`rp_${member.id}`, amount)

        message.channel.send(`Feito.`)
    }
}