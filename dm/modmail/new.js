const Discord = require('discord.js')

async function newTicket(message, client,prefix, config, f){
    let embed = new Discord.RichEmbed
    let embed2 = new Discord.RichEmbed

    embed.setColor('#5063E8')
    .setAuthor('Veuillez patienter...', 'https://ssl.gstatic.com/s2/oz/images/notifications/spinner_64_3f4fa14117c586c002a98cd7c5fbb2d3.gif')
    .setTitle('Création du menu en cours')
    const menu = await message.author.send('Actuellement en phase de test', embed)

    const emojis = [
        ':one:', // Signalement
        ':two:', // Question
        ':three:', // Candidature
        ':four:', // Partenairait
        ':five:', // Autre
        ':cross:' // Annuler
    ]

    emojis.forEach(e=>{
        await menu.react(e)
    })

    const filter = (reaction, user) => {
	    return emojis.includes(reaction.emoji.name) && user.id === message.author.id;
    };

    embed2.setColor('#1CE488')
    .setTitle('Bienvenue dans le modmail!')
    .setDescription('**Sélectionnez une raison de conctater le staff:**\n\n:one: - Signaler quelqu\'un\n:two: - Poser une question\n:three: - Poser une candidature\n:four: - Demande de partenairiat\n:five: - Autre demande\n\n:cross: - Annuler et fermer')
    menu.edit(embed2)

    menu.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
        const reaction = collected.first();
        
        if (reaction.emoji.name === ':cross:'){
            menu.edit('Annulé').then(m=>menu.delete(5000).then(m=>message.delete()))
        } else {
            embed.setColor('#A91CE4')
            .setTitle('Ouverture du ticket...')
            menu.edit(embed)

            if (reaction.emoji.name == emojis[0]) {
                const modmailReport = require('./options/1-report.js')
                modmailReport(message, client, prefix, config, f, reaction, menu)
            } else if (reaction.emoji.name == emojis[1]) {
                const modmailAsk = require('./options/2-ask.js')
                modmailAsk(message, client, prefix, config, f, reaction, menu)
            } else if (reaction.emoji.name == emojis[2]) {
                const modmailCandidate = require('./options/3-candidate.js')
                modmailCandidate(message, client, prefix, config, f, reaction, menu)
            } else if (reaction.emoji.name == emojis[3]) {
                const modmailPartner = require('./options/4-partner.js')
                modmailPartner(message, client, prefix, config, f, reaction, menu)
            } else if (reaction.emoji.name == emojis[4]) {
                const modmailOther = require('./options/5-other.js')
                modmailOther(message, client, prefix, config, f, reaction, menu)
            }
        }		
	})
	.catch(collected => {
		message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
	});
}

module.exports = newTicket