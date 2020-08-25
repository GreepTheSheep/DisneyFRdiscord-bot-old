// Le patch note est à modifier dans data/textes/Patch-Notes.md
// Le numéro de version dans package.json

const Discord = require('discord.js')
const fs = require('fs')

async function patchnote(message, client, prefix, config, f){
    if(message.content.startsWith(prefix + "patchnote")){
        let embed = new Discord.RichEmbed()
        embed.setColor("2E2EFE")
        .setAuthor(`Notes de mise à jour de ${client.user.username}:`,client.user.displayAvatarURL)
        .setDescription(fs.readFileSync('./data/textes/Patch-Notes.md', 'utf-8'))
        .setFooter("Version actuelle: " + JSON.parse(fs.readFileSync('./package.json', 'utf-8')).version)
        if (message.channel.id == '600466257615126559' || message.channel.id == '747049063764983849'){
          let args = message.content.split(" ");
          args.shift();
          message.delete()
          var startText
          if (args[0] == 'ping') startText = 'Salut les <@&660632597411397641> ! On m\'as fait une *grande* mise à jour! Amusez-vous bien <:Pascal:619625184323960842>'
          else startText =  'Salut les geeks ! On m\'as fait une *petite* mise à jour! Amusez-vous bien <:Pascal:619625184323960842>'
          const m = await message.channel.send(startText, embed)
          m.react('600993200932651021')
          m.react('602243599177875457')
        } else message.channel.send(embed)
    }
}

module.exports = patchnote