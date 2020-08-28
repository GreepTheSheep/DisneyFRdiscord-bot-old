const Discord = require('discord.js')

async function newTicket(message, client,prefix, config, f){
    let embed = new Discord.RichEmbed
    embed.setColor('#5063E8')
    .setAuthor('Veuillez patienter...', 'https://ssl.gstatic.com/s2/oz/images/notifications/spinner_64_3f4fa14117c586c002a98cd7c5fbb2d3.gif')
    .setTitle('Création du menu en cours')
    const menu = await message.author.send('WIP', embed)

    await menu.react('🔘')
    await menu.react('✅')

    const filter = (reaction, user) => {
	    return ['🔘', '✅'].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    menu.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '🔘') {
			message.reply('you reacted with a circle.');
		} else {
			message.reply('you reacted with a check.');
		}
	})
	.catch(collected => {
		message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
	});
}

module.exports = newTicket