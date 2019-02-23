let sql = require("sqlite");
sql.open("./src/db.sqlite");

/**
 * @param {Object} message - The message object
 * @param {array} contrib - Users that are allowed to use that command
**/
module.exports = async (message, contrib) => {
    try {
        if (contrib.includes(message.author.tag)) {
            if (message.mentions.users.size === 0) {
                if (!await sql.get("select * from blocked where id=\"" + message.content.split(" ")[1] + "\"")) {
                    sql.run("insert into blocked values (\"" + message.content.split(" ")[1] + "\")");
                    message.channel.send("Ajoutée `" + message.content.split(" ")[1] + "` à la liste bloquée.");
                } else {
                    message.channel.send("L'identifiant est déjà bloqué.");
                }
            }
        } else {
            return message.channel.send("Autorisations manquantes");
        }
    } catch (e) {
        console.log("[DISCORD-CAPTCHA-block] >> " + e);
    }
};
