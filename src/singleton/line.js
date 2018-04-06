const line = require('@line/bot-sdk');
const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET
};
const lineClient = new line.Client(config);
const lineMiddleware = line.middleware(config);

module.exports = {
    client: lineClient,
    middleware: lineMiddleware
};