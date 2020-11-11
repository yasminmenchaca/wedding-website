// const express = require('express');
// const path = require('path');
// const app = express();
// const PORT = process.env.PORT || 5000;

import sslRedirect from 'heroku-ssl-redirect';
import express from 'express';
const app = express();

// enable ssl redirect
app.use(sslRedirect());

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(process.env.PORT || 5000);

// app.use(express.static(path.join(__dirname, 'build')));
//
// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


// app.use((req, res, next) => {
//     if (req.header('x-forwarded-proto') !== 'https') {
//         res.redirect(`https://${req.header('host')}${req.url}`)
//     } else {
//         next();
//     }
// });

// app.use(express.static('build'));

// app.listen(PORT);