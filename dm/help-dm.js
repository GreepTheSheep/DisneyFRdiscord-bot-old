const Discord = require('discord.js')

function helpDM(message, client,prefix, config, f){
    let embed = new Discord.RichEmbed
    embed.setColor('RANDOM')
    .setTitle(`Commandes de ${client.user.username} en message privé:`)
    .addField('Modmail', '`/modmail` - Ouvre le menu modmail pour pouvoir contacter les mods')
    if (!message.content.startsWith('help') || !message.content.startsWith(prefix + 'help')) embed.addField('Autres:', 'Vous savez qu\'on à caché des commandes un peu partout ?\n\nSinon niveau nouveautés c\'est vide')
    if (message.content.startsWith('help') || message.content.startsWith(prefix + 'help')) message.author.send(embed)
    else message.author.send('Je ne vois pas ce que t\'as mis... Je suis qu\'un bot et j\'ai pas de cerveau 😧', embed)
}

module.exports = helpDM