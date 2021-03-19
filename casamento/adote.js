const discord = require('discord.js')
const db = require('quick.db')

module.exports = {
	name: 'adote',
	aliases: ['adotar', 'adoção'],
	run: async (client, message, args) => {
		message.delete()

		const member = message.mentions.users.first()

		if (db.get(`adote_${message.author.id}`))
			return message.channel.send("Você não pode adotar mais ninguém. No momento o bancos de dados está limitado a 1 adoção por pessoa. Desculpa :cry:").then(msg => msg.delete({ timeout: 6000 }))

		if (!member)
			return message.channel.send('Ei, me fala quem você quer adotar.').then(msg => msg.delete({ timeout: 5000 }))

		if (member.id === client.user.id)
			return message.channel.send('É... Não sei se meu pai deixaria você me adotar. Acho melhor a gente ser apenas amigos.').then(msg => msg.delete({ timeout: 5000 }))

		if (member.id === message.author.id)
			return message.channel.send('Poxa, você não pode adotar você mesmo.').then(msg => msg.delete({ timeout: 5000 }))

		let adote = await db.fetch(`adote_${message.author.id}`)
		let adote2 = await db.fetch(`adote_${member.id}`)

		if (adote === null) {
			let gif = 'https://imgur.com/xmaQyK4.gif'
			let adoteembed = new discord.MessageEmbed()
				.setColor('#DCDCDC')
				.setTitle('❤️ Novo Pedido de Adoção ❤️')
				.setDescription(`${message.author.username} está pedindo para ${member.username} entrar em sua familia.\n\n${member}, você aceita?`)
				.setThumbnail(gif)
				.setFooter('Clique no coração para aceitar o pedido.')
			message.channel.send(adoteembed).then(msg => {
				msg.react('❤️')

				let reactions = (reaction, user) =>
					reaction.emoji.name === '❤️' && user.id === member.id

				let coletor = msg.createReactionCollector(reactions)

				coletor.on('collect', cp => {

					db.set(`adote_${message.author.id}`, member.id)
					db.set(`adote_${member.id}`, message.author.id)

					let casados = new discord.MessageEmbed()
						.setColor('BLUE')
						.setTitle(':heart: Uma nova familia acaba de se formar :heart:')
						.setDescription(`${member} aceitou o pedido de adoção de ${message.author}`)
					message.channel.send(casados)
				})
			})
		}
		if (adote2 === null) {
			return
		} else {
			message.channel.send('Este usuário já está em uma familia.').then(msg => msg.delete({timeout: 5000}))
		}
	}
}

module.exports.help = {
	name: "adote"
}