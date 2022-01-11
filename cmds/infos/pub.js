const Discord = require('discord.js')

function pub(message, client, prefix){

    if (message.content.startsWith(prefix + "pub")){

        let embed = new Discord.MessageEmbed()

        embed.setColor("#2E2EFE")

        .setAuthor("Voici la publicité du serveur pour " + message.author.username + " :",client.user.displayAvatarURL())

        .setDescription(fs.readFileSync('./data/textes/pub.md', 'utf-8'))

        .setFooter(`A partager n'importe où sans modération !`)

        message.channel.send(embed)

    }

}

module.exports = pub
