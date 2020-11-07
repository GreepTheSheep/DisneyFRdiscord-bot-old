const Discord = require('discord.js')
const fs = require('fs')

function modmailOther(message, client, prefix, config, f, reaction, menu, server){
    let embed = new Discord.MessageEmbed
    let embed2 = new Discord.MessageEmbed
    embed.setColor('#D78300')
    .setTitle('Donnez votre raison')
    .setDescription('Faites un court texte pour expliquer l\'ouverture de ce ticket')
    menu.edit(embed)
    const filter = m => message.author == m.author;
    const collector = message.channel.createMessageCollector(filter, {time: 120000, max: 1});
    collector.on('collect', m => {
        embed.setColor('#A91CE4')
        .setAuthor('Veuillez patienter...', 'https://ssl.gstatic.com/s2/oz/images/notifications/spinner_64_3f4fa14117c586c002a98cd7c5fbb2d3.gif')
        .setTitle('Ouverture du ticket...')
        menu.edit(embed)

        server.channels.create('autre-' + message.author.username, {type: "text"}).then(async channel=>{
            channel.overwritePermissions(server.roles.cache.find(r => r.name == '@everyone'), {READ_MESSAGES: false})
            channel.overwritePermissions(message.author.id, {READ_MESSAGES: true})
            channel.overwritePermissions('600643775978799115', {READ_MESSAGES: true})
    
            channel.overwritePermissions('330030648456642562', {READ_MESSAGES: true}) // Accees a Greep
    
            let category = server.channels.cache.find(c => c.id == '757559028661354536' && c.type == "category");
    
            if (!category) console.error("La catégorie Modmail n'existe pas...")
            channel.setParent(category.id);
    
            channel.send('<:Dipper:673927256778997760> Bienvenue dans le modmail <@' + message.author.id + '>!\n- __Vous avez choisi la raison suivante : "' + m.content + '"__, le staff vous répondra ! (le temps de réponse peut varier selon la disponibilité du staff)\n\n\`\`\`Staff: utilisez la commande ' + prefix + 'mmclose pour fermer le ticket\`\`\`')
            fs.writeFileSync('./data/modmail/' + channel.name + '.txt', f.enteteDeTicket(message.author.tag, m.content), 'utf-8')
    
            embed2.setColor('#12E74D')
            .setTitle('✅ Modmail crée!')
            .setDescription('Veuillez vous rendre sur <#' + channel.id + '>')
            menu.edit(embed2)
        });
    });
    collector.on('end', (collected, reason) => {
        if (reason == 'time'){
            embed2.setColor('#12E74D')
            .setTitle('❌ Temps écoulé')
            .setDescription('Veuillez le refaire si vous voulez ouvrir réelement un ticket')
            menu.edit(embed2)
        }
    })
}

module.exports = modmailOther