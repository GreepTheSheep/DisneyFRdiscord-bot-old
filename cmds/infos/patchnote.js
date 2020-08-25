// Le patch note est à modifier dans data/textes/Patch-Notes.md
// Le numéro de version dans package.json

const Discord = require('discord.js')
const fs = require('fs')

function patchnote(message, client, prefix, config, f){
    if(message.content.startsWith(prefix + "patchnote")){
        let embed = new Discord.RichEmbed()
        embed.setColor('RANDOM')
        .setAuthor(`Notes de mise à jour de ${client.user.username}:`,client.user.displayAvatarURL)
        .setDescription(fs.readFileSync('./data/textes/Patch-Notes.md', 'utf-8'))
        .setFooter("Version actuelle: " + JSON.parse(fs.readFileSync('./package.json', 'utf-8')).version)
        if (message.channel.id == '600466257615126559' || message.channel.id == '747049063764983849'){
          let args = message.content.split(" ");
          args.shift();
          message.delete()
          var startText
          if (args[0] == 'ping') startText = 'Salut ! On m\'a fait une *grande* mise à jour! Amusez-vous bien <:Pascal:619625184323960842>\n<@&660632597411397641>'
          else startText =  'Salut ! On m\'a fait une *petite* mise à jour! Amusez-vous bien <:Pascal:619625184323960842>'
          message.channel.send(startText, embed)
        } else message.channel.send(embed)
    }
}

module.exports = patchnote