const Discord = require('discord.js')

function direct(message, client,prefix, config, f){
    if (message.content.startsWith(prefix + 'modmail')){
        const newTicket = require('./modmail/new.js')
        newTicket(message, client, prefix, config, f)
    }
    else {
        const helpDM = require('./help-dm.js')
        helpDM(message, client, prefix, config, f)
    }
}

module.exports = direct