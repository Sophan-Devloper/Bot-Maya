const discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

	const member = message.mentions.users.first()

	if (!member)
		return message.channel.send('Ei, me fala quem você quer convidar para sua familia.')

	if (member.id === client.user.id)
		return message.channel.send('É... Não sei se meu pai deixaria eu entrar para sua familia. Acho melhor nós ficarmos apenas na amizade.')

	if (member.id === message.author.id)
		return message.channel.send('Você quer entrar na sua familia? Não entendi...')

	let family = await db.fetch(`family2_${message.author.id}`)
	let family2 = await db.fetch(`family2_${member.id}`)

	if (family === null) {
		let gif = 'https://imgur.com/xmaQyK4.gif'
		let familyembed = new discord.MessageEmbed()
			.setColor('#df3e3e')
			.setTitle('❤️ Novo Pedido de Family')
			.setDescription(`${message.author.username} está pedindo para ${member.username} entrar em sua familia.\n\n${member}, você aceita?`)
			.setThumbnail(gif)
			.setFooter('Clique no coração para aceitar o pedido.')
		message.channel.send(familyembed).then(msg => {
			msg.react('❤️')

			let reactions = (reaction, user) =>
				reaction.emoji.name === '❤️' && user.id === member.id

			let coletor = msg.createReactionCollector(reactions)

			coletor.on('collect', cp => {

				db.set(`family2_${message.author.id}`, member.tag)
				db.set(`family2_${member.id}`, message.author.tag)

				let familyembed = new discord.MessageEmbed()
					.setColor('BLUE')
					.setTitle(':heart: A familia aumentou! :heart:')
					.setDescription(`${member} aceitou o pedido family de ${message.author}`)
				message.channel.send(familyembed)
			})
		})
	}
	if (family2 === null) {
		return
	}
}