const Discord = require('discord.js')

function random(min, max){
    return Math.round(Math.random() * (max - min) + min)
}
function erreur(message,channel){
    let embed = new Discord.RichEmbed()
    .setColor("FE2E2E")
    .setAuthor("Erreur :",client.user.displayAvatarURL)
    .setDescription(message)
    client.channels.get(channel).send(embed)
}

module.exports = {
    random,
    erreur
 }