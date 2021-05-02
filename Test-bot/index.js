const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '야') {  // 사용자가 입력할 message
    msg.reply('호!');  // 봇이 출력할 message
  }
});

client.login('token');  // token에 자신의 토큰 넣기