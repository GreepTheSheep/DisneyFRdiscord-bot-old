const Discord = require('discord.js')

function change(message, client, prefix, cool, config){
    if(message.content == prefix + "change"){
      const total = message.guild.members.array().length;
      const bots = message.guild.members.filter(m => m.user.bot).size; 
      const members = total - bots
        client.channels.get("620292700260007970").setName("💫┃𝗗isney-𝗙𝗥-➳" + members)
        message.react("✅")
      }
}

module.exports = change
