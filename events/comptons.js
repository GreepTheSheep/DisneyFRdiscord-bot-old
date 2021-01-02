const Discord = require('discord.js')
function checkCounter(message, client){
    const channel = client.channels.cache.get("616055657346629635");
    channel.messages.fetch({ limit: 2 }).then(messagesC => {
        var messages = messagesC.array()
        var oldMessage = messages[1]
        var oldNumber = Number(oldMessage.content)
        var newNumber = Number(message.content)
        if (isNaN(newNumber)) return message.delete()
        if (oldNumber+1 !== newNumber) return message.delete()
    })
}
module.exports = checkCounter