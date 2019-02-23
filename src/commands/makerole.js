const config = require("../config.json");
/**
 * 
 * @param {object} message - The message object
 */
module.exports = (message) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you are missing the `ADMINISTRATOR` permission");
    if(message.guild.roles.get(config.userrole)){
        message.reply("Il y a déjà un rôle pour les vérifications. Réagir avec ðŸ‡¾ si vous voulez que j'en crée un ou avec ðŸ‡³ annuler.")
        .then(m => {m.react("ðŸ‡¾"); m.react("ðŸ‡³"); m.awaitReactions(
        mes => (mes.emoji.name === "ðŸ‡¾" && mes.users.filter(u => u.id === message.author.id)).size === 1 ? (() => { message.guild.createRole({name:"Users",permissions:["SEND_MESSAGES"]}); message.reply("`Users` role created!"); })() : null
        )});
    } else {
        message.guild.createRole({name:"Users",permissions:["SEND_MESSAGES"]});
        message.reply("Le rôle `Users` créé!");
    }
};
