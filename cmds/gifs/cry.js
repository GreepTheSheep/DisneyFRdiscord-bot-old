const Discord = require('discord.js')
const fs = require('fs')

function cry(message, client, prefix, cool, f){
    if(message.content.toLowerCase().startsWith(prefix + "cry")){
        const cryList = JSON.parse(fs.readFileSync('./data/gifs/cry.json'))
        if(cool.has(message.author.id)) return f.erreur("Vous devez attendre 5 secondes entre chaque commande !",message.channel.id)
        let alea = f.random(0,cryList.length - 1)
        let mention = message.mentions.users.first() || client.user
        let embed = new Discord.RichEmbed()
        .setColor("2E2EFE")
        .setDescription(":sob:  **" + message.author.username + "** pleure à cause de **" + mention.username + "** !")
        .setImage(cryList[alea])
        message.channel.send(embed)
        cool.add(message.author.id)
        setTimeout(() => {
            cool.delete(message.author.id)
        }, 5000);
    }
}

module.exports = cry