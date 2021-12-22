const Discord = require('discord.js');
const botIntents = [ Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS ];

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"], intents:botIntents} );

const prefix = '?';
const fs = require('fs');
require('dotenv').config();


client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Hello!');

    client.commands.get('clan').execute(Discord, client);
});

client.on('messageCreate', message => {

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const author = message.author;

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args);
    } else if (command == 'suggestion'){
        client.commands.get('suggestion').execute(message, args, author, client);
    }

});


client.login(process.env.DISCORD_TOKEN);