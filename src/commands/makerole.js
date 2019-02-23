const config = require("../config.json");
/**
 * 
 * @param {object} message - The message object
 */
module.exports = (message) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you are missing the `ADMINISTRATOR` permission");
    if(message.guild.roles.get(config.userrole)){
        message.reply("Il y a d�j� un r�le pour les v�rifications. R�agir avec 🇾 si vous voulez que j'en cr�e un ou avec 🇳 annuler.")
        .then(m => {m.react("🇾"); m.react("🇳"); m.awaitReactions(
        mes => (mes.emoji.name === "🇾" && mes.users.filter(u => u.id === message.author.id)).size === 1 ? (() => { message.guild.createRole({name:"Users",permissions:["SEND_MESSAGES"]}); message.reply("`Users` role created!"); })() : null
        )});
    } else {
        message.guild.createRole({name:"Users",permissions:["SEND_MESSAGES"]});
        message.reply("Le r�le `Users` cr��!");
    }
};
