const Discord = require('discord.js')
const fs = require('fs')

function angry(message, client, prefix, cool, f){
    if(message.content.toLowerCase().startsWith(prefix + "angry")){
        const angryList = JSON.parse(fs.readFileSync('./data/gifs/angry.json'))
        if(cool.has(message.author.id)) return f.erreur("Vous devez attendre 5 secondes entre chaque commande !",message.channel.id)
        let alea = f.random(0,angryList.length - 1)
        let mention = message.mentions.users.first() || client.user
        let embed = new Discord.RichEmbed()
        .setColor("2E2EFE")
        .setDescription(":angry:  **" + message.author.username + "** est énervé contre **" + mention.username + "** !")
        .setImage(angryList[alea])
        message.channel.send(embed)
        cool.add(message.author.id)
        setTimeout(() => {
            cool.delete(message.author.id)
        }, 5000);
    }
}

module.exports = angry
