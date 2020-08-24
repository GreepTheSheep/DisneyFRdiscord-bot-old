const Discord = require('discord.js')
const fs = require('fs')

function hug(message, client, prefix, cool, f){
    if(message.content.toLowerCase().startsWith(prefix + "hug")){
        const hugList = JSON.parse(fs.readFileSync('./data/gifs/hugg.json'))
        if(cool.has(message.author.id)) return f.erreur("Vous devez attendre 5 secondes entre chaque commande !",message.channel.id)
        let alea = f.random(0,hugList.length - 1)
        let mention = message.mentions.users.first() || client.user
        let embed = new Discord.RichEmbed()
        .setColor("2E2EFE")
        .setDescription(":hugging: **" + message.author.username + "** fait un gros calin à **" + mention.username + "** !")
        .setImage(hugList[alea])
        message.channel.send(embed)
        cool.add(message.author.id)
        setTimeout(() => {
            cool.delete(message.author.id)
        }, 5000);
    }
}

module.exports = hug