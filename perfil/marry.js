const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

	const member = message.mentions.users.first()

	const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member || message.mentions.users.first()

	let prefix = db.get(`prefix_${message.guild.id}`)
	if (prefix === null) prefix = "-"

	if (!args[0]) {
		const noargs = new Discord.MessageEmbed()
			.setColor('BLUE')
			.setTitle('Casamento')
			.setDescription('Você pode se casar no Sistema Maya. Siga o comando e se case. Veja também em `' + prefix + 'perfil`')
			.addFields(
				{
					name: 'Comando',
					value: '`' + prefix + 'marry @user`'
				}
			)
		return message.inlineReply(noargs)
	}

	var level = await db.get(`level_${user.id}`)
	if (level === null) level = 0

	if (level < 10) {
		const block = new Discord.MessageEmbed()
			.setColor('#FF0000')
			.setTitle('🚫  O casal precisa atingir o level 10')
		return message.inlineReply(block)
	}

	if (db.get(`marry_${message.author.id}`)) {
		return message.inlineReply("Você já está em um relacionamento sério, o que você quer por aqui?")
	}

	if (!member) {
		return message.inlineReply('Por favor mencione alguém para se casar.')
	}

	if (member.id === '821471191578574888') {
		return message.inlineReply('É... Não sei se meu pai me deixaria casar contigo. Acho melhor a gente ser apenas amigos. :)')
	}

	const bot = member.bot
	if (bot) {
		return message.inlineReply('Você não pode se casar com um bot.')
	}

	if (member.id === message.author.id) {
		return message.inlineReply('Você não pode se casar com você mesmo.')
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
		message.inlineReply(casar).then(msg => {
			msg.react('💍')

			let reactions = (reaction, user) =>
				reaction.emoji.name === '💍' && user.id === member.id

			let coletor = msg.createReactionCollector(reactions)

			coletor.on('collect', cp => {
				msg.delete()

				db.set(`marry_${message.author.id}`, member.id)
				db.set(`marry_${member.id}`, message.author.id)

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
		message.inlineReply('Este usuário já está casado.')
	}
}