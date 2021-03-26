const discord = require('discord.js')
const db = require('quick.db')

module.exports = {
	name: 'family4',
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

		let family4 = await db.fetch(`family4_${message.author.id}`)
		let family42 = await db.fetch(`family4_${member.id}`)

		if (family4 === null) {
			let gif = 'https://imgur.com/xmaQyK4.gif'
			let family4embed = new discord.MessageEmbed()
				.setColor('#DCDCDC')
				.setTitle('❤️ Novo Pedido de family4')
				.setDescription(`${message.author.username} está pedindo para ${member.username} entrar em sua familia.\n\n${member}, você aceita?`)
				.setThumbnail(gif)
				.setFooter('Clique no coração para aceitar o pedido.')
			message.channel.send(family4embed).then(msg => {
				msg.react('❤️')

				let reactions = (reaction, user) =>
					reaction.emoji.name === '❤️' && user.id === member.id
					message.delete()

				let coletor = msg.createReactionCollector(reactions)

				coletor.on('collect', cp => {

					db.set(`family4_${message.author.id}`, member.tag)
					db.set(`family4_${member.id}`, message.author.tag)

					let family4embed = new discord.MessageEmbed()
						.setColor('BLUE')
						.setTitle(':heart: A familia aumentou! :heart:')
						.setDescription(`${member} aceitou o pedido family4 de ${message.author}`)
					message.channel.send(family4embed)
				})
			})
		}
		if (family42 === null) {
			return
		}
	}
}

module.exports.help = {
	name: "family4"
}