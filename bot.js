const Discord = require("discord.js")
const client = new Discord.Client()
const fs = require('fs')
const config = JSON.parse(fs.readFileSync('./data/config.json', "utf-8"))
const f = require('./functions.js')
let prefix = config.prefix
let cool = new Set()
let staff = config.staff

client.on("ready" , () => {
    client.user.setActivity('/aide') 
    console.log(`${client.user.tag} est prêt sur ${client.guilds.size} serveurs ! \n-------------------------------------------`)
})

client.on("message",message => {
    if (message.author.bot) return

    if(message.channel.type === "dm") return message.reply("Le modmail arrivera bientôt, vous verrez ça va péter du feu 🔥")
  
    if (!message.content.startsWith(prefix)) return
 

    const cmds_index = require('./cmds/cmds_index.js')
    cmds_index(message, client, prefix, cool, config, f)
    
})

client.on("guildMemberAdd",member => {
  if(member.client === true) return
  client.channels.get("620292700260007970").setName("💫┃𝗗isney-𝗙𝗥-➳" + (member.guild.memberCount - member.guild.members.filter(e => e.user.client).size))
})

client.on("guildMemberRemove",member => {
  if(member.client === true) return
  client.channels.get("620292700260007970").setName("💫┃𝗗isney-𝗙𝗥-➳" + (member.guild.memberCount - member.guild.members.filter(e => e.user.client).size))
})

client.login(config.token)
