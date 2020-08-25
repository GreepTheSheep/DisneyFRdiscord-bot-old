const Discord = require('discord.js')

function change(message, client, prefix, cool, config){
    if(message.content == prefix + "change"){
        if(!config.staff.includes(message.author.id)) return
        client.channels.get("620292700260007970").setName("💫┃𝗗isney-𝗙𝗥-➳" + (message.guild.memberCount - message.guild.members.filter(e => e.user.client).size))
        message.react("✅")
      }
}

module.exports = change
