const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    const adm = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Eu preciso da permissão "Gerenciar Mensagens" para utilizar esta função.')
    return message.inlineReply(adm)
  }

  var i = 'Isekai'
  var h = 'Hentai'
  var ms = 'Mahou Shoujo'
  var y = 'Yuri'
  var f = 'Fantasia'
  var r = 'RPG'
  var c = 'Comédia'
  var s = 'Sobre Natural'
  var e = 'Esporte'
  var j = 'Jogo'
  var a = 'Aventura'
  var aç = 'Ação'
  var am = 'Ação/Militar'
  var p = 'Psicológico'
  var d = 'Drama'
  var sv = 'Simulador de Vida'
  var mi = 'Mistério'
  var ve = 'Vida Escolar'
  var vc = 'Vida Cotidiana'
  var dm = 'Demônio'
  var vg = 'Vários Gêneros'
  var rm = 'Românce'
  var hr = 'Harém'
  var m = 'Musical'
  var ma = 'Magia'
  var ec = 'Ecchi'
  var cr = 'Comédia Romântica'
  var s = 'Suspense'

  var list = [
    `100man no Inochi no Ue ni Ore wa Tatteiru \nGênero: ${f}`,
    `Adachi to Shimamura \nGênero: ${y}`,
    `Akudama Drive \nGênero: ${s}`,
    `Assault Lily: Bouquet \nGênero: ${ms}`,
    `BURN THE WITCH \nGênero: ${f}`,
    `D4DJ: First Mix \nGênero: ${m}`,
    `Dragon Quest: Dai no Daibouken \nGênero: ${j}`,
    `Gochuumon wa Usagi Desu ka? Bloom \nGênero: ${c}`,
    `Guraburu! \nGênero: ${r}`,
    `Himitsukessha Taka no Tsume, \nGênero: ${c}`,
    `Hypnosis Mic \nGênero: ${m}`,
    `Ikebukuro West Gate Park \nGênero: ${m}`,
    `Inu to Neko \nGênero: ${c}`,
    `Iwa Kakeru!: Sport Climbing Girls \nGênero: ${e}`,
    `Jujutsu Kaisen \nGênero: ${s}`,
    `Kami-tachi ni Hirowareta Otoko \nGênero: ${a}`,
    `Kamisama ni Natta Hi \nGênero: ${d}`,
    `Kimi to Boku no Saigo no Senju \nGênero: ${rm}`,
    `Kings Raid \nGênero: ${j}`,
    `Kuma Kuma Kuma Bear \nGênero: ${c}`,
    `Maesetsu! \nGênero: ${c}`,
    `Magatsu Wahrheit \nGênero: ${aç}`,
    `Majo no Tabitabi \nGênero: ${f}`,
    `Maoujou de Oyasumi \nGênero: ${c}`,
    `Munou na Nana \nGênero: ${p}`,
    `Noblesse \nGênero: ${ve}`,
    `Ochikobore Fruit Tart \nGênero: ${m}`,
    `Rail Romanesque \nGênero: ${hr}`,
    `Senyoku no Sigrdrifa \nGênero: ${am}`,
    `Taisou Zamurai \nGênero: ${e}`,
    `Tonikaku Kawaii \nGênero: ${rm}`,
    `Yuukoku no Moriarty \nGênero: ${mi}`,
    `A3!Season Autumn & Winter \nGênero: ${sv}`,
    `Dungeon Ni Deai \nGênero: ${f}`,
    `Golden Kamuy \nGênero: ${c}`,
    `Haikyuu! \nGênero: ${e}`,
    `Hanyou no Yashahime \nGênero: ${f}`,
    `Love Live \nGênero: ${m}`,
    `Mahouka Koukou no Rettousei \nGênero: ${ma}`,
    `One Room \nGênero: ${vc}`,
    `Osamatsu-san \nGênero: ${c}`,
    `Strike Witches \nGênero: ${am}`,
    `Fate/Grand Order \nGênero: ${f}`,
    `Kimetsu no Yaiba \nGênero: ${dm}`,
    `Naruto Classico/Shippuden \nGênero: ${vg}`,
    `Konosuba \nGênero: ${c}`,
    `Sword Art Online \nGênero: ${aç}, ${f}`,
    `.hack//Liminality \nGênero: ${j}`,
    `.hack//Quantum \nGênero: ${j}`,
    `.hack//ROOTS \nGênero: ${j}`,
    `.hack//sign \nGênero: ${j}`,
    `.hack//Tasogare no Udewa Densetsu \nGênero: ${j}`,
    `009-1 \nGênero: ${aç}`,
    `07 Ghost \nGênero: ${aç}`,
    `1+2=Paradise \nGênero: ${c}`,
    `11 Eyes \nGênero: ${aç}`,
    `12 Sai Chicchana Mune No Tokimeki \nGênero: ${rm}`,
    `18if \nGênero: ${mi}`,
    `2×2 Shinobuden \nGênero: ${c}`,
    `3-gatsu no Lion \nGênero: ${vc}`,
    `30-Sai No Hoken Taiiku \nGênero: ${ec}`,
    `3D Kanojo: Real Girl \nGênero: ${r}`,
    `801 T.T.S. Airbats \nGênero: ${aç}`,
    `91 Days \nGênero: ${aç}`, //?
    `AKB0048 \nGênero: ${m}`,
    `A Channel \nGênero: ${c}`,
    `Abarenbou Kishi!! Matsutarou \nGênero: ${e}`,
    `Abenobashi Mahou Shoutengai \nGênero: ${c}`,
    `Absolute Duo \nGênero: ${rm}`,
    `ACCA: 13-ku Kansatsu-ka \nGênero: ${mi}`,
    `Accel World \nDo criador de SAO \nGênero: ${j}`,
    `Acchi Kocchi \nGênero: ${c}`,
    `Action Heroine Cheer Fruits \nGênero: ${c}`,
    `Active Raid: Kidou Kyoushuushitsu Dai Hakkei \nGênero: ${c}`,
    `Aeon flux \nGênero: ${aç}`,
    `Afro Samurai \nGênero: ${aç}`,
    `Agatha Christie No Meitantei Poirot To Marple \nGênero: ${mi}`,
    `Agent Aika \nGênero: ${aç}`,
    `Ah! Megami Sama! \nGênero: ${c}`,
    `Ah! Megami sama Chicchaitte Kotoha Benridane \nGênero: ${rm}`,
    `Aho Girl \nGênero: ${c}`,
    `Ai Mai Mi \nGênero: ${vc}`,
    `Ai Tenchi Muyo! \nGênero: ${c}`,
    `Ai Yori Aoshi \nGênero: ${c}`,
    `Aika Zero \nGênero: ${ec}`,
    `Aikatsu! \nGênero: ${m}`,
    `Air Gear \nGênero: ${aç}`,
    `Air Master \nGênero: ${aç}`,
    `Air Tv \nGênero: ${rm}`,
    `Aishiteruze Baby \nGênero: ${rm}`,
    `Aiura \nGênero: ${vc}`,
    `Ajin \nGênero: ${mi}`,
    `Akagami No Shirayuki-hime \nGênero: ${rm}`,
    `Akagi \nGênero: ${j}`,
    `Akahori Gedou Hour Rabuge \nGênero: ${c}`,
    `Akai Koudan Zillion \nGênero: ${aç}`,
    `Akame Ga Kill \nGênero: ${aç}`,
    `Akaneiro Ni Somaru Saka \nGênero: ${rm}`,
    `Akanesasu Shoujo \nGênero: ${aç}`,
    `Akatsuki No Yona \nGênero: ${aç}`,
    `Aki Sora \nGênero: ${ec}`,
    `Akibas Trip The Animation \nGênero: ${aç}`,
    `Akikan \nGênero: ${ec}`,
    `Akkun to Kanojo \nGênero: ${rm}`,
    `Aku No Hana \nGênero: ${p}`,
    `Akuma No Riddle \nGênero: ${aç}`,
    `Aldnoah.Zero \nGênero: ${aç}`,
    `Alexander Senki \nGênero: ${f}`,
    `Alice Or Alice: Siscon Niisan To Futago No Imouto \nGênero: ${vc}`,
    `Alice To Zouroku \nGênero: ${mi}`,
    `Alien 9 \nGênero: ${p}`,
    `All Out!! \nGênero: ${e}`,
    `Allison To Lillia \nGênero: ${aç}`,
    `Amaama to Inazuma \nGênero: ${vc}`,
    `Amaenaideyo!! \nGênero: ${rm}`,
    `Amagami SS \nGênero: ${rm}`,
    `Amagi Brilliant Park \nGênero: ${c}`,
    `Amanchu! \nGênero: ${vc}`,
    `Amatsuki \nGênero: ${aç}`,
    `Ame-iro Cocoa \nGênero: ${vc}`,
    `Amnesia \nGênero: ${f}`,
    `Ange Vierge \nGênero: ${f}`,
    `Angel Beats! \nGênero: ${d}`,
    `Angel Links \nGênero: ${d}`,
    `Angel Sanctuary \nGênero: ${d}`,
    `Angelic Layer \nGênero: ${d}`,
    `Angolmois: Genkou Kassenki \nGênero: ${aç}`,
    `Anima Yell! \nGênero: ${c}`,
    `Animatrix \nGênero: ${d}`,
    `Animegataris \nGênero: ${c}`,
    `Anitore! EX \nGênero: ${c}`,
    `Anne Happy \nGênero: ${vc}`,
    `Ano Hana \nGênero: ${d}`,
    `Ano Natsu De Matteru \nGênero: ${rm}`,
    `Another \nGênero: ${mi}`,
    `Ansatsu Kyoushitsu \nGênero: ${c}`,
    `Antique Bakery \nGênero: ${c}`,
    `Ao Haru Ride \nGênero: ${rm}`,
    `Ao No Exorcist \nGênero: ${dm}`,
    `Ao No Kanata No Four Rhythm \nGênero: ${d}`,
    `Ao Oni The Animation \nGênero: ${c}`,
    `Aoharu X Kikanjuu \nGênero: ${aç}`,
    `Aoi Bungaku Series \nGênero: ${d}`,
    `Aoi Hana \nGênero: ${y}`,
    `Aoi Sekai No Chuushin De \nGênero: ${f}`,
    `Aoki Hagane No Arpeggio: Ars Nova \nGênero: ${aç}`,
    `Appare-Ranman! \nGênero: ${c}`,
    `Aquarian Age \nGênero: ${f}`,
    `Aquarion Evol \nGênero: ${f}`,
    `Aquarion Logos \nGênero: ${f}`,
    `Arakawa Under The Bridge \nGênero: ${rm}`,
    `Arata Kangatari \nGênero: ${f}`,
    `Arc The Lad \nGênero: ${aç}`,
    `Arcana Famiglia \nGênero: ${aç}`,
    `Area 88 (anime) \nGênero: ${aç}`,
    `Area No Kishi \nGênero: ${e}`,
    `Argento Soma \nGênero: ${d}`,
    `Aria The Animation \nGênero: ${f}`,
    `Arte \nGênero: ${d}`,
    `Arslan Senki \nGênero: ${aç}`,
    `Aru Zombie Shoujo No Sainan \nGênero: ${aç}`,
    `Asagiri No Miko \nGênero: ${f}`,
    `Asatte No Houkou \nGênero: ${d}`,
    `Ashita No Joe \nGênero: ${e}`,
    `Ashita No Nadja \nGênero: ${d}`,
    `Asobi Asobase \nGênero: ${c}`,
    `Asobi Ni Iku Yo \nGênero: ${ec}`,
    `Astarotte No Omocha \nGênero: ${c}`,
    `Asu No Yoichi \nGênero: ${c}`,
    `Asura Cryin \nGênero: ${aç}`,
    `Atelier Escha & Logy: Alchemists Of The Dusk Sky \nGênero: ${f}`,
    `Atom: The Beginning \nGênero: ${aç}`,
    `Avatar A Lenda De Aang \nGênero: ${f}`,
    `Avatar A Lenda De Korra \nGênero: ${f}`,
    `Avenger \nGênero: ${a}`,
    `Ayakashi \nGênero: ${aç}`,
    `Ayakashi – Japanese Classic Horror \nGênero: ${a}`,
    `Ayashi No Ceres \nGênero: ${d}`,
    `Azumanga Daioh \nGênero: ${c}`,
    `B Gata H Kei \nGênero: ${cr}`,
    `B-Project \nGênero: ${m}`,
    `B: The Beginning \nGênero: ${mi}`,
    `Babel II: Beyond Infinity \nGênero: ${aç}`,
    `Baby Princess 3D Paradise Love \nGênero: ${ec}`,
    `Baby Steps \nGênero: ${e}`,
    `Baccano \nGênero: ${mi}`,
    `Back Street Girls \nGênero: ${c}`,
    `Baka To Test To Shoukanjuu \nGênero: ${c}`,
    `Bakemonogatari \nGênero: ${d}`,
    `Baki The Grappler \nGênero: ${e}`,
    `Bakugan \nGênero: ${f}`,
    `Bakuman \nGênero: ${cr}`,
    `Bakumatsu \nGênero: ${aç}`,
    `Bakumatsu Gijinden Roman \nGênero: ${f}`,
    `Bakumatsu Rock \nGênero: ${m}`,
    `Bakumatsu: Crisis \nGênero: ${aç}`,
    `Bakuon!! \nGênero: ${c}`,
    `Bakuretsu Hunters \nGênero: ${c}`,
    `Bakuretsu Tenshi: Burst Angel \nGênero: ${aç}`,
    `Ballroom E Youkoso \nGênero: ${e}`,
    `Bamboo Blade \nGênero: ${c}`,
    `Banana Fish \nGênero: ${mi}`,
    `Bananya \nGênero: ${vc}`,
    `Bang Dream! \nGênero: ${m}`,
    `Banner Of The Stars \nGênero: ${r}`,
    `Bannou Bunka Neko-Musume \nGênero: ${c}`,
    `Barakamon \nGênero: ${d}`,
    `Barom One \nGênero: ${aç}`,
    `Basilisk \nGênero: ${aç}`,
    `Basquash! \nGênero: ${ec}`,
    `Bastard \nGênero: ${aç}`,
    `Battery \nGênero: ${e}`,
    `Battle Girl High School \nGênero: ${cr}`,
    `Battle Programmer Shirase \nGênero: ${c}`,
    `Battle Spirits: Burning Soul \nGênero: ${j}`,
    `Beast Fighter: The Apocalypse \nGênero: ${f}`,
    `Beast Saga \nGênero: ${aç}`,
    `Beatless \nGênero: ${r}`,
    `Beck \nGênero: ${m}`,
    `Beelzebub \nGênero: ${aç}`,
    `Beelzebub-jou No Okinimesu Mama. \nGênero: ${r}`,
    `Ben-To \nGênero: ${c}`,
    `Bermuda Triangle: Colorful Pastrale \nGênero: ${m}`,
    `Bernard-jou Iwaku. \nGênero: ${c}`,
    `Berserk \nGênero: ${aç}`,
    `Beyblade \nGênero: ${aç}`,
    `Big Order \nGênero: ${aç}`,
    `Bihada Ichizoku \nGênero: ${d}`,
    `Bikini Warriors \nGênero: ${f}`,
    `Binan Koukou Chikyuu Bouei Bu Love \nGênero: ${c}`,
    `Binbougami Ga! \nGênero: ${c}`,
    `Binbou Shimai Monogatari \nGênero: ${c}`,
    `Binchou-tan \nGênero: ${c}`,
    `Binzume Yousei \nGênero: ${c}`,
    `Bishoujo Senshi Sailor Moon Crystal \nGênero: ${r}`,
    `Bishoujo Yuugi Unit Crane Game Girls \nGênero: ${c}`,
    `Black And White Warriors \nGênero: ${f}`,
    `Black Blood Brothers \nGênero: ${c}`,
    `Black Bullet \nGênero: ${m}`,
    `Black Cat \nGênero: ${c}`,
    `Black Clover \nGênero: ${f}`,
    `Black Jack \nGênero: ${d}`,
    `Black Lagoon \nGênero: ${aç}`,
    `Black Rock Shooter \nGênero: ${aç}`,
    `Blade (ANIME) \nGênero: ${aç}`,
    `Blade e Soul \nGênero: ${aç}`,
    `Blade Of The Immortal \nGênero: ${aç}`,
    `Blassreiter \nGênero: ${aç}`,
    `BlazBlue: Alter Memory \nGênero: ${f}`,
    `Bleach \nGênero: ${aç}`,
    `Blend S \nGênero: ${c}`,
    `Blood Lad \nGênero: ${c}`,
    `Blood-C \nGênero: ${p}`,
    `Blood+ \nGênero: ${aç}`,
    `Bloodivores \nGênero: ${f}`,
    `Blue Dragon \nGênero: ${f}`,
    `Blue Dragon: Tenkai No Shichi Ryuu \nGênero: ${f}`,
    `Blue Drop \nGênero: ${d}`,
    `Blue Gender \nGênero: ${r}`,
    `Blue Seed \nGênero: ${c}`,
    `Boku Dake Ga Inai Machi \nGênero: ${mi}`,
    `Boku no Hero Academia \nGênero: ${aç}`,
    `Boku No Imouto Wa “Osaka Okan” \nGênero: ${c}`,
    `Boku No Kanojo Ga Majimesugiru Sho-bitch Na Ken \nGênero: ${c}`,
    `Boku Wa Tomodachi Ga Sukunai \nGênero: ${c}`,
    `Bokura Ga Ita \nGênero: ${d}`,
    `Bokura Wa Minna Kawaisou \nGênero: ${r}`,
    `Bokurano \nGênero: ${d}`,
    `Bokusatsu Tenshi Dokuro-chan \nGênero: ${c}`,
    `Bokutachi Wa Benkyou Ga Dekinai \nGênero: ${c}`,
    `Bonjour Sweet Love Patisserie \nGênero: ${r}`,
    `Boogiepop Phantom \nGênero: ${s}`,
    `Boogiepop Wa Warawanai 2019 \nGênero: ${p}`,
    `Boruto: Naruto Next Generations \nGênero: ${aç}`,
    `Bottle Fairy \nGênero: ${c}`,
    `Bouken Ou Beet \nGênero: ${f}`,
    `Bounen No Xamdou \nGênero: ${aç}`,
    `Boys Be \nGênero: ${r}`,
    `Brave 10 \nGênero: ${aç}`,
    `Brave Beats \nGênero: ${m}`,
    `Brave Story \nGênero: ${f}`,
    `Brave Witches \nGênero: ${aç}`,
    `Break Blade (TV) \nGênero: ${aç}`,
    `Brotherhood: Final Fantasy XV \nGênero: ${aç}`,
    `Brothers Conflict \nGênero: ${r}`,
    `Btooom \nGênero: ${aç}`,
    `Btx \nGênero: ${a}`,
    `Btx Neo \nGênero: ${aç}`,
    `Bubblegum Crisis Tokyo 2040 \nGênero: ${a}`,
    `Bubuki Buranki \nGênero: ${d}`,
    `Bucky \nGênero: ${c}`,
    `Buddy Complex \nGênero: ${aç}`,
    `Bungaku Shoujo: Memoire \nGênero: ${r}`,
    `Bungou Stray Dogs \nGênero: ${mi}`,
    `Bungou To Alchemist: Shinpan No Haguruma \nGênero: ${f}`,
    `Burn-Up Scramble \nGênero: ${c}`,
    `Burn-Up Warrior \nGênero: ${c}`,
    `Burst Angel \nGênero: ${c}`,
    `Bus Gamer \nGênero: ${aç}`,
    `Busou Renkin \nGênero: ${aç}`,
    `Busou Shinki \nGênero: ${aç}`,
    `Busou Shoujo Machiavellianism \nGênero: ${ec}`,
    `Butlers: Chitose Momotose Monogatari \nGênero: ${c}`
  ]

  var rand = list[Math.floor(Math.random() * list.length)]

  const IndEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .addFields(
      {
        name: 'Maya Indica :hearts:',
        value: `Nome: ${rand}`
      }
    )

  await message.inlineReply(IndEmbed).then(msg => {
    msg.react('🔄')// 1º Embed
    setTimeout(function () { msg.reactions.removeAll() }, 30000)

    msg.awaitReactions((reaction, user) => {
      if (message.author.id !== user.id) return

      if (reaction.emoji.name === '🔄') { // 1º Embed - Principal
        reaction.users.remove(user)
        const IndEmbed1 = new Discord.MessageEmbed()
          .setColor('BLUE')
          .addFields(
            {
              name: 'Maya Indica :hearts:',
              value: `Nome: ${list[Math.floor(Math.random() * list.length)]}`
            }
          )
        msg.edit(IndEmbed1)
      }
    })
  })
}