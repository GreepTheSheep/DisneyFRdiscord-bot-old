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

    if(message.channel.type === "dm") {
      const direct = require('./dm/dm-index.js')
      direct(message, client,prefix, config, f)
    } else {
      
      const modmailGetChat = require('./cmds/modmail-get-chat.js')
      modmailGetChat(message, client, prefix, config, f)

      const cmds_index = require('./cmds/cmds_index.js')
      cmds_index(message, client, prefix, cool, config, f)
    }
  
    
    
})

/*
client.on("guildMemberAdd",member => {
  const total = member.guild.members.array().length;
      const bots = member.guild.members.filter(m => m.user.bot).size; 
      const members = total - bots
  client.channels.cache.get("620292700260007970").setName("💫┃𝗗isney-𝗙𝗥-➳" + members)
})

client.on("guildMemberRemove",member => {
  const total = member.guild.members.array().length;
      const bots = member.guild.members.filter(m => m.user.bot).size; 
      const members = total - bots
  client.channels.cache.get("620292700260007970").setName("💫┃𝗗isney-𝗙𝗥-➳" + members)
})
*/

client.login(config.token)
