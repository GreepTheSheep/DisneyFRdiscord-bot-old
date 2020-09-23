const Discord = require('discord.js')

function modmailPartner(message, client, prefix, config, f, reaction, menu, server){
    server.createChannel('partener-' + message.author.username, {type: "text"}).then(async channel=>{
        channel.overwritePermissions(server.roles.find(r => r.name == '@everyone'), {READ_MESSAGES: false})
        channel.overwritePermissions(message.author.id, {READ_MESSAGES: true})
        channel.overwritePermissions('600643775978799115', {READ_MESSAGES: true})

        channel.overwritePermissions('330030648456642562', {READ_MESSAGES: true}) // Accees a Greep

        let category = server.channels.find(c => c.id == '757559028661354536' && c.type == "category");

        if (!category) console.error("La catégorie Modmail n'existe pas...")
        channel.setParent(category.id);

        channel.send('<:Dipper:673927256778997760> Bienvenue dans le modmail <@' + message.author.id + '>!\n- __Vous avez choisi la raison de faire une demande de partenaire__, le <@&600643775978799115> vous répondra !\n\n\`\`\`Staff: utilisez la commande ' + prefix + 'mmclose pour fermer le ticket\`\`\`')
        fs.writeFileSync('./data/modmail/' + channel.name + '.txt', f.enteteDeTicket(message.author.tag, 'Demande de partenariat'), 'utf-8')

        let embed = new Discord.RichEmbed
        embed.setColor('#12E74D')
        .setTitle('✅ Modmail crée!')
        .setDescription('Veuillez vous rendre sur <#' + channel.id + '>')
        menu.edit(embed)
    })
}

module.exports = modmailPartner