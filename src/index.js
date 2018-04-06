require('dotenv').config();

const express = require('express');
const app = express();
const line = require('./singleton/line');
const lineApiHandler = require('./handler/webhook/line/v1');

app.get('/', (req, res) => {
    res.send('Index page');
});

app.post('/webhook/line/v1', line.middleware, lineApiHandler);

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('server started');
})