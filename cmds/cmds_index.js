const Discord = require('discord.js')

function cmds_index(message, client, prefix, cool, config, f){

    const help = require('./help.js')
    help(message, client, prefix)


    // -- Gifs
    const cry = require('./gifs/cry.js')
    cry(client, message, prefix, cool, f)

    const dance = require('./gifs/dance.js')
    dance(client, message, prefix, cool, f)

    const grimace = require('./gifs/grimace.js')
    grimace(client, message, prefix, cool, f)

    const hey = require('./gifs/hey.js')
    hey(client, message, prefix, cool, f)

    const hug = require('./gifs/hug.js')
    hug(client, message, prefix, cool, f)

    const kiss = require('./gifs/kiss.js')
    kiss(client, message, prefix, cool, f)

    const please = require('./gifs/please.js')
    please(client, message, prefix, cool, f)

    const smile = require('./gifs/smile.js')
    smile(client, message, prefix, cool, f)

    const smug = require('./gifs/smug.js')
    smug(client, message, prefix, cool, f)

    // -- Staff
    const change = require('./staff/change.js')
    change(message, client, prefix, cool, config)
}

module.exports = cmds_index