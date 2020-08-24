const Discord = require('discord.js')
const fs = require('fs')

function grimace(message, client, prefix, cool, f){
    if(message.content.toLowerCase().startsWith(prefix + "grimace")){
        const grimaceList = JSON.parse(fs.readFileSync('./data/gifs/grimace.json'))
        if(cool.has(message.author.id)) return f.erreur("Vous devez attendre 5 secondes entre chaque commande !",message.channel.id)
        let alea = f.random(0,grimaceList.length - 1)
        let mention = message.mentions.users.first() || client.user
        let embed = new Discord.RichEmbed()
        .setColor("2E2EFE")
        .setDescription(":stuck_out_tongue_closed_eyes:  **" + message.author.username + "** fait sa plus belle grimace pour **" + mention.username + "** !")
        .setImage(grimaceList[alea])
        message.channel.send(embed)
        cool.add(message.author.id)
        setTimeout(() => {
            cool.delete(message.author.id)
        }, 5000);
    }
}

module.exports = grimace