const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
	name: 'casamento',
	aliases: ['casar', 'marry'],
	run: async (client, message, args) => {
		message.delete()

		const member = message.mentions.users.first()

		const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member || message.mentions.users.first()

		var level = await db.get(`level_${user.id}`)
		if (level === null) level = 0

		if (level < 10) {
			const block = new Discord.MessageEmbed()
				.setColor('#FF0000')
				.setTitle('🚫  O casal precisa atingir o level 10')
			return message.channel.send(block).then(msg => msg.delete({ timeout: 6000 }))
		}

		if (db.get(`marry_${message.author.id}`)) {
			return message.channel.send("Você já está em um relacionamento sério, o que você quer por aqui?").then(msg => msg.delete({ timeout: 6000 }))
		}

		if (!member) {
			return message.channel.send('Por favor mencione alguém para se casar.').then(msg => msg.delete({ timeout: 5000 }))
		}

		if (member.id === '821471191578574888') {
			return message.channel.send('É... Não sei se meu pai me deixaria casar contigo. Acho melhor a gente ser apenas amigos. :)').then(msg => msg.delete({ timeout: 5000 }))
		}

		if (member.id === message.author.id) {
			return message.channel.send('Você não pode se casar com você mesmo.').then(msg => msg.delete({ timeout: 5000 }))
		}

		let marry = await db.fetch(`marry_${message.author.id}`)
		let marry2 = await db.fetch(`marry_${member.id}`)

		if (marry === null) {
			let gif = 'https://imgur.com/Ush7ZDy.gif'
			let casar = new Discord.MessageEmbed()
				.setColor('BLUE')
				.setTitle('💍Novo Pedido de Casamento💍')
				.setDescription(`${message.author.username} está pedindo a mão de ${member.username} em casamento.\n\n${member}, você aceita se casar com ${message.author}?`)
				.setThumbnail(gif)
				.setFooter('Clique no anel para aceitar o pedido de casamento.')
			message.channel.send(casar).then(msg => {
				msg.react('💍')

				let reactions = (reaction, user) =>
					reaction.emoji.name === '💍' && user.id === member.id

				let coletor = msg.createReactionCollector(reactions)

				coletor.on('collect', cp => {

					db.set(`marry_${message.author.id}`, member.tag)
					db.set(`marry_${member.id}`, message.author.tag)

					let casados = new Discord.MessageEmbed()
						.setColor('BLUE')
						.setTitle(':heart: Um novo casal acaba de se formar :heart:')
						.setDescription(`${member} aceitou o pedido de casamento de ${message.author}`)
					message.channel.send(casados)
				})
			})
		}
		if (marry2 === null) {
			return
		} else {
			message.channel.send('Este usuário já está casado.').then(msg => msg.delete({ timeout: 5000 }))
		}
	}
}

module.exports.help = {
	name: "casamento"
}