const {Telegraf} = require('telegraf');
const {promises: fs} = require('fs');
const path = require('path');
const axios = require('axios');
/**
 * how to get the secret token for creating a bot ?
 * -> Open telegram and search for BotFather
 * -> To read instruction type /start and press enter
 * -> to create a new bot type /newbot and press enter
 * -> it will ask for a bot name , give a bot name without a / , ex: coding_bot
 * -> then it will ask for a username ending with bot , ex: code_examples_js_cpp_bot
 * -> Link of my bot, https://t.me/Algorithm_js_bot
 */

const filePath = path.join(__dirname, './content.txt');
async function loadcontent() {
    return await fs.readFile(filePath, {encoding : 'utf-8'});
}

bot.start((ctx) => ctx.reply('Welcome to Algo_bot, What Algorithm are you looking for ?'));

bot.command('bubblesort', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/sorting/bubble-sort.js');
    return ctx.reply(response.data);
});

bot.command('insertionsort', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/sorting/insertion-sort.js');
    return ctx.reply(response.data);
});

bot.command('mergesort', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/sorting/merge-sort.js');
    return ctx.reply(response.data);
});

bot.command('quicksort', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/sorting/quick-sort.js');
    return ctx.reply(response.data);
});

bot.command('selectionsort', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/sorting/selection-sort.js');
    return ctx.reply(response.data);
});

bot.command('linearsearch', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/searching/linear-search.js');
    return ctx.reply(response.data);
});

bot.command('binarysearch', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/searching/binary-search.js');
    return ctx.reply(response.data);
});

bot.command('recursion', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/recursion/factorial.js');
    return ctx.reply(response.data);
});

bot.command('queueimplementation', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/queues/queue.js');
    return ctx.reply(response.data);
});

bot.command('stacksimplementation', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/stacks/stack.js');
    return ctx.reply(response.data);
});

bot.command('twoStacksimplementation', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/stacks/two-stack.js');
    return ctx.reply(response.data);
});

bot.command('singlylinkedlist', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/linked-lists/singly.js');
    return ctx.reply(response.data);
});

bot.command('doublylinkedlist', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/linked-lists/doubly.js');
    return ctx.reply(response.data);
});

bot.command('minheap', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/heaps/min-heap.js');
    return ctx.reply(response.data);
});

bot.command('maxheap', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/heaps/max-heap.js');
    return ctx.reply(response.data);
});

bot.command('graphbfs', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/graph/breadth-first-search.js');
    return ctx.reply(response.data);
});

bot.command('graphdfs', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/graph/depth-first-search.js');
    return ctx.reply(response.data);
});

bot.command('algorithm', async (ctx) => {
    const content = await loadcontent();
    ctx.reply(content);
});

bot.on(('sticker'), (ctx) => ctx.reply('❤️')); 

bot.launch();