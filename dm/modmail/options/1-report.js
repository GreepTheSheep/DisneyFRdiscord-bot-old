const Discord = require('discord.js')

function modmailReport(message, client, prefix, config, f, reaction, menu, server){
    // server.createChannel('report-' + message.author.username, {type: "text"}).then(channel=>{
    //     channel.overwritePermissions(message.guild.roles.find("name", "@everyone"), {READ_MESSAGES: false})
    //     channel.owerritePermissions(message.author.id, {READ_MESSAGES: true})
    //     channel.owerritePermissions('600643775978799115', {READ_MESSAGES: true})
    // })

    message.author.send('On y bosse, déso')
}

module.exports = modmailReport