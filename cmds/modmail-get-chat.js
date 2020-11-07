const Discord = require('discord.js')
const fs = require('fs')

function modmailGetChat(message, client, prefix, config, f){
    if (message.channel.parentID == '757559028661354536'){
        fs.readFile('./data/modmail/' + message.channel.name + '.txt', (err, data) => {
            if (err) console.error(err)
            
            var attachurl
            if (message.attachments.size > 0) attachurl = message.attachments.array()[0].url
            else attachurl = ''

            fs.writeFileSync('./data/modmail/' + message.channel.name + '.txt', data + `\n${message.author.tag} : ${message.content} ${attachurl}`, 'utf-8')
          });
    }
}

module.exports = modmailGetChat