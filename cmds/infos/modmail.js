const Discord = require('discord.js')

function modmailInfo(message, client,prefix, config, f){
    if (message.content.toLowerCase().startsWith(prefix + 'modmail')){
        let embed = new Discord.RichEmbed
        embed.setImage('https://cdn.discordapp.com/attachments/662735703284908067/748602330798358620/modmail_pascal.gif')
        embed.setTitle('Utilisation du modmail')
        embed.setDescription('Le modmail est un outil permettant de contacter les admins et modérateurs du serveur pour signaler quelqu\'un ou nous poser des questions ou pour faire une candidature ou pour une demande de partenariat.\n\n__Pour l\'utiliser, il faut ouvrir un ticket en message privé à moi en tapant la même commande__')
        embed.setColor('RANDOM')

        message.channel.send('Le modmail est toujours en cours de construction...', embed)
    }
}

module.exports = modmailInfo