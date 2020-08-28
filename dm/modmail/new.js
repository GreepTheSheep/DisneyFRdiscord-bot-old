const Discord = require('discord.js')

async function newTicket(message, client,prefix, config, f){
    let embed = new Discord.RichEmbed
    let embed2 = new Discord.RichEmbed

    embed.setColor('#5063E8')
    .setAuthor('Veuillez patienter...', 'https://ssl.gstatic.com/s2/oz/images/notifications/spinner_64_3f4fa14117c586c002a98cd7c5fbb2d3.gif')
    .setTitle('Création du menu en cours')
    const menu = await message.author.send('Actuellement en phase de test', embed)

    const emojis = [
        '1️⃣', // Signalement
        '2️⃣', // Question
        '3️⃣', // Candidature
        '4️⃣', // Partenairait
        '5️⃣', // Autre
    ]

    embed2.setColor('#1CE488')
        .setTitle('Bienvenue dans le modmail!')
        .setDescription('**Sélectionnez une raison de conctater le staff:**\n\n:one: - Signaler quelqu\'un\n:two: - Poser une question\n:three: - Poser une candidature\n:four: - Demande de partenairiat\n:five: - Autre demande\n\n:x: - Annuler et fermer')

    emojis.forEach(async e=>{
        await menu.react(e)
    })
    await menu.react('❌').then(m=>menu.edit(embed2))

    emojis.push('❌')
    const filter = (reaction, user) => {
	    return emojis.includes(reaction.emoji.name) && user.id === message.author.id;
    };

    menu.awaitReactions(filter, { max: 1, time: 120000, errors: ['time'] })
	.then(collected => {
        const reaction = collected.first();
        
        if (reaction.emoji.name == '❌'){
            embed2.setColor('#FF0000')
            .setTitle('Annulé')
            .setDescription('Bye! 👋')
            menu.edit(embed2).then(m=>menu.delete(5000))
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