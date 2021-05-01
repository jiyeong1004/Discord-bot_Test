# Discord-bot_Test

## YouTube : [웹개발 얼쑤 ALLSSU](https://www.youtube.com/channel/UCZtMUSjSh9CLeIgNKvDdwBw)

### [My Tistory Blog](https://java-coding.tistory.com/6)

---

```javascript
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('token');
```

