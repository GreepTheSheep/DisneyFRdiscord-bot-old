const Discord = require('discord.js')
const fs = require('fs')

function dance(message, client, prefix, cool, f){
    if(message.content.toLowerCase().startsWith(prefix + "dance")){
        const danceList = JSON.parse(fs.readFileSync('./data/gifs/dance.json'))
        if(cool.has(message.author.id)) return f.erreur("Vous devez attendre 5 secondes entre chaque commande !",message.channel.id)
        let alea = f.random(0,danceList.length - 1)
        let mention = message.mentions.users.first() || client.user
        let embed = new Discord.MessageEmbed()
        .setColor("2E2EFE")
        .setDescription(":dancer: **" + message.author.username + "** danse avec **" + mention.username + "** !")
        .setImage(danceList[alea])
        message.channel.send(embed)
        cool.add(message.author.id)
        setTimeout(() => {
            cool.delete(message.author.id)
        }, 5000);
    }
}

module.exports = dance