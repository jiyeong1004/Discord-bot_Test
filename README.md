# Discord-bot_Test

## YouTube : [웹개발 얼쑤 ALLSSU](https://www.youtube.com/channel/UCZtMUSjSh9CLeIgNKvDdwBw)

디스코드 봇 - discord.js로 디코봇 만들기 : [https://www.youtube.com/watch?v=jATRl7_DD4g](https://www.youtube.com/watch?v=jATRl7_DD4g)

### [My Tistory Blog](https://java-coding.tistory.com/6)

---

### < Discord-Bot을 만들기 전에 준비해야 할 것들 >

- [Node.js](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/) 👈 다른 Editor(편집기)로 해도 됨
- [discord.js](https://discord.js.org/#/)

### [discord.js](https://discord.js.org/#/)

Visual Studio Code Terminal에서 `npm install discord.js`를 쳐서 discord.js를 다운로드 받아준다.

![npm](https://user-images.githubusercontent.com/51290739/116794577-ee3d1280-ab08-11eb-9e35-eeb76729bce6.jpg)

---

index.js에 붙여 넣는다.

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

사용자가 "야"라고 입력하면 Bot이 "호!"라고 출력을 해준다.

token 자리에는 discord developer에서 받았던 각자의 Token을 복사해서 넣어주면 된다.

![토큰넣기](https://user-images.githubusercontent.com/51290739/116794725-30b31f00-ab0a-11eb-968d-806150b4ebf1.jpg)

##### ※ Token은 자신만 알고 있어야 한다. 아무한테나 알려주면 우리가 만든 봇이 해킹될 수 있다.

![접속](https://user-images.githubusercontent.com/51290739/116794815-f6964d00-ab0a-11eb-88e9-411bfc55c57c.png)

Terminal에서 `node index.js`를 입력해서 Bot을 실행시켜준다.

![채팅](https://user-images.githubusercontent.com/51290739/116794819-ff871e80-ab0a-11eb-899b-217051565491.jpg)

사용자가 "야"라고 입력하면 Bot이 "호!"라고 출력해 주는 것을 볼 수 있다.
