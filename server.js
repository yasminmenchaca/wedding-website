// const express = require('express');
// const path = require('path');
// const app = express();
// const PORT = process.env.PORT || 5000;
//
// app.use(express.static(path.join(__dirname, 'build')));
//
// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
//
// app.listen(PORT);

import sslRedirect from 'heroku-ssl-redirect';
import express from 'express';
const app = express();

// enable ssl redirect
app.use(sslRedirect());

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(process.env.PORT || 3000);