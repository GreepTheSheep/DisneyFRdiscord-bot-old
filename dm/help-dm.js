// IMPORTANT : La liste des commandes est à modifier dans le fichier data/textes/Commandes-MP.md, et non dans ce fichier

const Discord = require('discord.js')
const fs = require('fs')

function helpDM(message, client,prefix, config, f){
    if (message.content.startsWith('help') || message.content.startsWith(prefix + 'help') || message.content.startsWith('aide') || message.content.startsWith(prefix + 'aide') || message.content.startsWith('aled') || message.content.startsWith(prefix + 'aled')) {
        let embed = new Discord.MessageEmbed
        embed.setColor('RANDOM')
        .setTitle(`Commandes de ${client.user.username} en message privé:`)
        .setDescription(fs.readFileSync('./data/textes/Commandes-MP.md', 'utf-8'))
        
        embed.addField('Et sinon?', 'Vous savez qu\'on à caché des commandes un peu partout ?')
        
        message.author.send(embed)
    }
}

module.exports = helpDM