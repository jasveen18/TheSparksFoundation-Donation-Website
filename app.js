const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render('index');
});

app.get('/donate', (req,res) => {
    res.render('donate');
});



app.listen(port, () => {
    console.log(`Server running at port no. ${port}`);
});