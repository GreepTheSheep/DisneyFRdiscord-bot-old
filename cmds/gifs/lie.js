const Discord = require('discord.js')
const fs = require('fs')

function lie(message, client, prefix, cool, f){
    if(message.content.toLowerCase().startsWith(prefix + "lie")){
        const lieList = JSON.parse(fs.readFileSync('./data/gifs/lie.json'))
        if(cool.has(message.author.id)) return f.erreur("Vous devez attendre 5 secondes entre chaque commande !",message.channel.id)
        let alea = f.random(0,lieList.length - 1)
        let mention = message.mentions.users.first() || client.user
        let embed = new Discord.MessageEmbed()
        .setColor("2E2EFE")
        .setDescription(":lying_face: **Arrête de mentir** !")
        .setImage(lieList[alea])
        message.channel.send(embed)
        cool.add(message.author.id)
        setTimeout(() => {
            cool.delete(message.author.id)
        }, 5000);
    }
}

module.exports = lie
