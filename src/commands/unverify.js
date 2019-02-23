let sql = require("sqlite");
sql.open("./src/db.sqlite");

/**
 * @param {object} message - The message object
 * @param {object} config - The config object
 */

module.exports = (message, config) => {
	if(!message.member.roles.has(config.userrole)) return message.reply("vous n'êtes pas encore vérifié.");
	message.member.removeRole(config.userrole).catch(e => console.log(e)).then(() => message.reply("non vérifié !!"));
};
