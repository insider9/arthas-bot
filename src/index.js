import Telegraf from 'telegraf';

import commandInline from './sounds/inline'
import soundsList from './sounds/soundsList'
import selfGreeting from "./greeting/selfGreeting";
import userGreeting from "./greeting/userGreeting";


const app = new Telegraf(process.env.BOT_TOKEN);

console.log('Я вернулся из небытия... ДА ДА Я');

app.use(selfGreeting, userGreeting);

app.on('inline_query', commandInline);

app.command('sounds-list', soundsList);

app.telegram.getMe().then((botInfo) => {
    app.options.username = botInfo.username;
});

app.startPolling();