// IMPORTANT : La liste des commandes est à modifier dans le fichier data/textes/Commandes.md, et non dans ce fichier

const Discord = require('discord.js')
const fs = require('fs')

function help(message, client, prefix){
    if (message.content.startsWith(prefix + "help") || message.content.startsWith(prefix + "aled") || message.content.startsWith(prefix + "aide")){
        let embed = new Discord.RichEmbed()
        embed.setColor("2E2EFE")
        .setAuthor("Aide pour " + message.author.username + " :",client.user.displayAvatarURL)
        .setDescription(fs.readFileSync('./data/textes/Commandes.md', 'utf-8'))
        .setFooter(`Tu es beau, tu le sais ?`)
        message.channel.send(embed)
    }
}

module.exports = help
