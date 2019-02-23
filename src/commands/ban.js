/**
 * @param {Object} message - The message object, needed to get mentioned users, check if member has ADMINISTRATOR permissions and convert the first mentioned user in a guildmember 
 * @param {array} contrib - Users that are allowed to use that command
 * @returns {promise} message - The "missing permissions" promise (will return if member has not enough permissions
**/
module.exports = (message, contrib) => {
	if(!contrib || message.mentions.users.size === 0) return message.reply("vous n'êtes pas autorisé à utiliser la commande ou vous n'avez pas mentionné d'utilisateur.");
	if(contrib.includes(message.author.tag)) {
		message.mentions.members.first().ban().catch(console.log);
		message.reply("banni " + message.mentions.users.first().tag).catch(console.log);
	}
};
