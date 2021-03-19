const Discord = require("discord.js")

let questions = [
  {
    title: "Qual desses personagens não é Hokage?",
    options: ["Gaara do Deserto", "Hiruzen Sarutobi", "Tobirama Senju", "Kakashi Hatake"],
    correct: 1
  },
  {
    title: "Quem deu o seu Sharingan ao Kakashi?",
    options: ['Itachi', 'Sasuke Uchiha', 'Shisui Uchiha', 'Obito Uchiha'],
    correct: 4
  },
  {
    title: "Quais são os dois filhos da Kaguya??",
    options: ["Ashura e Indra", "Haruma e Hagoromo", "Indra e Hamura", "Hagoromo e Ashura"],
    correct: 2
  },
  {
    title: "Quem criou o Jutsu 'Clones das sombras'?",
    options: ['Madara Uchiha', 'Kaguya Otsutsuki', 'Tobirama Senju', 'Minato Namikaze'],
    correct: 3
  },
  {
    title: "Quem são as duas estátuas do Vale do fim?",
    options: ['Madara Uchiha & Hashirama Senju', 'Naruto Uzumaki & Sasuke Uchiha', 'Tobirama Senju & Hashirama Senju', 'Minato Namikaze & Kakashi Hatake'],
    correct: 1
  },
  {
    title: "Quem foi o Sensei do Kakashi?",
    options: ['Hashirama Senju', 'Minato Namikaze', 'Tobirama Senju', 'Hiruzen Sarutobi'],
    correct: 2
  },
  {
    title: "Qual desses é o melhor usuário de Genjutsu?",
    options: ['Shisui Uchiha', 'Kurenai Yuuhi', 'Madara Uchiha', 'Itachi Uchiha'],
    correct: 1
  },
  {
    title: "O que é um Jinchuuriki?",
    options: ['Quem possui uma besta de cauda dentro do seu próprio corpo', 'Hokage Renegado', 'Apelido do Madara Uchiha', 'Nome das bestas de cauda'],
    correct: 1
  },
  {
    title: "Qual o nome do filho mais velho de Naruto Uzumaki?",
    options: ['Boruto Uzumaki', 'Himarawari Uzumaki', 'Sarada Uzumaki', 'Shisui Uzumaki'],
    correct: 1
  },
  {
    title: "Quem é a mãe do Hagoromo?",
    options: ['Juuby', 'Kaguya', 'Sakura', 'Kushina', 'Mito Uzumaki'],
    correct: 2
  },
  {
    title: "Sarutobi Azuma foi morto por quem na temporada Shippuuden?",
    options: ['Deidara', 'Sasuke', 'Hidan', 'Gaara'],
    correct: 3
  },
  {
    title: "Quem lutou e derrotou o Sasori?",
    options: ['Sakura e Chiyo-baa', 'Tsunade e Kankuro', 'Jiraya e Sai', 'Naruto e Kakashi'],
    correct: 1
  },
  {
    title: "Gaara foi capturado por quais integrantes da Akatsuke?",
    options: ['Gaara nunca foi capturado', 'Itachi e kizame', 'Sasori e Deidara', 'Pain e Konan'],
    correct: 3
  },
  {
    title: "Qual é o nome da cobra do Orotimaru?",
    options: ['Manda', 'MimTume', 'Gamabunta', 'Gamakichi'],
    correct: 1
  },
  {
    title: "Naruto usa roupas de que cor na temporada Shippuuden?",
    options: ['Preto e prateado', 'Verde e preto', 'Preto e azul', 'Laranja e preto'],
    correct: 1
  },
  {
    title: "Naruto usa roupas de que cor na temporada Shippuuden?",
    options: ['Preto e prateado', 'Verde e preto', 'Preto e azul', 'Laranja e preto'],
    correct: 1
  },
  {
    title: "Sasuke, em busca de integrantes para seu novo time, decide convidar 3 pessoas. Quais os nomes dessas pessoas?",
    options: ['Kakuzu, Kisame e Juugo', 'Kakuzu, Suigetsu e Tobi', 'Suigetsu, Kisame e Kakuzu', 'Karin, Juugo e Suigetsu'],
    correct: 4
  },
]

module.exports = {
   name: "Quiz",
   description: "Teste seu conhecimento!",
   category: "fun",
 
run: async (bot, message, args) => {
    message.delete()
    let q = questions[Math.floor(Math.random() * questions.length)]
    let i = 0
    let avatar = message.author.displayAvatarURL({format: 'png'})
    
const QuizEmbed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, avatar)
      .setTitle(q.title)
      .setDescription(
        q.options.map((opt) => {
          i++;
          return `${i} - ${opt}`
        }))
      .setColor(`GREEN`)
      .setFooter(`${message.author.username}, essa pergunta irá sumir em 10 segundos. Dattebayo!`)
    message.channel.send('Prepare-se! Você tem apenas 10 segundos. Dattebayo!').then(msg => msg.delete({timeout: 2000})).then(msg => msg.channel.send(QuizEmbed)).then(msg => msg.delete({timeout: 10000}))
    try {
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        {max: 1, errors: ["time"]}
        )
      if (parseInt(msgs.first().content) == q.correct){
        return message.channel.send(`${message.author}, você acertou! Parabéns.`).then(msg => msg.delete({timeout: 5000}))
      } else {
        return message.channel.send(`${message.author}, você errou! Que peninha...`).then(msg => msg.delete({timeout: 5000}))
      }
    } catch (e) {
      return message.channel.send(`Ninguém respondeu, poxa...`).then(msg => msg.delete({timeout: 5000}))
    }}}