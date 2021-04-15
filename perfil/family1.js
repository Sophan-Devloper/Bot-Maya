const discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

	const member = message.mentions.users.first()

	if (!member)
		return message.inlineReply('Ei, me fala quem você quer convidar para sua familia.')

	if (db.get(`family1_${message.author.id}`)) {
		return message.inlineReply('Nesta posição, ' + db.get(`family1_${message.author.id}`) + ' é seu familiar.')
	}

	if (db.get(`family1_${member.id}`)) {
		return message.inlineReply(member.username + ' já tem um familiar nesta posição.')
	}

	if (member.id === client.user.id)
		return message.inlineReply('É... Não sei se meu pai deixaria eu entrar para sua familia. Acho melhor nós ficarmos apenas na amizade.')

	if (member.id === message.author.id)
		return message.inlineReply('Você quer entrar na sua familia? Não entendi...')

	let family = await db.fetch(`family1_${message.author.id}`)
	let family2 = await db.fetch(`family1_${member.id}`)

	if (family === null) {
		let gif = 'https://imgur.com/xmaQyK4.gif'
		let familyembed = new discord.MessageEmbed()
			.setColor('#df3e3e')
			.setTitle('❤️ Novo Pedido de Family')
			.setDescription(`${message.author.username} está pedindo para ${member.username} entrar em sua familia.\n\n${member}, você aceita?`)
			.setThumbnail(gif)
			.setFooter('Clique no coração para aceitar o pedido.')
		message.inlineReply(familyembed).then(msg => {
			msg.react('❤️')

			let reactions = (reaction, user) =>
				reaction.emoji.name === '❤️' && user.id === member.id

			let coletor = msg.createReactionCollector(reactions)

			coletor.on('collect', cp => {

				db.set(`family1_${message.author.id}`, member.id)
				db.set(`family1_${member.id}`, message.author.id)

				let familyembed = new discord.MessageEmbed()
					.setColor('BLUE')
					.setTitle(':heart: A familia aumentou! :heart:')
					.setDescription(`${member} aceitou o pedido family de ${message.author.username}`)
				message.inlineReply(familyembed)
			})
		})
	}
	if (family2 === null) {
		return
	}
}