const Discord = require('discord.js')

function date() {
    const datefu = new Date();
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];
    const year = datefu.getFullYear();
    const month = months[datefu.getMonth()];
    const getdate = datefu.getDate();
    const date = getdate + ' ' + month + ' ' + year;
    return date;
};

function time() {
    const datefu = new Date();
    const hour = datefu.getHours();
    const min = datefu.getMinutes();
    const sec = datefu.getSeconds();
    const time = hour + ':' + min + ':' + sec;
    return time
}

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

function enteteDeTicket(user, raison){
    return `Ticket modmail ouvert par ${user} le ${date()} à ${time()} pour la raison "${raison}"\n-------------------------------------------------------------------------`
}

module.exports = {
    date,
    time,
    random,
    erreur,
    enteteDeTicket
 }