const Discord = require('discord.js')
const fs = require('fs')

function modmailGetChat(message, client, prefix, config, f){
    if (message.channel.parentID == message.guild.channels.find(c => c.name.toLowerCase() == 'modmail' && c.type == 'category').id){
        var attachurl
        if (message.attachments.size > 0) attachurl = message.attachments.array()[0].url
        else attachurl = ''

        var filecontent = fs.readFileSync('./data/modmail/' + message.channel.name + '.txt')
        fs.writeFileSync('./data/modmail/' + message.channel.name + '.txt', '\n' + filecontent + `${message.author.tag} : ${message.content} ${attachurl}`)       
    }
}

module.exports = modmailGetChat