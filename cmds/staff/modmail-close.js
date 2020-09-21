const Discord = require('discord.js')
const fs = require('fs')
const { Attachment } = require('discord.js');
const wait = require('util').promisify(setTimeout);

async function modmail_close(message, client, prefix, config, f){
    try{
        if(message.content == prefix + "mmclose"){
            if (message.channel.parentID == message.guild.channels.find(c => c.name.toLowerCase() == 'modmail' && c.type == 'category').id){
                let embed = new Discord.RichEmbed
                embed.setColor('#5063E8')
                .setTitle('Etes vous sûr de fermer le salon ?')
                const menu = await message.channel.send(embed)
                await menu.react('✔')
                await menu.react('❌')

                const filter = (reaction, user) => {
                    return user.id === message.author.id;
                };

                menu.awaitReactions(filter, { max: 1, time: 120000, errors: ['time'] })
                .then(collected => {
                    const reaction = collected.first();
                    
                    if (reaction.emoji.name == '✔'){
                        menu.edit('<:Snap:661557175130521610>')
                        .then(m => wait(2000)
                        .then(a => message.channel.delete()))
                    } else {
                        message.delete()
                        menu.delete()
                    }		
                })
                .catch(collected => {
                    message.channel.send('Hmm... J\'ai une erreur')
                    console.log(collected)
                });
            } else message.react('❌')
        }
    } catch (err) {
        console.error(err)
    }
}

module.exports = modmail_close