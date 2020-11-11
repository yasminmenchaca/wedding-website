const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;



app.get('*', function (req, res, next) {
    if (req.header('x-forwarded-proto') !== 'https') {
        res.redirect(`https://${req.header('host')}${req.url}`)
    } else {
        next();
    }
});

app.use(express.static('build'));

app.listen(PORT);