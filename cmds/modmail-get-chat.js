const Discord = require('discord.js')
const fs = require('fs')
const { Attachment } = require('discord.js')
const modmailInfo = require('./infos/modmail')

function modmailGetChat(message, client, prefix, config, f){
    if (message.channel.parentID == message.guild.channels.find(c => c.name.toLowerCase() == 'modmail' && c.type == 'category').id){
        var attachurl
        if (message.attachments.size > 0) attachurl = message.attachments.array()[0].url
        else attachurl = ''

        if (fs.existsSync('./data/modmail/' + message.channel.name + '.txt')) {
            fs.writeFileSync('./data/modmail/' + message.channel.name + '.txt', fs.readFileSync('./data/modmail/' + message.channel.name + '.txt') + `${message.author.tag} : ${message.content} ${attachurl}\n`)
        } else {
            fs.writeFileSync('./data/modmail/' + message.channel.name + '.txt', `${message.author.tag} : ${message.content} ${attachurl}\n`)
        }
        
    }
}

module.exports = modmailGetChat