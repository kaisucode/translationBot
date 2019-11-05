
const Discord = require('discord.js');
const translate = require('google-translate-api');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.author == client.user)
		return
	processCommand(msg)
});

function processCommand(receivedMessage) {
	console.log("Message: " + receivedMessage)
	translateMessage(receivedMessage.content, receivedMessage)
}

function translateMessage(messageContents, receivedMessage) {
	translate(messageContents, {to: 'en'}).then(res => {
		if (messageContents != res.text)
			receivedMessage.channel.send(res.text)
	}).catch(err => {
		console.error(err);
	});
}

client.login('_YOUR_TOKEN_HERE_');

