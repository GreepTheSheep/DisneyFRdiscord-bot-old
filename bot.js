const Discord = require("discord.js")
const bot = new Discord.Client()
let prefix = "/"
let cool = new Set()
let staff = ["302092279114629121","330030648456642562"]

bot.on("ready" , () => {
bot.user.setPresence({
      game: {
      name: '/help',
      type: "STREAMING",
      }
    }) 
  console.log("\nBot prêt sur " + bot.guilds.size + " serveurs ! \n-------------------------------------------")
})














let hug = ["https://cdn.discordapp.com/attachments/610962780056715305/611315665181343744/tenor_9.gif","https://cdn.discordapp.com/attachments/610962780056715305/611315816868216893/giphy_5.gif","https://cdn.discordapp.com/attachments/610962780056715305/611316090609467415/tenor_10.gif","https://cdn.discordapp.com/attachments/610962780056715305/611316223279366177/tenor_11.gif","https://cdn.discordapp.com/attachments/610962780056715305/611316943655272448/tenor_12.gif","https://cdn.discordapp.com/attachments/610962780056715305/611317178989543443/tenor_13.gif","https://cdn.discordapp.com/attachments/610962780056715305/611317288850685953/tenor_14.gif","https://cdn.discordapp.com/attachments/610962780056715305/611317534024794147/tenor_15.gif","https://cdn.discordapp.com/attachments/610962780056715305/611318090021732372/tenor_16.gif","https://cdn.discordapp.com/attachments/610962780056715305/611319192205000724/tenor_17.gif","https://cdn.discordapp.com/attachments/610962780056715305/611319632497737728/giphy_6.gif","https://cdn.discordapp.com/attachments/610962780056715305/611319959875878978/tenor_18.gif","https://cdn.discordapp.com/attachments/610962780056715305/611319976644837376/tenor_19.gif","https://cdn.discordapp.com/attachments/610962780056715305/611319998492704779/tenor_20.gif","https://cdn.discordapp.com/attachments/610962780056715305/615902124693389328/Simba-Kiara-the-lion-king-2-simbas-pride-33096231-500-227.gif","https://cdn.discordapp.com/attachments/610962780056715305/660080392451391507/tumblr_40bbfb76d5645b28c4e5486a04bf7389_9daf0649_500.gif","https://cdn.discordapp.com/attachments/610962780056715305/660080630750773248/tumblr_8e3137b52aed9108064609dd05d376d8_c8184a47_500.gif","https://cdn.discordapp.com/attachments/610962780056715305/660084899759390750/giphy_28.gif","https://cdn.discordapp.com/attachments/610962780056715305/747045632946208808/JGNmo9nBmmy8U.gif","https://cdn.discordapp.com/attachments/610962780056715305/747046397341335572/ZaBHSbiLQTmFi.gif"]
let kiss = ["https://cdn.discordapp.com/attachments/610962514712199187/611312816040968213/giphy.gif","https://cdn.discordapp.com/attachments/610962514712199187/611313180479848488/giphy_1.gif","https://cdn.discordapp.com/attachments/610962514712199187/611313485841694720/tenor.gif","https://cdn.discordapp.com/attachments/610962514712199187/611313749080670227/tenor_1.gif","https://cdn.discordapp.com/attachments/610962514712199187/611313939036241942/tenor_2.gif","https://cdn.discordapp.com/attachments/610962514712199187/611314225226317878/tenor_3.gif","https://cdn.discordapp.com/attachments/610962514712199187/611314475949359155/tenor_5.gif","https://cdn.discordapp.com/attachments/610962514712199187/611314707416219649/tenor_6.gif","https://cdn.discordapp.com/attachments/610962514712199187/611314830258995200/giphy_2.gif","https://cdn.discordapp.com/attachments/610962514712199187/611315043056877603/giphy_3.gif","https://cdn.discordapp.com/attachments/610962514712199187/611315152461103104/giphy_4.gif","https://cdn.discordapp.com/attachments/610962514712199187/611315323534180353/tenor_7.gif","https://cdn.discordapp.com/attachments/610962514712199187/611315471970467860/tenor_8.gif","https://cdn.discordapp.com/attachments/610962514712199187/660083585088487424/giphy_22.gif","https://cdn.discordapp.com/attachments/610962514712199187/747041672113684540/inconnu.gif","https://cdn.discordapp.com/attachments/610962514712199187/747041790498177114/inconnu.gif","https://cdn.discordapp.com/attachments/610962514712199187/747041860521820201/inconnu.gif","https://cdn.discordapp.com/attachments/610962514712199187/747042440673755206/1QLHra6rhuDFS.gif","https://cdn.discordapp.com/attachments/610962514712199187/747042702415101952/CE1sk31EVmjNS.gif"]
let dance = ["https://cdn.discordapp.com/attachments/610966104193499161/611321388699222026/giphy_7.gif","https://cdn.discordapp.com/attachments/610966104193499161/611321420030541854/tenor_21.gif","https://cdn.discordapp.com/attachments/610966104193499161/611321512984576022/tenor_22.gif","https://cdn.discordapp.com/attachments/610966104193499161/611321557389672501/tenor_23.gif","https://cdn.discordapp.com/attachments/610966104193499161/611321647059959858/tenor_24.gif","https://cdn.discordapp.com/attachments/610966104193499161/611321661144301611/tenor_25.gif","https://cdn.discordapp.com/attachments/610966104193499161/611321693461544991/tenor_26.gif","https://cdn.discordapp.com/attachments/610966104193499161/611321712835035183/tenor_27.gif","https://cdn.discordapp.com/attachments/610966104193499161/611321746561433621/tenor_28.gif","https://cdn.discordapp.com/attachments/610966104193499161/611321763099443210/tenor_29.gif","https://cdn.discordapp.com/attachments/610966104193499161/611321771999887360/tenor_30.gif","https://cdn.discordapp.com/attachments/610966104193499161/611322087360954397/tenor_31.gif","https://cdn.discordapp.com/attachments/610966104193499161/611322108353445945/tenor_32.gif","https://cdn.discordapp.com/attachments/610966104193499161/611322137818562570/tenor_33.gif","https://cdn.discordapp.com/attachments/610966104193499161/611322152305688636/tenor_34.gif","https://cdn.discordapp.com/attachments/610966104193499161/611341105493180476/giphy-8.gif","https://cdn.discordapp.com/attachments/610966104193499161/611341424256090113/3283101832_1_3_qq8svHVT.gif","https://cdn.discordapp.com/attachments/610966104193499161/660081046594912257/Mouses_Disney-Dance-Moves.gif","https://cdn.discordapp.com/attachments/610966104193499161/660081054391992350/giphy_13.gif","https://cdn.discordapp.com/attachments/610966104193499161/660081132221628416/14_dance_off_-_genie_01481bb0.gif","https://cdn.discordapp.com/attachments/610966104193499161/660081187016146965/EsmereldaDancing.gif","https://cdn.discordapp.com/attachments/610966104193499161/660081565400956928/giphy_14.gif","https://cdn.discordapp.com/attachments/610966104193499161/660081573583912981/giphy_15.gif","https://cdn.discordapp.com/attachments/610966104193499161/660081669885263882/giphy_16.gif","https://cdn.discordapp.com/attachments/610966104193499161/660081761082146836/tenor_36.gif","https://cdn.discordapp.com/attachments/610966104193499161/660083099845001217/giphy_18.gif","https://cdn.discordapp.com/attachments/610966104193499161/660083724251168789/giphy_23.gif","https://cdn.discordapp.com/attachments/610966104193499161/660084293967544330/giphy_25.gif","https://cdn.discordapp.com/attachments/610966104193499161/660084700655910922/tenor_51.gif","https://cdn.discordapp.com/attachments/610966104193499161/660084701112827937/giphy_26.gif","https://cdn.discordapp.com/attachments/610966104193499161/660084701112827938/giphy_27.gif"]
let please = ["https://cdn.discordapp.com/attachments/610966308766482462/611510905401770034/giphy_9.gif"]
let smile = ["https://cdn.discordapp.com/attachments/610966366077583360/611321728689373231/giphy.gif","https://cdn.discordapp.com/attachments/610966366077583360/611323195894661260/original.gif","https://cdn.discordapp.com/attachments/610966366077583360/611323245421133832/giphy-2.gif","https://cdn.discordapp.com/attachments/610966366077583360/611323307274403850/source-1.gif","https://cdn.discordapp.com/attachments/610966366077583360/611323341000671238/original-1.gif","https://cdn.discordapp.com/attachments/610966366077583360/611323390174822400/original-2.gif","https://cdn.discordapp.com/attachments/610966366077583360/611323478527967232/giphy-4.gif","https://cdn.discordapp.com/attachments/610966366077583360/611323526174998529/giphy-5.gif","https://cdn.discordapp.com/attachments/610966366077583360/611323627715035258/source-2.gif","https://cdn.discordapp.com/attachments/610966366077583360/611323680861192225/giphy-6.gif","https://cdn.discordapp.com/attachments/610966366077583360/611323754512908303/8a1a227ed33871956b23f8ce6dfa3b68.gif","https://cdn.discordapp.com/attachments/610966366077583360/611337356431196170/giphy_8.gif","https://cdn.discordapp.com/attachments/610966366077583360/611337454347223084/tenor_35.gif","https://cdn.discordapp.com/attachments/610966366077583360/611340984068079617/downloadfile-2.gif","https://cdn.discordapp.com/attachments/610966366077583360/611341188561240065/giphy-7.gif","https://cdn.discordapp.com/attachments/610966366077583360/660081883668938762/54e2d36690dea63c1b4263f3b22c074a.gif","https://cdn.discordapp.com/attachments/610966366077583360/660081933983678465/tumblr_m6r867nAqj1qm6oc3o1_500.gif","https://cdn.discordapp.com/attachments/610966366077583360/660082079840600064/tumblr_n1ydbufCK41s7psf4o1_500.gif"]
let hey = ["https://cdn.discordapp.com/attachments/610967355450982450/611515021742309376/tenor_39.gif","https://cdn.discordapp.com/attachments/610967355450982450/611515057054154752/tenor_40.gif","https://cdn.discordapp.com/attachments/610967355450982450/611515107779936256/tenor_41.gif","https://cdn.discordapp.com/attachments/610967355450982450/611515173941018624/tenor_42.gif","https://cdn.discordapp.com/attachments/610967355450982450/611515201174372352/tenor_43.gif","https://cdn.discordapp.com/attachments/610967355450982450/611515217419042833/tenor_44.gif","https://cdn.discordapp.com/attachments/610967355450982450/660082379205115914/tenor_46.gif","https://cdn.discordapp.com/attachments/610967355450982450/660082429079584779/3cef15821cf8c4d483d8b821a5452bf5.gif","https://cdn.discordapp.com/attachments/610967355450982450/660082510566391819/tenor_47.gif","https://cdn.discordapp.com/attachments/610967355450982450/660082639331393556/giphy_17.gif","https://cdn.discordapp.com/attachments/610967355450982450/660083971727556631/giphy_24.gif","https://cdn.discordapp.com/attachments/610967355450982450/660084717957283850/tenor_49.gif"]
let smug = ["https://cdn.discordapp.com/attachments/611124968700379146/611340491270914048/8a70e88f0068b23da1e6ea1201ecd0b8.gif","https://cdn.discordapp.com/attachments/611124968700379146/611514558158471178/tenor_37.gif","https://cdn.discordapp.com/attachments/611124968700379146/611514598280921123/tenor_38.gif","https://cdn.discordapp.com/attachments/611124968700379146/660082777924042772/20T3_1.gif","https://cdn.discordapp.com/attachments/611124968700379146/660082849835122688/tumblr_0aa32804f5d4ff2793852dacaa0d1446_d509c416_500.gif"]
let grimace = ["https://cdn.discordapp.com/attachments/611125086216388610/611340582446694412/T8lj.gif","https://cdn.discordapp.com/attachments/611125086216388610/611340687853486091/giphy-9.gif","https://cdn.discordapp.com/attachments/611125086216388610/611340764118777897/shock-gif.gif","https://cdn.discordapp.com/attachments/611125086216388610/611340803779985408/bff79429.gif","https://cdn.discordapp.com/attachments/611125086216388610/611351442049073172/tenor_36.gif","https://cdn.discordapp.com/attachments/611125086216388610/660082927526477824/photofunky.gif","https://cdn.discordapp.com/attachments/611125086216388610/660082928079863808/tumblr_m6ll3wgdxC1r8tvezo1_500.gif"]
let cry = ["https://cdn.discordapp.com/attachments/615902124093472780/660083260612804648/giphy_19.gif","https://cdn.discordapp.com/attachments/615902124093472780/660083438149304321/giphy_21.gif","https://cdn.discordapp.com/attachments/615902124093472780/660083953570414622/tenor_48.gif"]
           

