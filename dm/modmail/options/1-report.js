const Discord = require('discord.js')

function modmailReport(message, client, prefix, config, f, reaction, menu, server){
    server.createChannel('report-' + message.author.username, {type: "text"}).then(async channel=>{
        channel.overwritePermissions(server.roles.find(r => r.name == '@everyone'), {READ_MESSAGES: false})
        channel.overwritePermissions(message.author.id, {READ_MESSAGES: true})
        channel.overwritePermissions('600643775978799115', {READ_MESSAGES: true})

        channel.overwritePermissions('330030648456642562', {READ_MESSAGES: true}) // Accees a Greep

        let category = server.channels.find(c => c.id == '757559028661354536' && c.type == "category");

        if (!category) console.error("La catégorie Modmail n'existe pas...")
        channel.setParent(category.id);

        channel.send('<:Dipper:673927256778997760> Bienvenue dans le modmail <@' + message.author.id + '>!\n- __Vous avez choisi la raison de signaler quelqu\'un__, apportez ici vos raisons et preuves, le <@&600643775978799115> vous répondra !\n\n\`\`\`Staff: utilisez la commande ' + prefix + 'mmclose pour fermer le ticket\`\`\`')
        fs.writeFileSync('./data/modmail/' + channel.name + '.txt', f.enteteDeTicket(message.author.tag, 'Signaler une personne'), 'utf-8')

        let embed = new Discord.RichEmbed
        embed.setColor('#12E74D')
        .setTitle('✅ Modmail crée!')
        .setDescription('Veuillez vous rendre sur <#' + channel.id + '>')
        menu.edit(embed)
    })
}

module.exports = modmailReport