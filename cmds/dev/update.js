const Discord = require('discord.js');
const shell = require('shelljs');
const fs = require('fs');

function update(message, client, prefix, config, f) {
    if (message.content.startsWith(prefix + 'update')) {
        try {
            message.channel.startTyping()
            shell.exec('git pull && npm update && pm2 reload ecosystem.config.js', {silent:false}, function(code, stdout, stderr) {
                message.reply(`Output:\n\`\`\`${stdout}${stderr}\`\`\``).then(m=>message.channel.stopTyping(true));
            });
        } catch (err) {
            message.reply(`EVAL **__ERROR__**\n\`\`\`xl\n'pm2 stop GL && git pull && npm update && pm2 start GL'\`\`\``);
            message.channel.stopTyping(true)
        }
    }
}

module.exports = update;
