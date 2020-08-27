const Discord = require('discord.js');
const fs = require('fs')
const os = require('os');
const shell = require('shelljs');

async function about(message, client, prefix, config, f) {
    if (message.content.startsWith(prefix + 'about') ||message.content.startsWith(prefix + 'bot')) {

        message.channel.send('Je récupère quelques infos...').then(m=>{
            var discordjsver = shell.exec('npm view discord.js version', {silent:true}).stdout.replace('\n','')
            if (!discordjsver) var discordjsver = 'pas trouvé'
            var nodever = shell.exec('node -v', {silent:true}).stdout.replace('v','').replace('\n','')
            if (!nodever) var nodever = 'pas trouvé'
            var sysuptime = shell.exec('uptime --pretty', {silent:true}).stdout.replace('up ','').replace('\n','').replace('weeks', 'semaines').replace('days', 'jours').replace('hours', 'heures')
            if (!nodever) var sysuptime = 'pas trouvé'

            let totalSeconds = (client.uptime) / 1000;
            let weeks = Math.floor(totalSeconds / 604800)
            let days = Math.floor(totalSeconds / 86400);
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = totalSeconds % 60;

            let aboutembed = new Discord.RichEmbed()
            aboutembed.setColor("#9C01C4")
            .setTitle('A propos de ' + client.user.username)
            .addField('Temps en ligne:', `🤖: ${weeks} semaines, ${days} jours, ${hours} heures, ${minutes} minutes\n💻: ${sysuptime}`)
            .addField("Cast:", '- <@302092279114629121> pour l\'idée\n- <@299560596976697344> pour avoir commencé à le faire\n- <@330030648456642562> pour avoir repris le developpement')
            .addField('Infos avancées:', `Bibliothèque utilisée: [Discord.js](https://discord.js.org) (Version ${discordjsver})\nVersion du moteur Node.js: ${nodever}\nSystème utilisée pour faire fonctionner ce bot: ${os.type}: ${os.release}\nMémoire utilisée ${Math.round(os.freemem() / 1024 / 1000)}/${Math.round(os.totalmem() / 1024 / 1000)} MB [${(Math.round(os.freemem() / 1024 / 1000) * 100 / Math.round(os.totalmem() / 1024 / 1000)).toFixed(0)}%] (${client.user.username} utilise ${Math.round(process.memoryUsage().rss / 1024 / 1000)} MB [${(Math.round(process.memoryUsage().rss / 1024 / 1000) * 100 / Math.round(os.totalmem() / 1024 / 1000)).toFixed(0)}%])`)
            .setThumbnail(client.user.displayAvatarURL)
            .setFooter(client.user.username, client.user.displayAvatarURL)
            message.channel.send(aboutembed).then(m.delete())
        })
        
    }
}

module.exports = about;
