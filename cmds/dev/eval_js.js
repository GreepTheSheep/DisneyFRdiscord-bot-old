const Discord = require("discord.js");
const fs = require('fs');
const { Attachment } = require('discord.js');

 function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

 function eval_cmd(message, client, prefix, config, f) {
    if (message.content.startsWith(prefix + "eval")) {
        try {
            const args = message.content.split(" ").slice(1);
            if (args.length < 1) return message.react('❌');
            const code = args.join(" ");
            let evaled = eval(code);

             if (typeof evaled !== "string"){
                evaled = require("util").inspect(evaled);
            }
            if (clean(evaled).length > 1024 && clean(evaled).length < 1950) return message.reply(`Output:\n\`\`\`${clean(evaled)}\`\`\``);
            
            if (clean(evaled).length > 1950) return fs.writeFile('./data/eval.log', `Command: ${args.join(' ')}\nExit code: ${code}\n\n\nOutput:\n\n${clean(evaled)}`, 'utf8', (err) => {
                if (err) return function(){
                    console.log(err);
                    message.reply(`FS error: ${err}`)
                }
                const attachment = new Attachment('./data/eval.log')
                message.reply('Voici le résultat:', attachment)
            })
            
            message.reply(`EVAL:\n\`\`\`javascript\n${code}\`\`\`\n Resultat: \`${clean(evaled)}\``);
        } catch (err) {
            const args = message.content.split(" ").slice(1);
            const code = args.join(" ");
            message.reply(`EVAL **__ERROR__**\n\`\`\`javascript\n${code}\`\`\`\nNode Result: \`${clean(err)}\``);
        }
    }
 }

 module.exports = eval_cmd;