function random(min, max){
    return Math.round(Math.random() * (max - min) + min)
}
function erreur(message,channel){
    let embed = new Discord.RichEmbed()
    .setColor("FE2E2E")
    .setAuthor("Erreur :",bot.user.displayAvatarURL)
    .setDescription(message)
    bot.channels.get(channel).send(embed)
}

bot.on("message",message => {
    if(message.channel.type === "dm") return message.react("❌")
  
  
  
  
  
    if(message.content === prefix + "help"){
        let embed = new Discord.RichEmbed()
        .setColor("2E2EFE")
        .setAuthor("Aide pour " + message.author.username + " :",bot.user.displayAvatarURL)
        .setDescription("**__:frame_photo: Gif :__**\n\n• `hug` - Faire un calin" +
        "\n• `kiss` - Faire un bisou" +
        "\n• `dance` - Faire une danse" +
        "\n• `please` - Prier fort" +
        "\n• `smile` - Faire un grand sourir" +
        "\n• `hey` - Faire coucou" +
        "\n• `smug` - Bouder" +
        "\n• `grimace` - Faire une grimace" +
        "\n• `cry` - Pleurer")
        message.channel.send(embed)
    }


    if(message.content.toLowerCase().startsWith(prefix + "hug")){
        if(cool.has(message.author.id)) return erreur("Vous devez attendre 5 secondes entre chaque commande !",message.channel.id)
        let alea = random(0,hug.length - 1)
        let mention = message.mentions.users.first() || bot.user
        let embed = new Discord.RichEmbed()
        .setColor("2E2EFE")
        .setDescription(":hugging: **" + message.author.username + "** fait un gros calin à **" + mention.username + "** !")
        .setImage(hug[alea])
        message.channel.send(embed)
        cool.add(message.author.id)
        setTimeout(() => {
            cool.delete(message.author.id)
        }, 5000);
    }

    if(message.content.toLowerCase().startsWith(prefix + "kiss")){
        if(cool.has(message.author.id)) return erreur("Vous devez attendre 5 secondes entre chaque commande !",message.channel.id)
        let alea = random(0,kiss.length - 1)
        let mention = message.mentions.users.first() || bot.user
        let embed = new Discord.RichEmbed()
        .setColor("2E2EFE")
        .setDescription(":kissing_heart: **" + message.author.username + "** embrasse fort **" + mention.username + "** !")
        .setImage(kiss[alea])
        message.channel.send(embed)
        cool.add(message.author.id)
        setTimeout(() => {
            cool.delete(message.author.id)
        }, 5000);
    }

    if(message.content.toLowerCase().startsWith(prefix + "dance")){
        if(cool.has(message.author.id)) return erreur("Vous devez attendre 5 secondes entre chaque commande !",message.channel.id)
        let alea = random(0,dance.length - 1)
        let mention = message.mentions.users.first() || bot.user
        let embed = new Discord.RichEmbed()
        .setColor("2E2EFE")
        .setDescription(":dancer: **" + message.author.username + "** danse avec **" + mention.username + "** !")
        .setImage(dance[alea])
        message.channel.send(embed)
        cool.add(message.author.id)
        setTimeout(() => {
            cool.delete(message.author.id)
        }, 5000);
    }

    if(message.content.toLowerCase().startsWith(prefix + "please")){
        if(cool.has(message.author.id)) return erreur("Vous devez attendre 5 secondes entre chaque commande !",message.channel.id)
        let alea = random(0,please.length - 1)
        let mention = message.mentions.users.first() || bot.user
        let embed = new Discord.RichEmbed()
        .setColor("2E2EFE")
        .setDescription(":pray: **S'il te plaiiiiiiiiit** !")
        .setImage(please[alea])
        message.channel.send(embed)
        cool.add(message.author.id)
        setTimeout(() => {
            cool.delete(message.author.id)
        }, 5000);
    }

    if(message.content.toLowerCase().startsWith(prefix + "smile")){
        if(cool.has(message.author.id)) return erreur("Vous devez attendre 5 secondes entre chaque commande !",message.channel.id)
        let alea = random(0,smile.length - 1)
        let mention = message.mentions.users.first() || bot.user
        let embed = new Discord.RichEmbed()
        .setColor("2E2EFE")
        .setDescription(":grin: **" + message.author.username + "** fait un grand sourir à **" + mention.username + "** !")
        .setImage(smile[alea])
        message.channel.send(embed)
        cool.add(message.author.id)
        setTimeout(() => {
            cool.delete(message.author.id)
        }, 5000);
    }

    if(message.content.toLowerCase().startsWith(prefix + "hey")){
        if(cool.has(message.author.id)) return erreur("Vous devez attendre 5 secondes entre chaque commande !",message.channel.id)
        let alea = random(0,hey.length - 1)
        let mention = message.mentions.users.first() || bot.user
        let embed = new Discord.RichEmbed()
        .setColor("2E2EFE")
        .setDescription(":wave: **" + message.author.username + "** fait coucou à **" + mention.username + "** !")
        .setImage(hey[alea])
        message.channel.send(embed)
        cool.add(message.author.id)
        setTimeout(() => {
            cool.delete(message.author.id)
        }, 5000);
    }

    if(message.content.toLowerCase().startsWith(prefix + "smug")){
        if(cool.has(message.author.id)) return erreur("Vous devez attendre 5 secondes entre chaque commande !",message.channel.id)
        let alea = random(0,smug.length - 1)
        let mention = message.mentions.users.first() || bot.user
        let embed = new Discord.RichEmbed()
        .setColor("2E2EFE")
        .setDescription(":unamused: **" + message.author.username + "** boude !")
        .setImage(smug[alea])
        message.channel.send(embed)
        cool.add(message.author.id)
        setTimeout(() => {
            cool.delete(message.author.id)
        }, 5000);
    }

    if(message.content.toLowerCase().startsWith(prefix + "grimace")){
        if(cool.has(message.author.id)) return erreur("Vous devez attendre 5 secondes entre chaque commande !",message.channel.id)
        let alea = random(0,grimace.length - 1)
        let mention = message.mentions.users.first() || bot.user
        let embed = new Discord.RichEmbed()
        .setColor("2E2EFE")
        .setDescription(":stuck_out_tongue_closed_eyes:  **" + message.author.username + "** fait sa plus belle grimace pour **" + mention.username + "** !")
        .setImage(grimace[alea])
        message.channel.send(embed)
        cool.add(message.author.id)
        setTimeout(() => {
            cool.delete(message.author.id)
        }, 5000);
    }

if(message.content.toLowerCase().startsWith(prefix + "cry")){
        if(cool.has(message.author.id)) return erreur("Vous devez attendre 5 secondes entre chaque commande !",message.channel.id)
        let alea = random(0,cry.length - 1)
        let mention = message.mentions.users.first() || bot.user
        let embed = new Discord.RichEmbed()
        .setColor("2E2EFE")
        .setDescription(":sob:  **" + message.author.username + "** pleure à cause de **" + mention.username + "** !")
        .setImage(cry[alea])
        message.channel.send(embed)
        cool.add(message.author.id)
        setTimeout(() => {
            cool.delete(message.author.id)
        }, 5000);
    }

  
  if(message.content === "change"){
    if(!staff.includes(message.author.id)) return message.react("❌")
    bot.channels.get("620292700260007970").setName("💫┃𝗗isney-𝗙𝗥-➳" + (message.guild.memberCount - message.guild.members.filter(e => e.user.bot).size))
    message.react("✅")
  }



    

    
})

bot.on("guildMemberAdd",member => {
  if(member.bot === true) return
  bot.channels.get("620292700260007970").setName("💫┃𝗗isney-𝗙𝗥-➳" + (member.guild.memberCount - member.guild.members.filter(e => e.user.bot).size))
})

bot.on("guildMemberRemove",member => {
  if(member.bot === true) return
  bot.channels.get("620292700260007970").setName("💫┃𝗗isney-𝗙𝗥-➳" + (member.guild.memberCount - member.guild.members.filter(e => e.user.bot).size))
})




bot.login("NjExMjc3ODAyODEzMTI4Nzk1.XVRfGw.CrVEt7_qvlHGVSEHPsfDDRXncT8")
