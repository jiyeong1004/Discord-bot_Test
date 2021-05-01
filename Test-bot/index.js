const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '야') {
    msg.reply('호!');
  }
});

client.login('ODM4MDI5ODgxNzQ0Njg3MTE0.YI1KJQ.qzYv8IHR0aLFnvE9nQZWuq4nSeg');