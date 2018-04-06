require('dotenv').config();

const express = require('express');
const app = express();
const line = require('./singleton/line');
const lineApiHandler = require('./handler/webhook/line/v1');

app.get('/', (req, res) => {
    res.send('Index page');
});

app.post('/webhook/line/v1', line.middleware, lineApiHandler);

app.use((res, req, next) => {
    res.status(404);
    res.type('txt').send('404 - Page Not Found');
});