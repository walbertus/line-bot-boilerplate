require('dotenv').config();

const express = require('express');
const app = express();
const line = require('./singleton/line');
const lineApiHandler = require('./handler/webhook/line/v1');

app.get('/', (req, res) => {
    res.send('Index page');
});

app.post('/webhook/line/v1', line.middleware, lineApiHandler);

app.listen(3000, (err) => {
    console.log('server started');
})