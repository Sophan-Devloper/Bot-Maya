const discord = require('discord.js')
const db = require('quick.db')

module.exports = {
	name: 'family5',
	aliases: ['adotar', 'adoção'],
	run: async (client, message, args) => {
		message.delete()

		const member = message.mentions.users.first()

		if (!member)
			return message.channel.send('Ei, me fala quem você quer convidar para sua familia.').then(msg => msg.delete({ timeout: 5000 }))

		if (member.id === client.user.id)
			return message.channel.send('É... Não sei se meu pai deixaria eu entrar para sua familia. Acho melhor nós ficarmos apenas na amizade.').then(msg => msg.delete({ timeout: 5000 }))

		if (member.id === message.author.id)
			return message.channel.send('Você quer entrar na sua familia? Não entendi...').then(msg => msg.delete({ timeout: 5000 }))

		let family5 = await db.fetch(`family5_${message.author.id}`)
		let family52 = await db.fetch(`family5_${member.id}`)

		if (family5 === null) {
			let gif = 'https://imgur.com/xmaQyK4.gif'
			let family5embed = new discord.MessageEmbed()
				.setColor('#DCDCDC')
				.setTitle('❤️ Novo Pedido de family5')
				.setDescription(`${message.author.username} está pedindo para ${member.username} entrar em sua familia.\n\n${member}, você aceita?`)
				.setThumbnail(gif)
				.setFooter('Clique no coração para aceitar o pedido.')
			message.channel.send(family5embed).then(msg => {
				msg.react('❤️')

				let reactions = (reaction, user) =>
					reaction.emoji.name === '❤️' && user.id === member.id
					message.delete()

				let coletor = msg.createReactionCollector(reactions)

				coletor.on('collect', cp => {

					db.set(`family5_${message.author.id}`, member.tag)
					db.set(`family5_${member.id}`, message.author.tag)

					let family5embed = new discord.MessageEmbed()
						.setColor('BLUE')
						.setTitle(':heart: A familia aumentou! :heart:')
						.setDescription(`${member} aceitou o pedido family5 de ${message.author}`)
					message.channel.send(family5embed)
				})
			})
		}
		if (family52 === null) {
			return
		}
	}
}

module.exports.help = {
	name: "family5"
}