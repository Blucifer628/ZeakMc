const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!';

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('watching Zeakmc', { type: 'WATCHING' });
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('Pong!');
    }
    // Add more commands here
});

// Welcome card for new members
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}!`);
});

client.login('YOUR_BOT_TOKEN');
