const Discord = require('discord.js')

function cmds_index(message, client, prefix, cool, config, f){

    // -- Gifs
    const angry = require('./gifs/angry.js')
    angry(message, client, prefix, cool, f)
    
    const cry = require('./gifs/cry.js')
    cry(message, client, prefix, cool, f)

    const dance = require('./gifs/dance.js')
    dance(message, client, prefix, cool, f)

    const hey = require('./gifs/hey.js')
    hey(message, client, prefix, cool, f)

    const hug = require('./gifs/hug.js')
    hug(message, client, prefix, cool, f)

    const kiss = require('./gifs/kiss.js')
    kiss(message, client, prefix, cool, f)

    const please = require('./gifs/please.js')
    please(message, client, prefix, cool, f)

    const smile = require('./gifs/smile.js')
    smile(message, client, prefix, cool, f)

    const smug = require('./gifs/smug.js')
    smug(message, client, prefix, cool, f)

    // -- Infos
    const help = require('./infos/help.js')
    help(message, client, prefix)
    
    const patchnote = require('./infos/patchnote.js')
    patchnote(message, client, prefix, config, f)

    const about = require('./infos/about.js')
    about(message, client, prefix, config, f)

    

    // -- Modmail

    const modmailInfo = require('./infos/modmail.js')
    modmailInfo(message, client,prefix, config, f)

    const modmailGetChat = require('./modmail-get-chat.js')
    modmailGetChat(message, client,prefix, config, f)

    // -- Staff
    if(config.staff.includes(message.author.id)) {
        
        /*
        const change = require('./staff/change.js')
        change(message, client, prefix, config)
        */

       const staffMenu = require('./staff/staff-menu.js')
       staffMenu(message, client, prefix, config, f)

       const modmail_close = require('./staff/modmail-close')
       modmail_close(message, client, prefix, config, f)
    }

    // -- DEV
    if (message.author.id == '330030648456642562'){
        const eval_cmd = require('./dev/eval_js.js')
        eval_cmd(message, client, prefix, config, f)

        const update = require('./dev/update.js')
        update(message, client, prefix, config, f)
    }
    
}

module.exports = cmds_index
