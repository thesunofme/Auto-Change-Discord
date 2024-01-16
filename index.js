const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: true,
  checkUpdate: true
});
const keepAlive = require("./server")
const request = require('request');
const config = require('./config.json');
const mySecret = process.env['token']
const statuses = config.statuses;
var status_index = 0;

keepAlive()

console.log('Discord Custom Status Changer by https://github.com/zbzyy');
console.log('Modified by MrDarkShadoow');
console.log('Your status will be updated in few seconds');

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


    console.clear();

    console.log(`${client.user.tag} - rich presence started!`
               )
const r = new Discord.RichPresence()
    .setApplicationId('1076934775404757002')
    .setType('PLAYING')
    .setURL('https://www.youtube.com/watch?v=4UAGmtDEPSc')
    .setState('ㅤㅤㅤ🌸◕ ‿ ◕🌸ㅤhi!')
  
    .setName('💸better than yesterday💰')
    .setDetails('"𝘐 𝘸𝘰𝘯ʹ𝘵 𝘣𝘪𝘵𝘦 𝘪𝘧 𝘺𝘰𝘶ʹ𝘳𝘦 𝘯𝘪𝘤𝘦 𝘵𝘰 𝘮𝘦"')
    /*.setParty({
        max: 9999,
        current: 6789,
        id: Discord.getUUID(),
    })*/
    
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1078967664363438181/1175103459175956480/giphy.gif')
    .setAssetsLargeText('_reelDuckZ')
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1085934377680253031/1086385577865261056/giphy.gif')
    .setAssetsSmallText('Verify User')
    .addButton('Nghe nhạc ko ?', 'https://www.youtube.com/watch?v=ybaISsqERqg')
    .addButton('Discord Server', 'https://discord.gg/9ad8a4YM4nz')
     client.user.setActivity(r);
     client.user.setPresence({ status: "dnd" });
})

client.login(process.env.TOKEN)

setInterval(() => {
    request({
        method: 'PATCH',
        url: 'https://discordapp.com/api/v6/users/@me/settings',
        json: true,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36',
            'Authorization': process.env['token'],
            'Content-Type': 'application/json'
        },
        body: {
            'custom_status': {
                'text': statuses[status_index++ % statuses.length],
                'expires_at': null
            }
        }
    })
    console.log('Status updated');
}, config.time)
