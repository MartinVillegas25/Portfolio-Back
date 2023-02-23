const express = require('express');
const app = express();


//handerbar
app.set('view engine', 'hbs');

//static routes

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(8080, () => {
    console.log('listening on port 8080');
});



