/**
 * @param {Object} message - The message object
 * @param {array} contrib - Users that are allowed to use that command
**/
module.exports = (message, contrib) => {
    try {
        if (contrib.includes(message.author.tag)) {
            let amount = parseInt(message.content.split(" ")[1]);
            message.channel.bulkDelete(++amount);
        } else {
            return message.channel.send("Autorisations manquantes");
        }
    } catch (e) {
        console.log("[DISCORD-CAPTCHA-clearMessages] >> " + e);
    }
};
