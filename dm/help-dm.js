// IMPORTANT : La liste des commandes est à modifier dans le fichier data/textes/Commandes-MP.md, et non dans ce fichier

const Discord = require('discord.js')
const fs = require('fs')

function helpDM(message, client,prefix, config, f){
    let embed = new Discord.RichEmbed
    embed.setColor('RANDOM')
    .setTitle(`Commandes de ${client.user.username} en message privé:`)
    .setDescription(fs.readFileSync('./data/textes/Commandes-MP.md', 'utf-8'))
    
    if (message.content.startsWith('help') || message.content.startsWith(prefix + 'help')) embed.addField('Et sinon?', 'Vous savez qu\'on à caché des commandes un peu partout ?')
    
    if (message.content.startsWith('help') || message.content.startsWith(prefix + 'help')) message.author.send(embed)
    else message.author.send('Je ne vois pas ce que t\'as mis... Je suis qu\'un bot et j\'ai pas de cerveau 😧', embed)
}

module.exports = helpDM