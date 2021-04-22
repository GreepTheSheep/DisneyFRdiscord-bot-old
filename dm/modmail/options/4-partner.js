const Discord = require('discord.js')
const fs = require('fs')

function modmailPartner(message, client, prefix, config, f, reaction, menu, server){
    server.channels.create('partener-' + message.author.username, {type: "text"}).then(async channel=>{
        channel.updateOverwrite(server.roles.cache.find(r => r.name == '@everyone'), {
            VIEW_CHANNEL: false
        })

        channel.updateOverwrite('600643775978799115', {
            VIEW_CHANNEL: true
        })

        channel.updateOverwrite('330030648456642562', {
            VIEW_CHANNEL: true,
            MANAGE_CHANNELS: true
        })

        channel.updateOverwrite(message.author.id, {
            VIEW_CHANNEL: true
        })

        let category = server.channels.cache.find(c => c.id == '757559028661354536' && c.type == "category");

        if (!category) console.error("La catégorie Modmail n'existe pas...")
        channel.setParent(category.id);

        channel.send('<:Dipper:832564058447544361> Bienvenue dans le modmail <@' + message.author.id + '>!\n- __Vous avez choisi la raison de faire une demande de partenaire__, le <@&600643775978799115> vous répondra !\n\n\`\`\`Staff: utilisez la commande ' + prefix + 'mmclose pour fermer le ticket\`\`\`')
        fs.writeFileSync('./data/modmail/' + channel.name + '.txt', f.enteteDeTicket(message.author.tag, 'Demande de partenariat'), 'utf-8')

        let embed = new Discord.MessageEmbed
        embed.setColor('#12E74D')
        .setTitle('✅ Modmail crée!')
        .setDescription('Veuillez vous rendre sur <#' + channel.id + '>')
        menu.edit(embed)
    })
}

module.exports = modmailPartner
