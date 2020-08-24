const Discord = require('discord.js')
const fs = require('fs')

function kiss(message, client, prefix, cool, f){
    if(message.content.toLowerCase().startsWith(prefix + "kiss")){
        const kissList = JSON.parse(fs.readFileSync('./data/gifs/kiss.json'))
        if(cool.has(message.author.id)) return f.erreur("Vous devez attendre 5 secondes entre chaque commande !",message.channel.id)
        let alea = f.random(0,kissList.length - 1)
        let mention = message.mentions.users.first() || client.user
        let embed = new Discord.RichEmbed()
        .setColor("2E2EFE")
        .setDescription(":kissing_heart: **" + message.author.username + "** embrasse fort **" + mention.username + "** !")
        .setImage(kissList[alea])
        message.channel.send(embed)
        cool.add(message.author.id)
        setTimeout(() => {
            cool.delete(message.author.id)
        }, 5000);
    }
}

module.exports = kiss