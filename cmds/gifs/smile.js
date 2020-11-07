const Discord = require('discord.js')
const fs = require('fs')

function smile(message, client, prefix, cool, f){
    if(message.content.toLowerCase().startsWith(prefix + "smile")){
        const smileList = JSON.parse(fs.readFileSync('./data/gifs/smile.json'))
        if(cool.has(message.author.id)) return f.erreur("Vous devez attendre 5 secondes entre chaque commande !",message.channel.id)
        let alea = f.random(0,smileList.length - 1)
        let mention = message.mentions.users.first() || client.user
        let embed = new Discord.MessageEmbed()
        .setColor("2E2EFE")
        .setDescription(":grin: **" + message.author.username + "** fait un grand sourir à **" + mention.username + "** !")
        .setImage(smileList[alea])
        message.channel.send(embed)
        cool.add(message.author.id)
        setTimeout(() => {
            cool.delete(message.author.id)
        }, 5000);
    }
}

module.exports = smile